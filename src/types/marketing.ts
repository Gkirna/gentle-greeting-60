// Marketing site content types

export type BlockType = 
  | 'text' 
  | 'image' 
  | 'button' 
  | 'card' 
  | 'carousel'
  | 'faq' 
  | 'form' 
  | 'testimonial' 
  | 'logo_grid' 
  | 'video'
  | 'feature_list' 
  | 'stat' 
  | 'cta';

export type SectionKey = 
  | 'hero' 
  | 'publishers' 
  | 'agencies' 
  | 'brands' 
  | 'clients'
  | 'features' 
  | 'analytics' 
  | 'formats' 
  | 'ad_experiences'
  | 'traffic_partners' 
  | 'testimonials' 
  | 'faq' 
  | 'blogs'
  | 'contact' 
  | 'footer' 
  | 'navigation';

export type AnalyticsEventType = 
  | 'page_view' 
  | 'section_view' 
  | 'cta_click'
  | 'demo_request_submit' 
  | 'contact_form_submit'
  | 'scroll_depth' 
  | 'time_on_page';

export interface Asset {
  id: string;
  type: 'image' | 'video' | 'logo' | 'icon';
  storage_path: string;
  public_url: string | null;
  alt_text: string | null;
}

export interface SectionBlock {
  id: string;
  section_id: string;
  block_type: BlockType;
  content: Record<string, unknown>;
  order_index: number;
  assets: Asset | null;
}

export interface PageSection {
  id: string;
  section_key: SectionKey;
  title: string | null;
  subtitle: string | null;
  order_index: number;
  settings: Record<string, unknown>;
  blocks: SectionBlock[];
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  seo_title: string | null;
  seo_description: string | null;
  og_image_url: string | null;
  published: boolean;
  sections: PageSection[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  company: string | null;
  quote: string;
  is_featured: boolean;
  order_index: number;
  image: Asset | null;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string | null;
  order_index: number;
}

export interface ClientLogo {
  id: string;
  name: string;
  website_url: string | null;
  order_index: number;
  logo: Asset | null;
}

export interface TrafficPartner {
  id: string;
  name: string;
  website_url: string | null;
  order_index: number;
  logo: Asset | null;
}

export interface AdFormat {
  id: string;
  name: string;
  description: string | null;
  demo_url: string | null;
  category: string | null;
  is_featured: boolean;
  order_index: number;
  preview_image: Asset | null;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  author: string | null;
  published_at: string | null;
  order_index: number;
  thumbnail: Asset | null;
}

export interface NavigationItem {
  id: string;
  label: string;
  url: string;
  parent_id: string | null;
  order_index: number;
  open_in_new_tab: boolean;
  children?: NavigationItem[];
}

export interface SiteSetting {
  key: string;
  value: Record<string, unknown>;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  message?: string;
  referral_code?: string;
  submission_type?: 'contact' | 'demo_request';
}

export interface AnalyticsEvent {
  event_type: AnalyticsEventType;
  page_slug?: string;
  section_key?: string;
  element_id?: string;
  element_text?: string;
  visitor_id?: string;
  session_id?: string;
  metadata?: Record<string, unknown>;
}
