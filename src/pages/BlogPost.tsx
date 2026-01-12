import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { Calendar, User, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';

import blogThumb1 from '@/assets/blog-thumb-1.jpg';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  author: string | null;
  published_at: string | null;
  created_at: string;
}

// Fallback content for demo
const fallbackContent = `
## Introduction

The digital advertising landscape is evolving rapidly, and staying ahead of the curve is essential for marketers and advertisers alike. In this comprehensive guide, we'll explore the key trends shaping the industry and provide actionable insights to help you succeed.

## The Rise of Interactive Advertising

Interactive advertising has emerged as one of the most effective ways to engage audiences. Unlike traditional static ads, interactive formats invite users to participate, creating memorable brand experiences that drive higher engagement rates.

### Key Benefits of Interactive Ads:

1. **Higher Engagement Rates**: Interactive ads see up to 3x higher engagement compared to static formats
2. **Better Brand Recall**: Users remember interactive experiences longer
3. **Valuable User Insights**: Interaction data provides rich behavioral insights
4. **Improved Conversion Rates**: Active participation leads to higher conversion intent

## Best Practices for Success

When implementing interactive advertising strategies, consider these best practices:

### 1. Know Your Audience

Understanding your target audience is fundamental to creating effective interactive experiences. Consider their preferences, behaviors, and the devices they use most frequently.

### 2. Start with Clear Objectives

Define what you want to achieve with your interactive campaign. Whether it's brand awareness, lead generation, or direct sales, having clear objectives will guide your creative decisions.

### 3. Keep It Simple

While interactive ads offer many possibilities, simplicity often wins. Focus on one or two key interactions that align with your message and goals.

### 4. Optimize for Mobile

With mobile devices accounting for the majority of digital ad impressions, ensure your interactive experiences work seamlessly across all screen sizes.

## Measuring Success

To evaluate the effectiveness of your interactive advertising campaigns, track these key metrics:

- **Engagement Rate**: Percentage of users who interact with the ad
- **Time Spent**: Average duration of user interaction
- **Completion Rate**: Percentage of users who complete the intended action
- **Conversion Rate**: How many interactions lead to desired outcomes

## Conclusion

Interactive advertising represents a significant opportunity for brands to connect with audiences in meaningful ways. By following best practices and continuously optimizing based on performance data, you can create compelling campaigns that drive real business results.

Ready to get started with interactive advertising? [Schedule a demo](/contact) to learn how Airtory can help transform your digital advertising strategy.
`;

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('published', true)
          .single();

        if (error) throw error;
        setPost(data);
      } catch (error) {
        // Use fallback for demo
        setPost({
          id: '1',
          title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Blog Post',
          slug: slug || '',
          content: fallbackContent,
          excerpt: 'An in-depth look at the latest trends in digital advertising.',
          author: 'Airtory Team',
          published_at: '2026-01-10',
          created_at: '2026-01-10',
        });
      } finally {
        setIsLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              {post.author && (
                <span className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {post.author}
                </span>
              )}
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            <img
              src={blogThumb1}
              alt={post.title}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_200px] gap-12">
              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                <div 
                  className="text-foreground"
                  dangerouslySetInnerHTML={{ 
                    __html: (post.content || fallbackContent)
                      .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-foreground mt-10 mb-4">$1</h2>')
                      .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-foreground mt-8 mb-3">$1</h3>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n\n/g, '</p><p class="text-muted-foreground mb-4">')
                      .replace(/^(.*)$/gm, '<p class="text-muted-foreground mb-4">$1</p>')
                      .replace(/- (.*)/g, '<li class="text-muted-foreground ml-4">$1</li>')
                      .replace(/\d\. \*\*(.*?)\*\*: (.*)/g, '<li class="text-muted-foreground ml-4 mb-2"><strong>$1</strong>: $2</li>')
                  }}
                />
              </article>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share Article
                  </h4>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-primary" />
                      <span className="text-sm">Twitter</span>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-primary" />
                      <span className="text-sm">Facebook</span>
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Advertising?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            See how Airtory can help you create engaging rich media ads that drive results.
          </p>
          <Link to="/#contact">
            <Button size="lg" variant="secondary">
              Schedule a Demo
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
