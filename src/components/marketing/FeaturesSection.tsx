import { Button } from '@/components/ui/button';
import easyStepsImg from '@/assets/easy-steps.png';
import universalAdsImg from '@/assets/universal-ads.png';
import analyticsImg from '@/assets/analytics.png';

const features = [
  {
    title: 'Easy 3-step Process to Create Ads',
    description: "Creating Rich Media Ads with Airtory's ad builder platform is a walk in the park. Our ad builder software empowers you with an ad toolkit to produce innovative and interactive digital ads within minutes. You concentrate on the look of the ad and we have your back(end) covered!",
    image: easyStepsImg,
    cta: 'REQUEST STUDIO DEMO',
    imagePosition: 'right',
  },
  {
    title: 'Universally Compatible Ads',
    description: "Send your brand message to all corners of the world with the universal ad tags available on Airtory's ad builder software. We understand your requirement of pushing ads across various platforms to reach the right audience. Airtory Ad Tags are compatible across Ad Servers, DSPs, Ad Exchanges along with independent publishers.",
    image: universalAdsImg,
    imagePosition: 'left',
  },
  {
    title: 'Best in Class Analytics',
    description: "Airtory's landing page creator and ad builder tool provide detailed real-time metrics at every step of the user journey. The data-driven optimization and performance of the creatives will ensure maximized impressions and ROI on your advertising spends.",
    image: analyticsImg,
    imagePosition: 'right',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Turn to Airtory to Produce And Scale Creative Content On the Fly
          </h2>
          <p className="text-lg text-muted-foreground">
            Here is how our best advertising platform can help you in creating and delivering innovative ad experiences.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                feature.imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-20`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {feature.description}
                </p>
                {feature.cta && (
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    {feature.cta}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
