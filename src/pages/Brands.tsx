import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { ContactSection } from '@/components/marketing/ContactSection';
import { PageHero } from '@/components/shared/PageHero';
import { ContentSection } from '@/components/shared/ContentSection';
import { FeatureGrid } from '@/components/shared/FeatureGrid';
import { CTASection } from '@/components/shared/CTASection';
import { Home, Zap, Tag, BarChart3, Shield, Palette, Globe, Target } from 'lucide-react';

import brandsImg from '@/assets/brands.jpg';

const brandBenefits = [
  {
    icon: Home,
    title: 'In-House Solutions',
    description: 'Bring ad creative production in-house and reduce dependency on agencies.',
  },
  {
    icon: Zap,
    title: 'Create and Serve Ads in a Jiffy',
    description: 'Launch campaigns quickly with our intuitive platform and instant publishing.',
  },
  {
    icon: Tag,
    title: 'Universal Tags',
    description: 'One tag works across all ad servers and DSPs for seamless deployment.',
  },
  {
    icon: BarChart3,
    title: 'Built-in Analytics',
    description: 'Track every interaction with detailed performance insights and reporting.',
  },
];

const brandFeatures = [
  {
    icon: Shield,
    title: 'Brand Consistency',
    description: 'Maintain brand guidelines across all campaigns with saved brand kits and templates.',
  },
  {
    icon: Palette,
    title: 'Creative Control',
    description: 'Full control over your creative output without waiting for external partners.',
  },
  {
    icon: Globe,
    title: 'Global Campaigns',
    description: 'Localize ads for different markets with dynamic content and geo-targeting.',
  },
  {
    icon: Target,
    title: 'Personalization',
    description: 'Deliver tailored experiences with dynamic creative optimization.',
  },
];

const useCases = [
  {
    title: 'Product Launches',
    description: 'Create buzz with interactive experiences that showcase new products.',
  },
  {
    title: 'Seasonal Campaigns',
    description: 'Quickly produce holiday and seasonal creative without long lead times.',
  },
  {
    title: 'Always-On Branding',
    description: 'Maintain consistent brand presence with templated, easily updated ads.',
  },
  {
    title: 'Retargeting',
    description: 'Re-engage shoppers with personalized product recommendations.',
  },
  {
    title: 'Lead Generation',
    description: 'Capture leads directly in ads with built-in form functionality.',
  },
  {
    title: 'App Install Campaigns',
    description: 'Drive app downloads with engaging interactive mobile ads.',
  },
];

export default function Brands() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        subtitle="For Brands & Advertisers"
        title="Create And Serve Ads In A Jiffy"
        description="Take control of your advertising with in-house creative production. Create stunning rich media ads without agencies or developers."
        ctaText="Start Creating"
        ctaLink="#contact"
        backgroundImage={brandsImg}
      />

      {/* Key Benefits */}
      <ContentSection
        title="Why Brands Choose Airtory"
        subtitle="Brand Benefits"
      >
        <FeatureGrid features={brandBenefits} columns={4} variant="cards" />
      </ContentSection>

      {/* Visual Feature Section */}
      <ContentSection variant="gray">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {brandFeatures.map((feature, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border">
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
              Brand Empowerment
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Own Your Creative Process
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Stop waiting weeks for agencies to deliver. With Airtory, your marketing team can create 
              professional rich media ads in hours, giving you the agility to respond to market 
              opportunities instantly.
            </p>
            <ul className="space-y-3">
              {[
                'No coding or design skills required',
                'Access to 400+ ad templates',
                'Real-time collaboration and approvals',
                'Instant publishing to any platform',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">✓</span>
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Use Cases */}
      <ContentSection
        title="Popular Use Cases"
        subtitle="Campaign Types"
      >
        <FeatureGrid features={useCases} columns={3} variant="cards" />
      </ContentSection>

      {/* Success Metrics */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-12">
            Results Brands Achieve With Airtory
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '5x', label: 'Faster Creative Production' },
              { value: '60%', label: 'Cost Reduction' },
              { value: '3x', label: 'Higher Engagement' },
              { value: '40%', label: 'Better Conversions' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</div>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Advertising?"
        description="Join leading brands who create stunning rich media ads in-house with Airtory."
        variant="accent"
      />

      <ContactSection />
      <Footer />
    </div>
  );
}
