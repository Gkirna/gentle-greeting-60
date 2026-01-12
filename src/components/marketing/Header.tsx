import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const productsItems = [
  { label: 'Landing Page Builder', href: '/landing-page-builder' },
  { label: 'Rich Media Display', href: '/rich-media-display' },
  { label: 'Interactive Video', href: '#interactive-video' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'Trackers', href: '#trackers' },
  { label: 'Ad Formats', href: '#formats' },
  { label: 'Self Service Advertising Platform', href: '#platform' },
];

const customersItems = [
  { label: 'Publisher', href: '#publishers' },
  { label: 'Agencies', href: '#agencies' },
  { label: 'Brands', href: '#brands' },
];

const supportItems = [
  { label: 'Contact Us', href: '#contact' },
  { label: 'Guide', href: '#guide' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">Airtory</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors outline-none">
                PRODUCTS
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg z-50 min-w-[220px]">
                {productsItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    {item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        className="w-full px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="w-full px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted cursor-pointer"
                      >
                        {item.label}
                      </a>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Customers Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors outline-none">
                CUSTOMERS
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg z-50 min-w-[160px]">
                {customersItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <a
                      href={item.href}
                      className="w-full px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Support Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors outline-none">
                SUPPORT
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg z-50 min-w-[140px]">
                {supportItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <a
                      href={item.href}
                      className="w-full px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              LOGIN/SIGNUP
            </a>
            <a
              href="#blog"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              BLOG
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Schedule Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {/* Products */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('products')}
                  className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  PRODUCTS
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileDropdown === 'products' && (
                  <div className="pl-4 flex flex-col gap-2 py-2 bg-muted/50 rounded">
                    {productsItems.map((item) => (
                      item.href.startsWith('/') ? (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="text-sm text-muted-foreground hover:text-primary py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>

              {/* Customers */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('customers')}
                  className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  CUSTOMERS
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'customers' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileDropdown === 'customers' && (
                  <div className="pl-4 flex flex-col gap-2 py-2 bg-muted/50 rounded">
                    {customersItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Support */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('support')}
                  className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  SUPPORT
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'support' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileDropdown === 'support' && (
                  <div className="pl-4 flex flex-col gap-2 py-2 bg-muted/50 rounded">
                    {supportItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                LOGIN/SIGNUP
              </a>
              <a
                href="#blog"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </a>

              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Schedule Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
