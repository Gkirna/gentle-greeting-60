import { ReactNode } from 'react';

interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gray' | 'primary';
  align?: 'left' | 'center';
}

export function ContentSection({
  title,
  subtitle,
  children,
  className = '',
  variant = 'default',
  align = 'center',
}: ContentSectionProps) {
  const bgClasses = {
    default: 'bg-background',
    gray: 'bg-muted/50',
    primary: 'bg-primary/5',
  };

  return (
    <section className={`py-16 lg:py-24 ${bgClasses[variant]} ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {(title || subtitle) && (
          <div className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
            {subtitle && (
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
