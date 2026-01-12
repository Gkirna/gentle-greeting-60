import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.png';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Ad platform interface preview"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Self Service Platform
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Our self-service ad builder and landing page creation studio serve as bespoke 
            advertising solutions for media platforms. They offer a host of intuitive tools 
            that can be utilized by publishers, advertisers, and brands at one cohesive 
            cloud-based platform. These tools enable users to build dynamic creatives in 
            bulk for cross-channel publishing and get access to market data for performance 
            analysis and optimization.
          </p>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Schedule Demo
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
