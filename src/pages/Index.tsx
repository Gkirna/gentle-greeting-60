import { Header } from '@/components/marketing/Header';
import { HeroSection } from '@/components/marketing/HeroSection';
import { ValueSection } from '@/components/marketing/ValueSection';
import { ClientsSection } from '@/components/marketing/ClientsSection';
import { FeaturesSection } from '@/components/marketing/FeaturesSection';
import { AdFormatsSection } from '@/components/marketing/AdFormatsSection';
import { TrafficPartnersSection } from '@/components/marketing/TrafficPartnersSection';
import { TestimonialsSection } from '@/components/marketing/TestimonialsSection';
import { FAQSection } from '@/components/marketing/FAQSection';
import { BlogsSection } from '@/components/marketing/BlogsSection';
import { ContactSection } from '@/components/marketing/ContactSection';
import { Footer } from '@/components/marketing/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValueSection />
        <ClientsSection />
        <FeaturesSection />
        <AdFormatsSection />
        <TrafficPartnersSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
