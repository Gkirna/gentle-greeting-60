import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AnalyticsEvent {
  event_type: 'page_view' | 'section_view' | 'cta_click' | 'demo_request_submit' | 'contact_form_submit' | 'scroll_depth' | 'time_on_page';
  page_slug?: string;
  section_key?: string;
  element_id?: string;
  element_text?: string;
  visitor_id?: string;
  session_id?: string;
  metadata?: Record<string, unknown>;
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

    const body: AnalyticsEvent | AnalyticsEvent[] = await req.json();
    const events = Array.isArray(body) ? body : [body];

    // Extract request metadata
    const userAgent = req.headers.get('user-agent') || undefined;
    const referrer = req.headers.get('referer') || undefined;

    // Parse UTM parameters from referrer if available
    let utm_source: string | undefined, utm_medium: string | undefined, utm_campaign: string | undefined;
    if (referrer) {
      try {
        const url = new URL(referrer);
        utm_source = url.searchParams.get('utm_source') || undefined;
        utm_medium = url.searchParams.get('utm_medium') || undefined;
        utm_campaign = url.searchParams.get('utm_campaign') || undefined;
      } catch {
        // Invalid URL, skip UTM parsing
      }
    }

    // Validate and prepare events
    const validEventTypes = ['page_view', 'section_view', 'cta_click', 'demo_request_submit', 'contact_form_submit', 'scroll_depth', 'time_on_page'];
    const preparedEvents = events
      .filter(event => validEventTypes.includes(event.event_type))
      .map(event => ({
        event_type: event.event_type,
        page_slug: event.page_slug,
        section_key: event.section_key,
        element_id: event.element_id,
        element_text: event.element_text,
        visitor_id: event.visitor_id,
        session_id: event.session_id,
        user_agent: userAgent,
        referrer,
        utm_source,
        utm_medium,
        utm_campaign,
        metadata: event.metadata || {},
      }));

    if (preparedEvents.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No valid events provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Tracking ${preparedEvents.length} analytics event(s)`);

    const { data, error } = await supabase
      .from('analytics_events')
      .insert(preparedEvents)
      .select('id');

    if (error) {
      console.error('Error inserting analytics events:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to track events' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, tracked: data?.length || 0 }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in track-analytics function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
