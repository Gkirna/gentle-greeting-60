import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'primary' | 'accent' | 'gradient';
}

export function CTASection({
  title,
  description,
  ctaText = 'Schedule Demo',
  ctaLink = '#contact',
  variant = 'primary',
}: CTASectionProps) {
  const bgClasses = {
    primary: 'bg-primary',
    accent: 'bg-accent',
    gradient: 'bg-gradient-teal',
  };

  return (
    <section className={`py-16 lg:py-24 ${bgClasses[variant]}`}>
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <Link to={ctaLink}>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg rounded-full"
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </section>
  );
}
