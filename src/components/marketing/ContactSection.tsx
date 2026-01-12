import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useContactForm } from '@/hooks/useContactForm';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const countries = [
  'United States',
  'India',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Singapore',
  'Japan',
  'Other',
];

export function ContactSection() {
  const { submitForm, isSubmitting } = useContactForm();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    country: '',
    phone: '',
    email: '',
    referral_code: '',
    message: '',
  });
  const [isRobot, setIsRobot] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isRobot) {
      toast({
        title: 'Please verify',
        description: 'Please confirm you are not a robot.',
        variant: 'destructive',
      });
      return;
    }

    const result = await submitForm({
      ...formData,
      submission_type: 'demo_request',
    });

    if (result.success) {
      toast({
        title: 'Message sent!',
        description: 'We will get back to you soon.',
      });
      setFormData({
        company: '',
        name: '',
        country: '',
        phone: '',
        email: '',
        referral_code: '',
        message: '',
      });
    } else {
      toast({
        title: 'Error',
        description: result.error || 'Something went wrong.',
        variant: 'destructive',
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form Section */}
          <div>
            <div className="mb-8">
              <p className="text-primary font-semibold mb-2">Self Service Advertising Platform</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Request Studio Demo
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    COMPANY NAME *
                  </label>
                  <Input
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    required
                    className="bg-card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    YOUR NAME *
                  </label>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className="bg-card"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    COUNTRY *
                  </label>
                  <Select value={formData.country} onValueChange={(val) => handleChange('country', val)}>
                    <SelectTrigger className="bg-card">
                      <SelectValue placeholder="Choose a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    PHONE NUMBER *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                    className="bg-card"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    YOUR EMAIL *
                  </label>
                  <Input
                    type="email"
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className="bg-card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    REFERRAL CODE
                  </label>
                  <Input
                    placeholder="Optional"
                    value={formData.referral_code}
                    onChange={(e) => handleChange('referral_code', e.target.value)}
                    className="bg-card"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  YOUR MESSAGE
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={4}
                  className="bg-card"
                />
              </div>

              {/* reCAPTCHA placeholder */}
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Checkbox
                  id="robot"
                  checked={!isRobot}
                  onCheckedChange={(checked) => setIsRobot(!checked)}
                />
                <label htmlFor="robot" className="text-sm text-muted-foreground cursor-pointer">
                  I'm not a robot
                </label>
                <span className="ml-auto text-xs text-muted-foreground">reCAPTCHA</span>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'SEND YOUR MESSAGE'
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div>
            <p className="text-muted-foreground mb-8">
              Write to us with questions, suggestions or just to say hi!
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Contact Information</h3>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground uppercase">E-MAIL</p>
                  <a href="mailto:contact@airtory.com" className="text-primary hover:underline block">
                    contact@airtory.com
                  </a>
                  <a href="mailto:sales@airtory.com" className="text-primary hover:underline block">
                    sales@airtory.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase mb-2">ADDRESS</p>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    6000 Shoalwood Avenue<br />
                    Austin, TX 78702, USA
                  </p>
                  <p>
                    1579, 26th Cross, 27th Main,<br />
                    Sector 2, HSR Layout,<br />
                    Bangalore, India - 560102
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
