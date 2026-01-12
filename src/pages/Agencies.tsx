import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { ContactSection } from '@/components/marketing/ContactSection';
import { PageHero } from '@/components/shared/PageHero';
import { ContentSection } from '@/components/shared/ContentSection';
import { FeatureGrid } from '@/components/shared/FeatureGrid';
import { CTASection } from '@/components/shared/CTASection';
import { Rocket, DollarSign, Users, Clock, Layers, BarChart3, Palette, Zap } from 'lucide-react';

import agenciesImg from '@/assets/agencies.jpg';

const agencyBenefits = [
  {
    icon: Rocket,
    title: 'Reduce Production Cycles',
    description: 'Cut creative production time by 80% with our drag-and-drop builder and template library.',
  },
  {
    icon: DollarSign,
    title: 'Lower Production Costs',
    description: 'Eliminate expensive design and development resources for rich media ad creation.',
  },
  {
    icon: Users,
    title: 'Scale Your Team',
    description: 'Enable junior team members to produce agency-quality creative without coding.',
  },
  {
    icon: Clock,
    title: 'Faster Time-to-Market',
    description: 'Launch campaigns in hours instead of weeks with streamlined workflows.',
  },
];

const agencyFeatures = [
  {
    icon: Layers,
    title: 'White-Label Solution',
    description: 'Brand the platform as your own and offer premium creative services to clients.',
  },
  {
    icon: BarChart3,
    title: 'Client Reporting',
    description: 'Generate branded performance reports for client presentations and reviews.',
  },
  {
    icon: Palette,
    title: 'Brand Asset Management',
    description: 'Store and organize client brand assets for consistent creative production.',
  },
  {
    icon: Zap,
    title: 'Bulk Operations',
    description: 'Create multiple ad sizes and variations simultaneously with bulk export.',
  },
];

const workflowBenefits = [
  {
    title: 'Democratizing Rich Media',
    description: 'No more relying on expensive developers or specialized agencies. Your team can create interactive ads in-house.',
  },
  {
    title: 'Consistent Brand Experiences',
    description: 'Maintain brand consistency across all campaigns with saved brand kits and templates.',
  },
  {
    title: 'Real-Time Collaboration',
    description: 'Work together on creatives with commenting, approval workflows, and version control.',
  },
  {
    title: 'Instant Client Previews',
    description: 'Share live preview links with clients for quick approvals without file sharing.',
  },
  {
    title: 'Analytics for Optimization',
    description: 'Use performance data to inform future creative decisions and client recommendations.',
  },
  {
    title: 'Universal Tag Export',
    description: 'Export to any ad server or DSP with universal tags that work everywhere.',
  },
];

export default function Agencies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        subtitle="For Agencies"
        title="Create Rich Media Ads At Scale Without The Overhead"
        description="Reduce production costs, accelerate timelines, and deliver premium creative experiences for your clients with our agency-focused platform."
        ctaText="Schedule Agency Demo"
        ctaLink="#contact"
        backgroundImage={agenciesImg}
      />

      {/* Key Benefits */}
      <ContentSection
        title="Why Agencies Choose Airtory"
        subtitle="Agency Benefits"
      >
        <FeatureGrid features={agencyBenefits} columns={4} variant="cards" />
      </ContentSection>

      {/* Numbered Benefits */}
      <ContentSection variant="gray">
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              number: '01',
              title: 'Reduce Production Cycles',
              description: 'What used to take weeks now takes hours. Our intuitive builder lets your team create complex rich media ads without waiting for developers.',
            },
            {
              number: '02',
              title: 'Democratizing Rich Media',
              description: 'Empower every team member to create professional-grade interactive ads. No coding required, just creativity.',
            },
            {
              number: '03',
              title: 'Scale Without Limits',
              description: 'Handle more client work without adding headcount. Our platform multiplies your team\'s creative capacity.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border">
              <span className="text-6xl font-bold text-primary/20 block mb-4">{item.number}</span>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Agency Features */}
      <ContentSection
        title="Built for Agency Workflows"
        subtitle="Platform Features"
      >
        <FeatureGrid features={agencyFeatures} columns={4} variant="icons" />
      </ContentSection>

      {/* Workflow Benefits */}
      <ContentSection
        title="Transform Your Creative Process"
        subtitle="Workflow Advantages"
        variant="gray"
      >
        <FeatureGrid features={workflowBenefits} columns={3} variant="cards" />
      </ContentSection>

      {/* Testimonial */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-primary-foreground mb-8 italic">
              "Airtory has transformed how we deliver rich media campaigns. What used to require a team of developers now gets done by our designers in a fraction of the time."
            </blockquote>
            <div className="text-primary-foreground/80">
              <p className="font-semibold">Creative Director</p>
              <p>Leading Digital Agency</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Supercharge Your Agency?"
        description="Join hundreds of agencies delivering exceptional rich media campaigns with Airtory."
        variant="accent"
      />

      <ContactSection />
      <Footer />
    </div>
  );
}
