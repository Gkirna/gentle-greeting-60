import { LucideIcon } from 'lucide-react';

interface Feature {
  icon?: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: 'cards' | 'simple' | 'icons';
}

export function FeatureGrid({ features, columns = 3, variant = 'cards' }: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-6 lg:gap-8 ${gridCols[columns]}`}>
      {features.map((feature, index) => (
        <div
          key={index}
          className={`${
            variant === 'cards'
              ? 'bg-card p-6 lg:p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow'
              : variant === 'icons'
              ? 'text-center p-6'
              : 'p-4'
          }`}
        >
          {feature.icon && (
            <div className={`mb-4 ${variant === 'icons' ? 'flex justify-center' : ''}`}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
            </div>
          )}
          <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
