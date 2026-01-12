import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

type DataType = 'testimonials' | 'faqs' | 'client_logos' | 'traffic_partners' | 'ad_formats' | 'blog_posts' | 'navigation' | 'settings';

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_PUBLISHABLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    if (req.method !== 'GET') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get data type from query params
    const url = new URL(req.url);
    const dataType = url.searchParams.get('type') as DataType;
    const category = url.searchParams.get('category');
    const featured = url.searchParams.get('featured') === 'true';
    const limit = parseInt(url.searchParams.get('limit') || '100');

    const validTypes: DataType[] = ['testimonials', 'faqs', 'client_logos', 'traffic_partners', 'ad_formats', 'blog_posts', 'navigation', 'settings'];

    if (!dataType || !validTypes.includes(dataType)) {
      return new Response(
        JSON.stringify({ error: 'Invalid data type. Valid types: ' + validTypes.join(', ') }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Fetching marketing data: ${dataType}`);

    let data: any = null;
    let error: any = null;

    switch (dataType) {
      case 'testimonials':
        const testimonialsQuery = supabase
          .from('testimonials')
          .select(`
            id,
            name,
            role,
            company,
            quote,
            is_featured,
            order_index,
            image:image_asset_id (
              id,
              public_url,
              alt_text
            )
          `)
          .eq('is_active', true)
          .order('order_index', { ascending: true })
          .limit(limit);

        if (featured) {
          testimonialsQuery.eq('is_featured', true);
        }

        ({ data, error } = await testimonialsQuery);
        break;

      case 'faqs':
        const faqsQuery = supabase
          .from('faqs')
          .select('id, question, answer, category, order_index')
          .eq('is_active', true)
          .order('order_index', { ascending: true })
          .limit(limit);

        if (category) {
          faqsQuery.eq('category', category);
        }

        ({ data, error } = await faqsQuery);
        break;

      case 'client_logos':
        ({ data, error } = await supabase
          .from('client_logos')
          .select(`
            id,
            name,
            website_url,
            order_index,
            logo:logo_asset_id (
              id,
              public_url,
              alt_text
            )
          `)
          .eq('is_active', true)
          .order('order_index', { ascending: true })
          .limit(limit));
        break;

      case 'traffic_partners':
        ({ data, error } = await supabase
          .from('traffic_partners')
          .select(`
            id,
            name,
            website_url,
            order_index,
            logo:logo_asset_id (
              id,
              public_url,
              alt_text
            )
          `)
          .eq('is_active', true)
          .order('order_index', { ascending: true })
          .limit(limit));
        break;

      case 'ad_formats':
        const formatsQuery = supabase
          .from('ad_formats')
          .select(`
            id,
            name,
            description,
            demo_url,
            category,
            is_featured,
            order_index,
            preview_image:preview_image_id (
              id,
              public_url,
              alt_text
            )
          `)
          .eq('is_active', true)
          .order('order_index', { ascending: true })
          .limit(limit);

        if (featured) {
          formatsQuery.eq('is_featured', true);
        }
        if (category) {
          formatsQuery.eq('category', category);
        }

        ({ data, error } = await formatsQuery);
        break;

      case 'blog_posts':
        ({ data, error } = await supabase
          .from('blog_posts')
          .select(`
            id,
            slug,
            title,
            excerpt,
            author,
            published_at,
            order_index,
            thumbnail:thumbnail_id (
              id,
              public_url,
              alt_text
            )
          `)
          .eq('published', true)
          .order('order_index', { ascending: true })
          .limit(limit));
        break;

      case 'navigation':
        const navType = url.searchParams.get('nav_type') || 'main';
        ({ data, error } = await supabase
          .from('navigation_items')
          .select('id, label, url, parent_id, order_index, open_in_new_tab')
          .eq('is_active', true)
          .eq('navigation_type', navType)
          .order('order_index', { ascending: true }));

        // Organize into tree structure
        if (data) {
          const allItems = data as Array<{ id: string; label: string; url: string; parent_id: string | null; order_index: number; open_in_new_tab: boolean }>;
          const rootItems = allItems.filter((item) => !item.parent_id);
          data = rootItems.map((item) => ({
            ...item,
            children: allItems.filter((child) => child.parent_id === item.id),
          }));
        }
        break;

      case 'settings':
        const key = url.searchParams.get('key');
        const settingsQuery = supabase
          .from('site_settings')
          .select('key, value');

        if (key) {
          settingsQuery.eq('key', key);
        }

        ({ data, error } = await settingsQuery);
        break;
    }

    if (error) {
      console.error(`Error fetching ${dataType}:`, error);
      return new Response(
        JSON.stringify({ error: `Failed to fetch ${dataType}` }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ data }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in get-marketing-data function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
