import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { ContactSection } from '@/components/marketing/ContactSection';
import { PageHero } from '@/components/shared/PageHero';
import { ContentSection } from '@/components/shared/ContentSection';
import { FeatureGrid } from '@/components/shared/FeatureGrid';
import { CTASection } from '@/components/shared/CTASection';
import { Play, MousePointer, TrendingUp, Users, Eye, Target, Smartphone, BarChart3 } from 'lucide-react';

const videoAdTypes = [
  {
    icon: Play,
    title: 'In-Stream Video Ads',
    description: 'Engage viewers with pre-roll, mid-roll, and post-roll video ads that seamlessly integrate with video content.',
  },
  {
    icon: MousePointer,
    title: 'Out-Stream Video Ads',
    description: 'Display video ads outside of video players, appearing within article content and social feeds.',
  },
  {
    icon: Target,
    title: 'Rewarded Video Ads',
    description: 'Offer users rewards for watching video ads, driving higher completion rates and engagement.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Video Ads',
    description: 'Optimized video experiences for mobile devices with touch-friendly interactions and gestures.',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: '3x Higher Engagement',
    description: 'Interactive video ads drive significantly more engagement compared to static display ads.',
  },
  {
    icon: Users,
    title: 'Better Brand Recall',
    description: 'Interactive elements create memorable experiences that boost brand awareness and recall.',
  },
  {
    icon: Eye,
    title: 'Increased View Time',
    description: 'Users spend more time with interactive videos, increasing exposure to your message.',
  },
  {
    icon: BarChart3,
    title: 'Detailed Analytics',
    description: 'Track every interaction, view, and conversion with comprehensive analytics dashboards.',
  },
];

const interactiveFeatures = [
  {
    title: 'Clickable Hotspots',
    description: 'Add clickable areas within videos that reveal product details or redirect to landing pages.',
  },
  {
    title: 'In-Video Forms',
    description: 'Capture leads directly within the video experience without disrupting the viewer.',
  },
  {
    title: 'Branching Narratives',
    description: 'Let viewers choose their own path through the video for personalized experiences.',
  },
  {
    title: 'Shoppable Videos',
    description: 'Enable viewers to browse and purchase products directly from the video player.',
  },
  {
    title: 'Gamification Elements',
    description: 'Add quizzes, polls, and games to increase engagement and time spent with your ad.',
  },
  {
    title: '360° Video Support',
    description: 'Create immersive experiences with interactive 360-degree video advertisements.',
  },
];

export default function InteractiveVideoAds() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        subtitle="Interactive Video Ads"
        title="Captivate Your Audience With Interactive Video Experiences"
        description="Create engaging video ads with clickable hotspots, in-video forms, branching narratives, and more. Drive higher engagement and conversions with interactive video advertising."
        ctaText="Start Creating"
        ctaLink="#contact"
      />

      {/* Why Use Interactive Video */}
      <ContentSection
        title="Why Use Interactive Video Ads?"
        subtitle="The Future of Digital Advertising"
      >
        <FeatureGrid features={benefits} columns={4} variant="cards" />
      </ContentSection>

      {/* Video Ad Types */}
      <ContentSection
        title="Video Ad Formats"
        subtitle="Multiple Formats"
        variant="gray"
      >
        <FeatureGrid features={videoAdTypes} columns={4} variant="icons" />
      </ContentSection>

      {/* Interactive Features */}
      <ContentSection
        title="Interactive Capabilities"
        subtitle="Engagement Tools"
      >
        <FeatureGrid features={interactiveFeatures} columns={3} variant="cards" />
      </ContentSection>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">47%</div>
              <p className="text-primary-foreground/80 text-lg">Higher Click-Through Rate</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">89%</div>
              <p className="text-primary-foreground/80 text-lg">Video Completion Rate</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">3.5x</div>
              <p className="text-primary-foreground/80 text-lg">Conversion Increase</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Interactive Video Ads?"
        description="Get started with Airtory's interactive video ad builder and transform your video advertising strategy."
        variant="accent"
      />

      <ContactSection />
      <Footer />
    </div>
  );
}
