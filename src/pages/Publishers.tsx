import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { ContactSection } from '@/components/marketing/ContactSection';
import { PageHero } from '@/components/shared/PageHero';
import { ContentSection } from '@/components/shared/ContentSection';
import { FeatureGrid } from '@/components/shared/FeatureGrid';
import { CTASection } from '@/components/shared/CTASection';
import { DollarSign, Layers, Settings, BarChart3, Shield, Zap, Globe, Users } from 'lucide-react';

import publishersImg from '@/assets/publishers.jpg';

const publisherBenefits = [
  {
    icon: DollarSign,
    title: 'Maximize Revenue',
    description: 'Increase ad revenue with high-impact rich media formats that command premium CPMs.',
  },
  {
    icon: Layers,
    title: 'Diverse Ad Formats',
    description: 'Access 400+ ad formats including interstitials, native, video, and custom units.',
  },
  {
    icon: Settings,
    title: 'Easy Integration',
    description: 'Simple tag-based integration that works with any ad server or header bidding solution.',
  },
  {
    icon: BarChart3,
    title: 'Detailed Analytics',
    description: 'Track performance with granular reporting on viewability, engagement, and revenue.',
  },
];

const cmpFeatures = [
  {
    icon: Shield,
    title: 'Brand Safety',
    description: 'Protect your site with built-in brand safety controls and advertiser screening.',
  },
  {
    icon: Zap,
    title: 'Fast Load Times',
    description: 'Lightweight ad units that don\'t impact page performance or Core Web Vitals.',
  },
  {
    icon: Globe,
    title: 'Global Demand',
    description: 'Connect with premium advertisers worldwide through our demand partnerships.',
  },
  {
    icon: Users,
    title: 'User Experience',
    description: 'Non-intrusive ad experiences that respect your audience and improve engagement.',
  },
];

const adFormatsForPublishers = [
  {
    title: 'In-Article Ads',
    description: 'Native placements that blend seamlessly with editorial content.',
  },
  {
    title: 'Interstitial Ads',
    description: 'Full-screen experiences at natural content breaks.',
  },
  {
    title: 'Sticky Ads',
    description: 'Viewable units that stay in view as users scroll.',
  },
  {
    title: 'Video Ads',
    description: 'In-stream and out-stream video monetization options.',
  },
  {
    title: 'Rich Media Units',
    description: 'Interactive formats that drive higher engagement.',
  },
  {
    title: 'Mobile-First Formats',
    description: 'Touch-optimized experiences for mobile audiences.',
  },
];

export default function Publishers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        subtitle="For Publishers"
        title="Maximize Your Ad Revenue With Premium Rich Media"
        description="Monetize your content with high-impact ad formats that deliver superior user experiences and command premium CPMs."
        ctaText="Partner With Us"
        ctaLink="#contact"
        backgroundImage={publishersImg}
      />

      {/* Benefits */}
      <ContentSection
        title="How We Help Publishers"
        subtitle="Revenue Optimization"
      >
        <FeatureGrid features={publisherBenefits} columns={4} variant="cards" />
      </ContentSection>

      {/* Image + Content Section */}
      <ContentSection variant="gray">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
              Creative Management Platform
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Complete Control Over Your Inventory
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Our Creative Management Platform (CMP) gives you full control over the ad experiences on your site. 
              Set rules, approve creatives, and ensure brand safety while maximizing revenue.
            </p>
            <ul className="space-y-3">
              {[
                'Approve or reject creatives before they run',
                'Set frequency caps and pacing rules',
                'A/B test different ad placements',
                'Real-time performance monitoring',
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
          <div className="bg-card rounded-xl p-8 border border-border">
            <FeatureGrid features={cmpFeatures} columns={2} variant="simple" />
          </div>
        </div>
      </ContentSection>

      {/* Ad Formats */}
      <ContentSection
        title="Ad Formats for Publishers"
        subtitle="Flexible Monetization"
      >
        <FeatureGrid features={adFormatsForPublishers} columns={3} variant="cards" />
      </ContentSection>

      {/* Stats */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '40%', label: 'Average Revenue Increase' },
              { value: '2.5x', label: 'Higher Engagement' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '500+', label: 'Publisher Partners' },
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
        title="Ready to Boost Your Ad Revenue?"
        description="Join hundreds of publishers who trust Airtory for their ad monetization needs."
        variant="accent"
      />

      <ContactSection />
      <Footer />
    </div>
  );
}
