import { ArrowRight } from 'lucide-react';
import publishersImg from '@/assets/publishers.jpg';
import agenciesImg from '@/assets/agencies.jpg';
import brandsImg from '@/assets/brands.jpg';

const valueCards = [
  {
    title: 'Publishers',
    description: 'Publishers running direct-sold campaigns can now offer high impact formats for increased revenue. They can enhance and differentiate their media offering with high-impact data-driven experiences. All on a single ad builder platform by Airtory.',
    image: publishersImg,
    color: 'teal',
  },
  {
    title: 'Agencies',
    description: "Agencies can now have an easy and cost-effective way of creating, testing, and deploying rich media ad formats using Airtory's ad builder platform. They can pick from 360+ high impact ad templates to quickly design and deploy ad units on multiple channels.",
    image: agenciesImg,
    color: 'blue',
  },
  {
    title: 'Brands',
    description: "Brands can streamline creative and traffic execution to deliver innovative and impactful ad experiences at a fraction of the cost using Airtory's ad builder software. Plus, it allows real-time tracking of advertising impressions, CTRs and dwell time in addition to more advanced metrics, maintaining 100% transparency in performance metrics.",
    image: brandsImg,
    color: 'purple',
  },
];

export function ValueSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Best Advertising Platform & Ad Builder Software
          </h2>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueCards.map((card, index) => (
            <div
              key={card.title}
              className="group bg-card rounded-2xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
