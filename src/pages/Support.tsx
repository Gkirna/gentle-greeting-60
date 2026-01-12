import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { FAQSection } from '@/components/marketing/FAQSection';
import { PageHero } from '@/components/shared/PageHero';
import { ContentSection } from '@/components/shared/ContentSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Phone, MapPin, MessageSquare, FileText, Video } from 'lucide-react';

const supportChannels = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help via email with our support team.',
    contact: 'support@airtory.com',
    action: 'Send Email',
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our support specialists.',
    contact: '+1 (844) 247-8679',
    action: 'Call Now',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with us in real-time during business hours.',
    contact: 'Available 9 AM - 6 PM EST',
    action: 'Start Chat',
  },
];

const resources = [
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Comprehensive guides and API documentation.',
    link: '#',
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for all features.',
    link: '#',
  },
  {
    icon: MessageSquare,
    title: 'Community Forum',
    description: 'Connect with other Airtory users.',
    link: '#',
  },
];

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: formData.name,
        email: formData.email,
        message: `Subject: ${formData.subject}\n\n${formData.message}`,
        submission_type: 'support',
      });

      if (error) throw error;

      toast({
        title: 'Support request submitted!',
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        subtitle="Support Center"
        title="How Can We Help You?"
        description="Get the support you need. Browse our resources, contact our team, or submit a support request."
        ctaText="Contact Support"
        ctaLink="#support-form"
      />

      {/* Support Channels */}
      <ContentSection
        title="Contact Our Team"
        subtitle="Support Channels"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {supportChannels.map((channel, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <channel.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{channel.title}</h3>
              <p className="text-muted-foreground mb-4">{channel.description}</p>
              <p className="font-medium text-foreground mb-4">{channel.contact}</p>
              <Button variant="outline">{channel.action}</Button>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Support Form */}
      <ContentSection
        title="Submit a Support Request"
        subtitle="Need Help?"
        variant="gray"
      >
        <div className="max-w-2xl mx-auto" id="support-form">
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl border border-border space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Describe Your Issue *</Label>
              <Textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Support Request'}
            </Button>
          </form>
        </div>
      </ContentSection>

      {/* Resources */}
      <ContentSection
        title="Self-Service Resources"
        subtitle="Help Yourself"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow group"
            >
              <resource.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
              <p className="text-muted-foreground">{resource.description}</p>
            </a>
          ))}
        </div>
      </ContentSection>

      {/* FAQ */}
      <FAQSection />

      {/* Office Locations */}
      <ContentSection
        title="Our Offices"
        subtitle="Visit Us"
        variant="gray"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">USA Office</h3>
                <p className="text-muted-foreground">
                  1209 Orange Street<br />
                  Wilmington, DE 19801<br />
                  United States
                </p>
                <p className="mt-3 text-foreground">
                  <strong>Phone:</strong> +1 (844) 247-8679
                </p>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">India Office</h3>
                <p className="text-muted-foreground">
                  Plot No. 45, Sector 44<br />
                  Gurugram, Haryana 122003<br />
                  India
                </p>
                <p className="mt-3 text-foreground">
                  <strong>Phone:</strong> +91 124 429 4218
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </div>
  );
}
