import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { ContactSection } from '@/components/marketing/ContactSection';
import { PageHero } from '@/components/shared/PageHero';
import { ContentSection } from '@/components/shared/ContentSection';
import { FeatureGrid } from '@/components/shared/FeatureGrid';
import { CTASection } from '@/components/shared/CTASection';
import { FlaskConical, RefreshCw, Tags, ListOrdered, Target, BarChart3, Zap, Settings } from 'lucide-react';

const experimentTypes = [
  {
    icon: FlaskConical,
    title: 'A/B Testing',
    description: 'Test multiple creative variations simultaneously to identify top performers and optimize campaigns in real-time.',
  },
  {
    icon: RefreshCw,
    title: 'Retargeting',
    description: 'Re-engage users who have previously interacted with your ads or visited your website with personalized messaging.',
  },
  {
    icon: Tags,
    title: 'Dynamic Tags',
    description: 'Automatically populate ad content with dynamic data feeds for personalized, contextual advertising.',
  },
  {
    icon: ListOrdered,
    title: 'Sequencing',
    description: 'Tell your brand story across multiple touchpoints with sequential messaging and creative rotation.',
  },
];

const dcoFeatures = [
  {
    icon: Target,
    title: 'Audience Targeting',
    description: 'Dynamically adjust creative elements based on audience segments, demographics, and behaviors.',
  },
  {
    icon: Settings,
    title: 'Rule-Based Optimization',
    description: 'Set up rules to automatically swap creative elements based on performance metrics.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Monitor experiment performance in real-time with detailed reporting and insights.',
  },
  {
    icon: Zap,
    title: 'Instant Updates',
    description: 'Make changes to live experiments instantly without republishing your campaigns.',
  },
];

const useCases = [
  {
    title: 'E-commerce Personalization',
    description: 'Show products based on browsing history, cart abandonment, and purchase behavior for higher conversions.',
  },
  {
    title: 'Localized Messaging',
    description: 'Automatically adapt ad content based on geographic location, language, and regional preferences.',
  },
  {
    title: 'Weather-Based Advertising',
    description: 'Trigger specific creative variations based on real-time weather conditions in the viewer\'s location.',
  },
  {
    title: 'Time-Sensitive Campaigns',
    description: 'Display countdown timers and urgency messaging for flash sales and limited-time offers.',
  },
  {
    title: 'Multi-Variant Testing',
    description: 'Test headlines, images, CTAs, and offers simultaneously to find the optimal combination.',
  },
  {
    title: 'Sequential Storytelling',
    description: 'Guide users through a narrative journey with ads that build on previous impressions.',
  },
];

export default function Experiments() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        subtitle="Experiments & DCO"
        title="Optimize Creative Performance With Advanced Experimentation"
        description="Leverage A/B testing, dynamic creative optimization, retargeting, and sequencing to maximize ad performance and ROI."
        ctaText="Start Experimenting"
        ctaLink="#contact"
      />

      {/* Experiment Types */}
      <ContentSection
        title="Experimentation Capabilities"
        subtitle="Testing & Optimization"
      >
        <FeatureGrid features={experimentTypes} columns={4} variant="icons" />
      </ContentSection>

      {/* DCO Features */}
      <ContentSection
        title="Dynamic Creative Optimization"
        subtitle="Personalization at Scale"
        variant="gray"
      >
        <FeatureGrid features={dcoFeatures} columns={4} variant="cards" />
      </ContentSection>

      {/* How It Works */}
      <ContentSection
        title="How Experiments Work"
        subtitle="Simple Workflow"
      >
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Create Variants', desc: 'Build multiple creative variations with different elements' },
            { step: '02', title: 'Set Rules', desc: 'Define targeting rules and experiment parameters' },
            { step: '03', title: 'Run Experiment', desc: 'Launch your experiment and collect performance data' },
            { step: '04', title: 'Optimize', desc: 'Use insights to optimize and scale winning variants' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">{item.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Use Cases */}
      <ContentSection
        title="Popular Use Cases"
        subtitle="Real-World Applications"
        variant="gray"
      >
        <FeatureGrid features={useCases} columns={3} variant="cards" />
      </ContentSection>

      <CTASection
        title="Ready to Optimize Your Ad Performance?"
        description="Start running experiments and unlock the power of dynamic creative optimization."
        variant="primary"
      />

      <ContactSection />
      <Footer />
    </div>
  );
}
