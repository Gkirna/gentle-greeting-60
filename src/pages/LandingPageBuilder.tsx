import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { ContactSection } from '@/components/marketing/ContactSection';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import landingPageHero from '@/assets/landing-page-hero.png';

const anatomyPoints = [
  'Attractive heading',
  'Complementing subheading',
  'Clear and concise message or information',
  'Testimonials for trust-building',
  'A strong call-to-action',
  'Apt use of interlinking',
  'Keep it above the footer',
  'Continuous testing and improvement',
];

const benefits = [
  {
    title: 'Save Time and Money',
    description: 'Faster design and publishing process lets you divert the saved time to strategizing and improving other aspects of the campaign.',
  },
  {
    title: 'Customizable Templates',
    description: 'Pick and customize templates to suit brand and campaign requirements. Preview and edit till you get the perfect result.',
  },
  {
    title: 'Conversion Rate Optimization',
    description: 'Integrated CRO tools help in continuous tracking and testing of landing pages to deliver the best results.',
  },
  {
    title: 'Dynamic Personalization',
    description: 'Target different messages for different audiences. Personalize the experience based on location, device, and user behavior.',
  },
];

const features = [
  {
    title: 'Build a page on your own',
    description: "Our landing page builder's easy drag and drop tools and a wide range of templates allow users to transform their dream campaign into reality in much less time than a developer.",
  },
  {
    title: 'Meet the exact requirements',
    description: 'Design exactly how you want the landing page to look. Customize templates for both desktop and mobile screens with simple clicks and drags.',
  },
  {
    title: 'High Conversion Rate',
    description: 'Get detailed performance reports of the landing pages to see what is working. Add Google Global Site Tag to track traffic in Google Analytics.',
  },
  {
    title: 'Fast Publishing',
    description: 'Publish the designed landing page straight to the website or to the custom domain and start generating quality leads.',
  },
];

export default function LandingPageBuilder() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-airtory-green/10" />
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-sm font-medium text-primary uppercase tracking-wider">
                Home / Landing Page Builder
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Landing Page Builder for Lead Generation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Landing Page Builder within the Airtory Studio gives advertisers a chance to build a consistent post ad click experience in a single platform. Using 38 different components, you can easily create location discovery, lead generation and product-focused landing pages among others.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Demo
                </Button>
                <Button size="lg" className="bg-airtory-green hover:bg-airtory-green/90 text-white">
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={landingPageHero} 
                alt="Landing Page Builder Preview" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Beautiful Landing Pages */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Design Beautiful Landing Pages
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A good landing page builder helps marketers and advertisers create professional-looking pages complemented by increased conversions and better ROI. It allows them to pick from a wide range of landing page templates and supporting components that are tested for their effectiveness in terms of conversion and lead generation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              One can easily design and publish high-quality landing pages on the fly using Airtory's top lead generation landing page builder, all without the support of a developer. It is more than a simple landing page builder with tools and features that allow creating, tracking, and optimizing pages for maximum impact.
            </p>
            <Button variant="link" className="text-primary font-medium">
              Read More →
            </Button>
          </div>
        </div>
      </section>

      {/* Anatomy of a Perfect Landing Page */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                The Anatomy Of A Perfect Landing Page
              </h2>
              <ul className="space-y-3">
                {anatomyPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-airtory-green flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                A perfect landing page is clear, crisp and concise, so that it does provide essential information but does not drive away the visitors due to information overload. Besides flawless design, a high-quality landing page also pays attention to its entry and exit pathways.
              </p>
              <Button variant="link" className="text-primary font-medium p-0">
                Read More →
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-airtory-green/20 rounded-2xl p-8 lg:p-12">
              <div className="aspect-video bg-background rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-muted-foreground">Landing Page Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Landing Pages */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            Types Of Landing Pages
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Landing pages are categorised into Static and Dynamic. Further, there are different formats available that one can pick from to make their campaign successful.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-8 rounded-xl shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Static Landing Pages</h3>
              <p className="text-muted-foreground">
                Standalone web pages that make use of persuasive elements like customer reviews, social proof, engaging media to convince the visitors and convert them into customers.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Dynamic Landing Pages</h3>
              <p className="text-muted-foreground">
                Web pages that display different messages to the audience depending on their user behaviour, location, and keywords they searched for, thus increasing the chances of conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Create Quality Landing Pages */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Create Quality Landing Pages Without A Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our best landing page builder helps you create lead generation or sales and other high performing pages. These pages are highly responsive across devices and different browsers, thus increasing visibility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-xl shadow-lg border border-border hover:border-primary transition-colors">
                <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Benefits of using a Landing Page Builder
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-primary-foreground/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
