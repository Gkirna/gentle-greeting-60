const products = [
  'Landing Page Builder',
  'Rich Media Display',
  'HTML5 Ads',
  'Programmatic Ads',
  'Interactive Video',
  'Experiments',
  'Trackers',
  'Ad Formats',
];

const platforms = ['Adctv', 'Self Serve Plus'];

const customers = ['Publishers', 'Agencies', 'Brands'];

const legalLinks = [
  { label: 'Blog', href: '#blog' },
  { label: 'Support', href: '#support' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Creative Policy', href: '#creative' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-lg font-bold mb-6">Platforms</h3>
            <ul className="space-y-3">
              {platforms.map((platform) => (
                <li key={platform}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customers */}
          <div>
            <h3 className="text-lg font-bold mb-6">Customers</h3>
            <ul className="space-y-3">
              {customers.map((customer) => (
                <li key={customer}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {customer}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-background/60 text-sm">
            © 2026 Airtory, Inc
          </p>
        </div>
      </div>
    </footer>
  );
}
