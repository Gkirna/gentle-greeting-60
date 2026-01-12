import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { ContactSection } from '@/components/marketing/ContactSection';
import { PageHero } from '@/components/shared/PageHero';
import { ContentSection } from '@/components/shared/ContentSection';
import { FeatureGrid } from '@/components/shared/FeatureGrid';
import { CTASection } from '@/components/shared/CTASection';
import { Clock, Users, Zap, Shield, Settings, BarChart3, Globe, Layers } from 'lucide-react';

const platformFeatures = [
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Create, edit, and launch campaigns anytime with round-the-clock platform access.',
  },
  {
    icon: Users,
    title: 'No Vendor Dependency',
    description: 'Full control over your campaigns without waiting for agency or vendor support.',
  },
  {
    icon: Zap,
    title: 'Instant Publishing',
    description: 'Launch campaigns in minutes, not days. Real-time updates go live immediately.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with SSO, role-based access, and compliance certifications.',
  },
];

const capabilities = [
  {
    icon: Settings,
    title: 'Drag-and-Drop Builder',
    description: 'Create stunning ads without any coding knowledge using our intuitive visual editor.',
  },
  {
    icon: Layers,
    title: 'Template Library',
    description: 'Start with 400+ pre-built templates and customize them to match your brand.',
  },
  {
    icon: BarChart3,
    title: 'Built-in Analytics',
    description: 'Track performance with comprehensive dashboards and automated reports.',
  },
  {
    icon: Globe,
    title: 'Multi-Channel Support',
    description: 'Create ads for display, video, mobile, social, and connected TV from one platform.',
  },
];

const workflowSteps = [
  {
    step: '1',
    title: 'Sign Up',
    description: 'Create your account and get instant access to the platform.',
  },
  {
    step: '2',
    title: 'Create',
    description: 'Use our builder or templates to design your ad creative.',
  },
  {
    step: '3',
    title: 'Configure',
    description: 'Set up targeting, tracking, and optimization rules.',
  },
  {
    step: '4',
    title: 'Launch',
    description: 'Publish your campaign and start driving results.',
  },
];

export default function SelfServicePlatform() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        subtitle="Self-Service Platform"
        title="Full Control Over Your Ad Campaigns"
        description="Take charge of your advertising with our self-service platform. Create, manage, and optimize campaigns independently with enterprise-grade tools."
        ctaText="Get Started Free"
        ctaLink="#contact"
      />

      {/* Platform Features */}
      <ContentSection
        title="Why Go Self-Service?"
        subtitle="Platform Benefits"
      >
        <FeatureGrid features={platformFeatures} columns={4} variant="cards" />
      </ContentSection>

      {/* Workflow */}
      <ContentSection
        title="How It Works"
        subtitle="Simple 4-Step Process"
        variant="gray"
      >
        <div className="grid md:grid-cols-4 gap-8">
          {workflowSteps.map((item, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
              </div>
              {index < workflowSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Capabilities */}
      <ContentSection
        title="Platform Capabilities"
        subtitle="Powerful Tools"
      >
        <FeatureGrid features={capabilities} columns={4} variant="icons" />
      </ContentSection>

      {/* Comparison */}
      <ContentSection
        title="Self-Service vs. Managed Service"
        subtitle="Choose What Works for You"
        variant="gray"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border-2 border-primary">
              <h3 className="text-xl font-bold text-foreground mb-4">Self-Service</h3>
              <ul className="space-y-3">
                {[
                  'Full control over campaigns',
                  '24/7 platform access',
                  'No minimum spend',
                  'Instant changes and updates',
                  'Pay-as-you-go pricing',
                  'Dedicated support available',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm">✓</span>
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Managed Service</h3>
              <ul className="space-y-3">
                {[
                  'Expert campaign management',
                  'Strategic consultation',
                  'Custom creative development',
                  'Advanced optimization',
                  'Dedicated account manager',
                  'Premium support SLA',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">✓</span>
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <CTASection
        title="Ready to Take Control?"
        description="Start building and managing your ad campaigns independently with our self-service platform."
        variant="primary"
      />

      <ContactSection />
      <Footer />
    </div>
  );
}
