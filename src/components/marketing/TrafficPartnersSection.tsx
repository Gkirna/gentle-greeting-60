import partner1 from '@/assets/partner-1.png';
import partner2 from '@/assets/partner-2.png';
import partner3 from '@/assets/partner-3.png';
import partner4 from '@/assets/partner-4.png';

const partners = [
  { src: partner1, alt: 'PocketMath' },
  { src: partner2, alt: 'The Trade Desk' },
  { src: partner3, alt: 'AppNexus' },
  { src: partner4, alt: 'Brandzooka' },
];

export function TrafficPartnersSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Traffic Partners
          </h2>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-10 md:h-12 lg:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
