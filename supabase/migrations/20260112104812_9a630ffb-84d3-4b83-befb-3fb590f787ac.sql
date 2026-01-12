-- =============================================
-- AIRTORY MARKETING SITE BACKEND SCHEMA
-- =============================================

-- 1. ENUM TYPES
-- =============================================
CREATE TYPE public.block_type AS ENUM (
  'text', 'image', 'button', 'card', 'carousel', 
  'faq', 'form', 'testimonial', 'logo_grid', 'video',
  'feature_list', 'stat', 'cta'
);

CREATE TYPE public.asset_type AS ENUM ('image', 'video', 'logo', 'icon');

CREATE TYPE public.section_key AS ENUM (
  'hero', 'publishers', 'agencies', 'brands', 'clients',
  'features', 'analytics', 'formats', 'ad_experiences',
  'traffic_partners', 'testimonials', 'faq', 'blogs',
  'contact', 'footer', 'navigation'
);

CREATE TYPE public.analytics_event_type AS ENUM (
  'page_view', 'section_view', 'cta_click', 
  'demo_request_submit', 'contact_form_submit',
  'scroll_depth', 'time_on_page'
);

CREATE TYPE public.app_role AS ENUM ('admin', 'editor', 'viewer');

-- 2. USER ROLES TABLE (for admin access)
-- =============================================
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'viewer',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = auth.uid()
      AND role = 'admin'
  )
$$;

-- 3. PAGES TABLE
-- =============================================
CREATE TABLE public.pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  seo_title TEXT,
  seo_description TEXT,
  og_image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;

-- 4. PAGE SECTIONS TABLE
-- =============================================
CREATE TABLE public.page_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE NOT NULL,
  section_key section_key NOT NULL,
  title TEXT,
  subtitle TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  settings JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_page_sections_page_id ON public.page_sections(page_id);
CREATE INDEX idx_page_sections_order ON public.page_sections(page_id, order_index);

ALTER TABLE public.page_sections ENABLE ROW LEVEL SECURITY;

-- 5. ASSETS TABLE
-- =============================================
CREATE TABLE public.assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type asset_type NOT NULL DEFAULT 'image',
  storage_path TEXT NOT NULL,
  public_url TEXT,
  alt_text TEXT,
  caption TEXT,
  width INTEGER,
  height INTEGER,
  file_size INTEGER,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.assets ENABLE ROW LEVEL SECURITY;

-- 6. SECTION BLOCKS TABLE
-- =============================================
CREATE TABLE public.section_blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID REFERENCES public.page_sections(id) ON DELETE CASCADE NOT NULL,
  block_type block_type NOT NULL,
  content JSONB NOT NULL DEFAULT '{}',
  asset_id UUID REFERENCES public.assets(id) ON DELETE SET NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_section_blocks_section ON public.section_blocks(section_id);
CREATE INDEX idx_section_blocks_order ON public.section_blocks(section_id, order_index);

ALTER TABLE public.section_blocks ENABLE ROW LEVEL SECURITY;

-- 7. TESTIMONIALS TABLE
-- =============================================
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT,
  company TEXT,
  quote TEXT NOT NULL,
  image_asset_id UUID REFERENCES public.assets(id) ON DELETE SET NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- 8. FAQS TABLE
-- =============================================
CREATE TABLE public.faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

-- 9. CONTACT SUBMISSIONS TABLE
-- =============================================
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  country TEXT,
  message TEXT,
  referral_code TEXT,
  submission_type TEXT DEFAULT 'contact',
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX idx_contact_submissions_created ON public.contact_submissions(created_at DESC);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- 10. ANALYTICS EVENTS TABLE
-- =============================================
CREATE TABLE public.analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type analytics_event_type NOT NULL,
  page_slug TEXT,
  section_key TEXT,
  element_id TEXT,
  element_text TEXT,
  visitor_id TEXT,
  session_id TEXT,
  user_agent TEXT,
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_analytics_events_type ON public.analytics_events(event_type);
CREATE INDEX idx_analytics_events_page ON public.analytics_events(page_slug);
CREATE INDEX idx_analytics_events_created ON public.analytics_events(created_at DESC);
CREATE INDEX idx_analytics_events_visitor ON public.analytics_events(visitor_id);

ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- 11. CLIENT LOGOS TABLE
-- =============================================
CREATE TABLE public.client_logos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  logo_asset_id UUID REFERENCES public.assets(id) ON DELETE SET NULL,
  website_url TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.client_logos ENABLE ROW LEVEL SECURITY;

-- 12. TRAFFIC PARTNERS TABLE
-- =============================================
CREATE TABLE public.traffic_partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  logo_asset_id UUID REFERENCES public.assets(id) ON DELETE SET NULL,
  website_url TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.traffic_partners ENABLE ROW LEVEL SECURITY;

-- 13. AD FORMATS TABLE
-- =============================================
CREATE TABLE public.ad_formats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  preview_image_id UUID REFERENCES public.assets(id) ON DELETE SET NULL,
  demo_url TEXT,
  category TEXT,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.ad_formats ENABLE ROW LEVEL SECURITY;

-- 14. BLOG POSTS TABLE (for featured blogs)
-- =============================================
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  thumbnail_id UUID REFERENCES public.assets(id) ON DELETE SET NULL,
  author TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMPTZ,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- 15. NAVIGATION ITEMS TABLE
-- =============================================
CREATE TABLE public.navigation_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label TEXT NOT NULL,
  url TEXT NOT NULL,
  parent_id UUID REFERENCES public.navigation_items(id) ON DELETE CASCADE,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  open_in_new_tab BOOLEAN NOT NULL DEFAULT false,
  navigation_type TEXT NOT NULL DEFAULT 'main',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.navigation_items ENABLE ROW LEVEL SECURITY;

-- 16. SITE SETTINGS TABLE
-- =============================================
CREATE TABLE public.site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- =============================================
-- RLS POLICIES
-- =============================================

-- User Roles: Only admins can manage roles
CREATE POLICY "Admins can view all roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (public.is_admin());

CREATE POLICY "Admins can manage roles" ON public.user_roles
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Pages: Public read for published, admin write
CREATE POLICY "Public can read published pages" ON public.pages
  FOR SELECT USING (published = true);

CREATE POLICY "Admins can manage pages" ON public.pages
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Page Sections: Public read for active sections of published pages, admin write
CREATE POLICY "Public can read active sections" ON public.page_sections
  FOR SELECT USING (
    is_active = true AND
    EXISTS (SELECT 1 FROM public.pages WHERE id = page_id AND published = true)
  );

CREATE POLICY "Admins can manage sections" ON public.page_sections
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Assets: Public read, admin write
CREATE POLICY "Public can read assets" ON public.assets
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage assets" ON public.assets
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Section Blocks: Public read for active blocks, admin write
CREATE POLICY "Public can read active blocks" ON public.section_blocks
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage blocks" ON public.section_blocks
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Testimonials: Public read for active, admin write
CREATE POLICY "Public can read active testimonials" ON public.testimonials
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage testimonials" ON public.testimonials
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- FAQs: Public read for active, admin write
CREATE POLICY "Public can read active faqs" ON public.faqs
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage faqs" ON public.faqs
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Contact Submissions: Anyone can insert, only admins can read
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can read submissions" ON public.contact_submissions
  FOR SELECT TO authenticated
  USING (public.is_admin());

CREATE POLICY "Admins can update submissions" ON public.contact_submissions
  FOR UPDATE TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Analytics Events: Anyone can insert, only admins can read
CREATE POLICY "Anyone can track events" ON public.analytics_events
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can read analytics" ON public.analytics_events
  FOR SELECT TO authenticated
  USING (public.is_admin());

-- Client Logos: Public read for active, admin write
CREATE POLICY "Public can read active logos" ON public.client_logos
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage logos" ON public.client_logos
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Traffic Partners: Public read for active, admin write
CREATE POLICY "Public can read active partners" ON public.traffic_partners
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage partners" ON public.traffic_partners
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Ad Formats: Public read for active, admin write
CREATE POLICY "Public can read active formats" ON public.ad_formats
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage formats" ON public.ad_formats
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Blog Posts: Public read for published, admin write
CREATE POLICY "Public can read published blogs" ON public.blog_posts
  FOR SELECT USING (published = true);

CREATE POLICY "Admins can manage blogs" ON public.blog_posts
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Navigation Items: Public read for active, admin write
CREATE POLICY "Public can read active nav items" ON public.navigation_items
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage nav items" ON public.navigation_items
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Site Settings: Public read, admin write
CREATE POLICY "Public can read settings" ON public.site_settings
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage settings" ON public.site_settings
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- =============================================
-- TRIGGERS FOR updated_at
-- =============================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_pages_updated_at
  BEFORE UPDATE ON public.pages
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_page_sections_updated_at
  BEFORE UPDATE ON public.page_sections
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_section_blocks_updated_at
  BEFORE UPDATE ON public.section_blocks
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =============================================
-- STORAGE BUCKETS
-- =============================================
INSERT INTO storage.buckets (id, name, public) VALUES 
  ('marketing-images', 'marketing-images', true),
  ('logos', 'logos', true),
  ('illustrations', 'illustrations', true),
  ('blog-thumbnails', 'blog-thumbnails', true);

-- Storage Policies for public read
CREATE POLICY "Public can view marketing images" ON storage.objects
  FOR SELECT USING (bucket_id = 'marketing-images');

CREATE POLICY "Public can view logos" ON storage.objects
  FOR SELECT USING (bucket_id = 'logos');

CREATE POLICY "Public can view illustrations" ON storage.objects
  FOR SELECT USING (bucket_id = 'illustrations');

CREATE POLICY "Public can view blog thumbnails" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-thumbnails');

-- Storage Policies for admin write
CREATE POLICY "Admins can upload marketing images" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'marketing-images' AND public.is_admin());

CREATE POLICY "Admins can update marketing images" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'marketing-images' AND public.is_admin());

CREATE POLICY "Admins can delete marketing images" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'marketing-images' AND public.is_admin());

CREATE POLICY "Admins can upload logos" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'logos' AND public.is_admin());

CREATE POLICY "Admins can update logos" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'logos' AND public.is_admin());

CREATE POLICY "Admins can delete logos" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'logos' AND public.is_admin());

CREATE POLICY "Admins can upload illustrations" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'illustrations' AND public.is_admin());

CREATE POLICY "Admins can update illustrations" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'illustrations' AND public.is_admin());

CREATE POLICY "Admins can delete illustrations" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'illustrations' AND public.is_admin());

CREATE POLICY "Admins can upload blog thumbnails" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'blog-thumbnails' AND public.is_admin());

CREATE POLICY "Admins can update blog thumbnails" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'blog-thumbnails' AND public.is_admin());

CREATE POLICY "Admins can delete blog thumbnails" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'blog-thumbnails' AND public.is_admin());