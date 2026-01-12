import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { ContentSection } from '@/components/shared/ContentSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

import blogThumb1 from '@/assets/blog-thumb-1.jpg';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  author: string | null;
  published_at: string | null;
  created_at: string;
  thumbnail_url?: string;
}

// Fallback blog posts for demo
const fallbackPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Ways the Ad Creation Revolution is Changing Audience Engagement',
    slug: 'ad-creation-revolution',
    excerpt: 'Discover how modern ad creation tools are transforming the way brands connect with their audiences through interactive experiences.',
    author: 'Sarah Johnson',
    published_at: '2026-01-10',
    created_at: '2026-01-10',
    thumbnail_url: blogThumb1,
  },
  {
    id: '2',
    title: '5 Things You Need to Consider When Choosing an Ad Server',
    slug: 'choosing-ad-server',
    excerpt: 'Selecting the right ad server is crucial for campaign success. Here are the key factors to evaluate before making your decision.',
    author: 'Mike Chen',
    published_at: '2026-01-08',
    created_at: '2026-01-08',
    thumbnail_url: blogThumb1,
  },
  {
    id: '3',
    title: '6 Key Benefits of Self-Service Advertising Platform',
    slug: 'self-service-benefits',
    excerpt: 'Self-service platforms are revolutionizing digital advertising. Learn why more brands are taking control of their campaigns.',
    author: 'Emily Davis',
    published_at: '2026-01-05',
    created_at: '2026-01-05',
    thumbnail_url: blogThumb1,
  },
  {
    id: '4',
    title: 'The Rise of Rich Media Advertising: A Complete Guide',
    slug: 'rich-media-guide',
    excerpt: 'Rich media ads offer higher engagement rates and better brand recall. Here\'s everything you need to know to get started.',
    author: 'James Wilson',
    published_at: '2026-01-03',
    created_at: '2026-01-03',
    thumbnail_url: blogThumb1,
  },
  {
    id: '5',
    title: 'How to Measure Ad Viewability: Best Practices',
    slug: 'measure-viewability',
    excerpt: 'Viewability is a critical metric for digital advertisers. Learn how to measure and optimize for better results.',
    author: 'Lisa Park',
    published_at: '2026-01-01',
    created_at: '2026-01-01',
    thumbnail_url: blogThumb1,
  },
  {
    id: '6',
    title: 'Interactive Video Ads: The Future of Digital Advertising',
    slug: 'interactive-video-future',
    excerpt: 'Interactive video ads are driving unprecedented engagement rates. Discover why they\'re the future of digital advertising.',
    author: 'David Brown',
    published_at: '2025-12-28',
    created_at: '2025-12-28',
    thumbnail_url: blogThumb1,
  },
];

const categories = ['All', 'Blogs', 'Guides', 'Case Studies', 'News'];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(fallbackPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, slug, excerpt, author, published_at, created_at')
          .eq('published', true)
          .order('published_at', { ascending: false });

        if (error) throw error;
        if (data && data.length > 0) {
          setPosts(data);
        }
      } catch (error) {
        console.log('Using fallback posts');
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        subtitle="Blog & Insights"
        title="Stay Ahead in Digital Advertising"
        description="Expert insights, industry trends, and best practices to help you succeed with rich media advertising."
        ctaText=""
        ctaLink=""
      />

      {/* Search and Filters */}
      <ContentSection variant="gray">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Link to={`/blog/${featuredPost.slug}`} className="block mb-12">
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={featuredPost.thumbnail_url || blogThumb1}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Featured</span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {featuredPost.author && (
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.published_at || featuredPost.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <article className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="aspect-video">
                  <img
                    src={post.thumbnail_url || blogThumb1}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.published_at || post.created_at).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1 text-primary">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
          </div>
        )}
      </ContentSection>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get the latest insights on digital advertising delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              type="email"
              className="bg-primary-foreground text-foreground"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
