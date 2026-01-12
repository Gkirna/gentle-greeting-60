import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

    // Get slug from query params
    const url = new URL(req.url);
    const slug = url.searchParams.get('slug');

    if (!slug) {
      return new Response(
        JSON.stringify({ error: 'Page slug is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Fetching page: ${slug}`);

    // Fetch page with all related data
    const { data: page, error: pageError } = await supabase
      .from('pages')
      .select(`
        id,
        slug,
        title,
        seo_title,
        seo_description,
        og_image_url,
        published
      `)
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle();

    if (pageError) {
      console.error('Error fetching page:', pageError);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch page' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!page) {
      return new Response(
        JSON.stringify({ error: 'Page not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fetch sections for this page
    const { data: sections, error: sectionsError } = await supabase
      .from('page_sections')
      .select(`
        id,
        section_key,
        title,
        subtitle,
        order_index,
        settings
      `)
      .eq('page_id', page.id)
      .eq('is_active', true)
      .order('order_index', { ascending: true });

    if (sectionsError) {
      console.error('Error fetching sections:', sectionsError);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch sections' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fetch blocks for all sections
    const sectionIds = sections?.map(s => s.id) || [];
    let blocks: any[] = [];
    
    if (sectionIds.length > 0) {
      const { data: blocksData, error: blocksError } = await supabase
        .from('section_blocks')
        .select(`
          id,
          section_id,
          block_type,
          content,
          order_index,
          assets:asset_id (
            id,
            type,
            storage_path,
            public_url,
            alt_text
          )
        `)
        .in('section_id', sectionIds)
        .eq('is_active', true)
        .order('order_index', { ascending: true });

      if (blocksError) {
        console.error('Error fetching blocks:', blocksError);
      } else {
        blocks = blocksData || [];
      }
    }

    // Organize blocks by section
    const sectionsWithBlocks = sections?.map(section => ({
      ...section,
      blocks: blocks.filter(b => b.section_id === section.id),
    }));

    return new Response(
      JSON.stringify({
        page: {
          ...page,
          sections: sectionsWithBlocks,
        },
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in get-page function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
