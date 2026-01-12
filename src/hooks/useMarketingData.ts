import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type {
  Page,
  Testimonial,
  FAQ,
  ClientLogo,
  TrafficPartner,
  AdFormat,
  BlogPost,
  NavigationItem,
  SiteSetting,
} from '@/types/marketing';

const SUPABASE_URL = 'https://scfgwjnhhfdmvezhkipt.supabase.co';

// Fetch page by slug with all sections and blocks
export function usePage(slug: string) {
  return useQuery({
    queryKey: ['page', slug],
    queryFn: async (): Promise<Page | null> => {
      const { data, error } = await supabase.functions.invoke('get-page', {
        body: null,
        method: 'GET',
        headers: {},
      });

      // Use direct fetch since invoke doesn't support query params well
      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/get-page?slug=${encodeURIComponent(slug)}`
      );

      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Failed to fetch page');
      }

      const result = await response.json();
      return result.page;
    },
    enabled: !!slug,
  });
}

// Fetch testimonials
export function useTestimonials(featured?: boolean) {
  return useQuery({
    queryKey: ['testimonials', featured],
    queryFn: async (): Promise<Testimonial[]> => {
      const params = new URLSearchParams({ type: 'testimonials' });
      if (featured) params.set('featured', 'true');

      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/get-marketing-data?${params}`
      );

      if (!response.ok) throw new Error('Failed to fetch testimonials');
      const result = await response.json();
      return result.data || [];
    },
  });
}

// Fetch FAQs
export function useFAQs(category?: string) {
  return useQuery({
    queryKey: ['faqs', category],
    queryFn: async (): Promise<FAQ[]> => {
      const params = new URLSearchParams({ type: 'faqs' });
      if (category) params.set('category', category);

      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/get-marketing-data?${params}`
      );

      if (!response.ok) throw new Error('Failed to fetch FAQs');
      const result = await response.json();
      return result.data || [];
    },
  });
}

// Fetch client logos
export function useClientLogos() {
  return useQuery({
    queryKey: ['client_logos'],
    queryFn: async (): Promise<ClientLogo[]> => {
      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/get-marketing-data?type=client_logos`
      );

      if (!response.ok) throw new Error('Failed to fetch client logos');
      const result = await response.json();
      return result.data || [];
    },
  });
}

// Fetch traffic partners
export function useTrafficPartners() {
  return useQuery({
    queryKey: ['traffic_partners'],
    queryFn: async (): Promise<TrafficPartner[]> => {
      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/get-marketing-data?type=traffic_partners`
      );

      if (!response.ok) throw new Error('Failed to fetch traffic partners');
      const result = await response.json();
      return result.data || [];
    },
  });
}

// Fetch ad formats
export function useAdFormats(featured?: boolean, category?: string) {
  return useQuery({
    queryKey: ['ad_formats', featured, category],
    queryFn: async (): Promise<AdFormat[]> => {
      const params = new URLSearchParams({ type: 'ad_formats' });
      if (featured) params.set('featured', 'true');
      if (category) params.set('category', category);

      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/get-marketing-data?${params}`
      );

      if (!response.ok) throw new Error('Failed to fetch ad formats');
      const result = await response.json();
      return result.data || [];
    },
  });
}

// Fetch blog posts
export function useBlogPosts(limit?: number) {
  return useQuery({
    queryKey: ['blog_posts', limit],
    queryFn: async (): Promise<BlogPost[]> => {
      const params = new URLSearchParams({ type: 'blog_posts' });
      if (limit) params.set('limit', limit.toString());

      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/get-marketing-data?${params}`
      );

      if (!response.ok) throw new Error('Failed to fetch blog posts');
      const result = await response.json();
      return result.data || [];
    },
  });
}

// Fetch navigation items
export function useNavigation(navType: string = 'main') {
  return useQuery({
    queryKey: ['navigation', navType],
    queryFn: async (): Promise<NavigationItem[]> => {
      const params = new URLSearchParams({ type: 'navigation', nav_type: navType });

      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/get-marketing-data?${params}`
      );

      if (!response.ok) throw new Error('Failed to fetch navigation');
      const result = await response.json();
      return result.data || [];
    },
  });
}

// Fetch site settings
export function useSiteSettings(key?: string) {
  return useQuery({
    queryKey: ['site_settings', key],
    queryFn: async (): Promise<SiteSetting[]> => {
      const params = new URLSearchParams({ type: 'settings' });
      if (key) params.set('key', key);

      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/get-marketing-data?${params}`
      );

      if (!response.ok) throw new Error('Failed to fetch settings');
      const result = await response.json();
      return result.data || [];
    },
  });
}
