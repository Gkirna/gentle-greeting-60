import blogThumb1 from '@/assets/blog-thumb-1.jpg';

const blogs = [
  {
    title: '10 Ways the Ad Creation Revolution is Changing Audience Engagement',
    image: blogThumb1,
  },
  {
    title: '5 Things You Need to Consider When Choosing an Ad Server',
    image: blogThumb1,
  },
  {
    title: '6 Key Benefits of Self-Service Advertising Platform',
    image: blogThumb1,
  },
];

const discoverLinks = [
  'Landing Page Builder',
  'Rich Media Display',
  'Interactive Video',
  'Experiments',
  'Trackers',
  'Ad Formats',
];

export function BlogsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Featured Blogs */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              FEATURED BLOGS
            </h2>
            <div className="space-y-6">
              {blogs.map((blog, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-4 group hover:bg-muted/50 rounded-lg p-2 -ml-2 transition-colors"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>

          {/* Discover More Options */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Discover more options
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {discoverLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
