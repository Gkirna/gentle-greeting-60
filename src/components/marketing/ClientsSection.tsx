import clientLogo1 from '@/assets/client-logo-1.png';
import clientLogo2 from '@/assets/client-logo-2.png';
import clientLogo3 from '@/assets/client-logo-3.png';
import clientLogo4 from '@/assets/client-logo-4.png';

const clientLogos = [
  { src: clientLogo1, alt: 'Adtoro Media' },
  { src: clientLogo2, alt: 'Asianet News' },
  { src: clientLogo3, alt: 'Win Consumers' },
  { src: clientLogo4, alt: 'RetailMeNot' },
];

export function ClientsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Our Clients Trust in Us
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 lg:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
