import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';

export default function CreativePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Creative Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 12, 2026
            </p>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
                <p className="text-muted-foreground mb-4">
                  This Creative Policy outlines the standards and guidelines for all advertising 
                  creatives served through the Airtory platform. All advertisers and agencies must 
                  comply with these policies to maintain a safe and trustworthy advertising ecosystem.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Prohibited Content</h2>
                <p className="text-muted-foreground mb-4">The following content is strictly prohibited:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Illegal Products/Services:</strong> Ads promoting illegal activities, products, or services</li>
                  <li><strong>Adult Content:</strong> Sexually explicit or pornographic material</li>
                  <li><strong>Violence:</strong> Graphic violence, gore, or promotion of violence</li>
                  <li><strong>Hate Speech:</strong> Content that promotes discrimination or hatred</li>
                  <li><strong>Malware:</strong> Ads containing malicious software or deceptive downloads</li>
                  <li><strong>Counterfeit Goods:</strong> Promotion of fake or replica products</li>
                  <li><strong>Misleading Claims:</strong> False or unsubstantiated claims</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Restricted Content</h2>
                <p className="text-muted-foreground mb-4">
                  The following categories require additional review and may have limitations:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Alcohol:</strong> Must comply with local laws and age restrictions</li>
                  <li><strong>Gambling:</strong> Must be licensed and follow regional regulations</li>
                  <li><strong>Pharmaceuticals:</strong> Requires proper licensing and certifications</li>
                  <li><strong>Financial Services:</strong> Must include required disclosures</li>
                  <li><strong>Political Advertising:</strong> Subject to transparency requirements</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Technical Requirements</h2>
                <p className="text-muted-foreground mb-4">All creatives must meet these technical standards:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>File Size:</strong> Maximum initial load of 200KB, total 2MB</li>
                  <li><strong>Animation:</strong> Maximum 30 seconds, loop limit of 3</li>
                  <li><strong>Audio:</strong> User-initiated only, default muted</li>
                  <li><strong>Expansion:</strong> User-initiated for expandable formats</li>
                  <li><strong>Click Tracking:</strong> All clicks must be tracked properly</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. User Experience Standards</h2>
                <p className="text-muted-foreground mb-4">Creatives must provide a positive user experience:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Clear close buttons for expandable and overlay formats</li>
                  <li>No misleading interactive elements (fake buttons, system alerts)</li>
                  <li>Appropriate loading indicators</li>
                  <li>Proper landing page relevance</li>
                  <li>Accessible design considerations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Brand Safety</h2>
                <p className="text-muted-foreground mb-4">
                  Airtory is committed to brand safety. We reserve the right to reject or remove 
                  any creative that may pose a risk to our publisher partners or damage the 
                  reputation of the advertising ecosystem.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Review Process</h2>
                <p className="text-muted-foreground mb-4">
                  All creatives are subject to review before serving. Review times vary based on 
                  complexity and compliance. Creatives may be paused or rejected at any time if 
                  found to violate these policies.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Enforcement</h2>
                <p className="text-muted-foreground mb-4">
                  Violations of this policy may result in:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Creative rejection or removal</li>
                  <li>Account warnings</li>
                  <li>Account suspension or termination</li>
                  <li>Reporting to appropriate authorities</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about this Creative Policy, please contact:<br />
                  <strong>Email:</strong> creatives@airtory.com
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
