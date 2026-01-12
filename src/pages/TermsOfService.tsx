import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 12, 2026
            </p>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing or using Airtory's services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using or accessing our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                <p className="text-muted-foreground mb-4">
                  Subject to these Terms, Airtory grants you a limited, non-exclusive, non-transferable 
                  license to access and use our platform for your internal business purposes.
                </p>
                <p className="text-muted-foreground mb-4">You may not:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Modify or copy the materials except as necessary for normal use</li>
                  <li>Use the materials for any commercial purpose without authorization</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person or organization</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Account Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials 
                  and for all activities that occur under your account. You agree to notify us 
                  immediately of any unauthorized use of your account.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  The Airtory platform, including all content, features, and functionality, is owned 
                  by Airtory Inc. and protected by international copyright, trademark, and other 
                  intellectual property laws.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. User Content</h2>
                <p className="text-muted-foreground mb-4">
                  You retain all rights to the content you upload to our platform. By uploading content, 
                  you grant Airtory a non-exclusive license to use, display, and distribute such content 
                  as necessary to provide our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Prohibited Uses</h2>
                <p className="text-muted-foreground mb-4">You agree not to use our services to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Distribute malware or harmful code</li>
                  <li>Engage in unauthorized data collection</li>
                  <li>Interfere with the proper functioning of the platform</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  Airtory shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of or inability to use the service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  We may terminate or suspend your account at any time without prior notice for 
                  conduct that we believe violates these Terms or is harmful to other users, us, 
                  or third parties, or for any other reason.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of 
                  the State of Delaware, United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, please contact us at:<br />
                  <strong>Email:</strong> legal@airtory.com<br />
                  <strong>Address:</strong> 1209 Orange Street, Wilmington, DE 19801, USA
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
