import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { ContactSection } from '@/components/marketing/ContactSection';
import { Button } from '@/components/ui/button';
import { Zap, Shield, BarChart3, Palette, Layout, MousePointer } from 'lucide-react';
import richMediaHero from '@/assets/rich-media-hero.png';

const whyChooseFeatures = [
  {
    icon: Palette,
    title: 'Deliver Unique Ad Experiences',
    description: 'Airtory ad builder platform gives rich media display campaigns a new and unique twist, making it a memorable ad experience for users.',
  },
  {
    icon: Shield,
    title: 'Ad Fraud Detection for Increased ROI',
    description: 'Our systems are enabled to track and block any fraud traffic coming through. Users are immediately alerted of this activity.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track ad performance in real-time and optimize campaigns on the go with our rich media ad creator. Get detailed reporting of interaction.',
  },
  {
    icon: Zap,
    title: 'No Technical Expertise',
    description: 'Work magic with words and colours to make smashing rich media ads and let our ad creator handle the rest.',
  },
  {
    icon: Layout,
    title: 'Easy to Use Templates',
    description: 'Choose from a wide range of tried and proven templates. The advertising options capture more audience attention and skyrocket your ROI.',
  },
  {
    icon: MousePointer,
    title: 'Interactive Elements',
    description: 'Add interactive elements like games, quizzes, and videos to engage users and increase click-through rates.',
  },
];

const adFormats = [
  'Expandables',
  'Interstitials',
  'Floating Ads',
  'Parallax Ads',
  'Cube Ads',
  'Skin Ads',
  'Video Ads',
  'Carousel Ads',
];

const benefits = [
  {
    title: 'Higher Engagement Rates',
    description: 'Rich media ads generate significantly higher engagement compared to standard banner ads due to their interactive nature.',
  },
  {
    title: 'Better Brand Recall',
    description: 'Interactive and engaging ads create memorable experiences that improve brand recognition and recall.',
  },
  {
    title: 'Increased CTR',
    description: 'Rich media ads consistently outperform standard ads with impressive click-through rates.',
  },
  {
    title: 'Measurable Results',
    description: 'Track every interaction, view, and engagement metric to optimize your campaigns effectively.',
  },
];

export default function RichMediaDisplay() {
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
                Home / Rich Media Display
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Rich Media Advertising Platform
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If a user engages with a brand's advertisement, the brand recall will be higher. As more and more online display ads surround users, banner blindness becomes a crucial concern. Airtory helps you build engaging, effective and economical Rich Media display ads for Branding Campaigns to ensure better performance and higher ROI.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Capture maximum audience attention with highly engaging, dynamic, and interactive rich media ads through a platform designed to make programmatic easy.
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
                src={richMediaHero} 
                alt="Rich Media Advertising Platform" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Build Rich Media Ads Like a Boss */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Build Rich Media Ads Like a Boss!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meet better ways to make your ads more effective and bring more revenue with Airtory! We help you plan, execute and optimize high-performing ad campaigns with engaging custom-rich media advertising essential to your brand.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rich media is a digital advertising term that focuses on audio, video, text and other dynamic visual elements while creating ads, unlike traditional ads that are all about static elements. This, in turn, encourages the viewers to interact and engage with the ads, thereby boosting performance and conversion rate.
            </p>
            <Button variant="link" className="text-primary font-medium">
              Read More →
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Airtory */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Choose Airtory for Rich Media Ads Creation?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a creative ad management platform that offers a rich media display ad builder with enhanced features and advanced tools. The display ad builder platform offers numerous ways to engage and involve the audience to increase brand awareness and generate clicks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-xl shadow-lg border border-border hover:border-primary transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Formats Section */}
      <section className="py-16 lg:py-24 bg-airtory-green text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
            Best Rich Media Advertising Platform
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
            Compared to traditional ad formats, rich media ads include multiple options. Choose from a wide range of high performing rich media display ad formats and create successful campaigns using our intuitive and advanced rich media ad builder.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {adFormats.map((format, index) => (
              <span 
                key={index} 
                className="px-6 py-3 bg-white/20 rounded-full text-white font-medium hover:bg-white hover:text-airtory-green transition-colors cursor-pointer"
              >
                {format}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" className="bg-white text-airtory-green hover:bg-white/90">
              View All Ad Formats
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            Benefits of Rich Media Advertising
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background p-8 rounded-xl shadow-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Create Stunning Rich Media Ads?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of advertisers and marketers who trust Airtory to deliver exceptional ad experiences that drive results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
