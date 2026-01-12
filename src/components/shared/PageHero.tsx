import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  variant?: 'default' | 'gradient' | 'image';
}

export function PageHero({
  title,
  subtitle,
  description,
  ctaText = 'Schedule Demo',
  ctaLink = '#contact',
  backgroundImage,
  variant = 'default',
}: PageHeroProps) {
  const bgClasses = {
    default: 'bg-gradient-to-br from-primary/10 via-background to-accent/10',
    gradient: 'bg-gradient-teal',
    image: '',
  };

  return (
    <section
      className={`relative min-h-[500px] lg:min-h-[600px] flex items-center ${bgClasses[variant]}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {backgroundImage && <div className="absolute inset-0 bg-foreground/60" />}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {subtitle && (
            <span className={`text-sm md:text-base font-medium uppercase tracking-wider mb-4 block ${backgroundImage || variant === 'gradient' ? 'text-primary-foreground/80' : 'text-primary'}`}>
              {subtitle}
            </span>
          )}
          <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 ${backgroundImage || variant === 'gradient' ? 'text-primary-foreground' : 'text-foreground'}`}>
            {title}
          </h1>
          {description && (
            <p className={`text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto ${backgroundImage || variant === 'gradient' ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              {description}
            </p>
          )}
          {ctaText && (
            <Link to={ctaLink}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full">
                {ctaText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
