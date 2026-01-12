import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { ContactSection } from '@/components/marketing/ContactSection';
import { PageHero } from '@/components/shared/PageHero';
import { ContentSection } from '@/components/shared/ContentSection';
import { FeatureGrid } from '@/components/shared/FeatureGrid';
import { CTASection } from '@/components/shared/CTASection';
import { Activity, Target, Eye, TrendingUp, Shield, Zap, BarChart3, MousePointer } from 'lucide-react';

const trackerTypes = [
  {
    icon: Activity,
    title: 'Premium Trackers',
    description: 'Enterprise-grade tracking with advanced attribution models and cross-device measurement capabilities.',
  },
  {
    icon: Zap,
    title: 'Smart Trackers',
    description: 'AI-powered tracking that automatically optimizes based on user behavior and campaign performance.',
  },
  {
    icon: Target,
    title: 'Conversion Tracking',
    description: 'Track post-click and post-view conversions across multiple touchpoints in the customer journey.',
  },
  {
    icon: Eye,
    title: 'Viewability Tracking',
    description: 'Measure ad viewability with industry-standard metrics and MRC-accredited measurement.',
  },
];

const trackingFeatures = [
  {
    icon: MousePointer,
    title: 'Click Tracking',
    description: 'Track all clicks with detailed reporting on click-through rates, destinations, and user paths.',
  },
  {
    icon: TrendingUp,
    title: 'Engagement Metrics',
    description: 'Measure time spent, scroll depth, video completion, and interactive element engagement.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Reporting',
    description: 'Access live performance data with customizable dashboards and automated reports.',
  },
  {
    icon: Shield,
    title: 'Fraud Detection',
    description: 'Identify and filter invalid traffic with advanced bot detection and fraud prevention.',
  },
];

const integrations = [
  {
    title: 'Google Analytics',
    description: 'Seamlessly integrate with GA4 for unified reporting and audience insights.',
  },
  {
    title: 'Adobe Analytics',
    description: 'Connect with Adobe Experience Cloud for enterprise-level analytics.',
  },
  {
    title: 'DV360 & CM360',
    description: 'Native integration with Google Marketing Platform for comprehensive measurement.',
  },
  {
    title: 'Third-Party Verification',
    description: 'Compatible with IAS, DoubleVerify, MOAT, and other verification partners.',
  },
  {
    title: 'Attribution Partners',
    description: 'Integrate with AppsFlyer, Adjust, Branch, and other mobile attribution platforms.',
  },
  {
    title: 'Custom Pixels',
    description: 'Deploy custom tracking pixels and JavaScript tags for specialized measurement.',
  },
];

export default function Trackers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        subtitle="Tracking & Measurement"
        title="Comprehensive Tracking For Every Campaign"
        description="Measure what matters with premium trackers, smart attribution, conversion tracking, and viewability measurement across all your campaigns."
        ctaText="Get Started"
        ctaLink="#contact"
      />

      {/* Tracker Types */}
      <ContentSection
        title="Tracking Solutions"
        subtitle="Complete Measurement"
      >
        <FeatureGrid features={trackerTypes} columns={4} variant="icons" />
      </ContentSection>

      {/* Tracking Features */}
      <ContentSection
        title="Advanced Tracking Capabilities"
        subtitle="Powerful Features"
        variant="gray"
      >
        <FeatureGrid features={trackingFeatures} columns={4} variant="cards" />
      </ContentSection>

      {/* Metrics Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground text-center mb-12">
            Metrics We Track
          </h2>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { metric: 'Impressions', icon: '👁️' },
              { metric: 'Clicks', icon: '👆' },
              { metric: 'Conversions', icon: '✅' },
              { metric: 'Viewability', icon: '📊' },
              { metric: 'Engagement', icon: '💬' },
            ].map((item, index) => (
              <div key={index} className="bg-primary-foreground/10 rounded-xl p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-primary-foreground font-semibold">{item.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <ContentSection
        title="Seamless Integrations"
        subtitle="Connect Everywhere"
      >
        <FeatureGrid features={integrations} columns={3} variant="cards" />
      </ContentSection>

      <CTASection
        title="Ready to Track Your Campaign Performance?"
        description="Get comprehensive insights into your ad performance with Airtory's advanced tracking solutions."
        variant="accent"
      />

      <ContactSection />
      <Footer />
    </div>
  );
}
