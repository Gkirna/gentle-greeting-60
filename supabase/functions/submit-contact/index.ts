import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  message?: string;
  referral_code?: string;
  submission_type?: 'contact' | 'demo_request';
}

// Simple email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string | undefined): string | undefined {
  if (!input) return undefined;
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
    .slice(0, 1000); // Limit length
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body: ContactFormData = await req.json();

    // Validate required fields
    if (!body.name || !body.email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(body.name)!,
      email: body.email.toLowerCase().trim(),
      phone: sanitizeInput(body.phone),
      company: sanitizeInput(body.company),
      country: sanitizeInput(body.country),
      message: sanitizeInput(body.message),
      referral_code: sanitizeInput(body.referral_code),
      submission_type: body.submission_type || 'contact',
    };

    console.log(`Processing contact form submission from: ${sanitizedData.email}`);

    // Insert contact submission
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert(sanitizedData)
      .select('id')
      .single();

    if (error) {
      console.error('Error inserting contact submission:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to submit form' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Track the submission as an analytics event
    const eventType = sanitizedData.submission_type === 'demo_request' 
      ? 'demo_request_submit' 
      : 'contact_form_submit';

    await supabase
      .from('analytics_events')
      .insert({
        event_type: eventType,
        metadata: { submission_id: data.id },
      });

    console.log(`Contact form submitted successfully: ${data.id}`);

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in submit-contact function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
