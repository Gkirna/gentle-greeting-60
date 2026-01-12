import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "How to use Airtory's Ad Builder Tool?",
    answer: "A user can simply fill in their details here and someone from the Airtory's team will reach out to them. On a successful subscription, he or she will be able to use Airtory's ad builder tools and can start creating impactful rich media advertising experiences on the go. It offers a range of built-in ad templates, drag and drop components and other intuitive tools that allow users to streamline ad creation and improve turnaround time whilst reducing overall production and operational costs.",
  },
  {
    question: 'How can I create my own ad?',
    answer: 'Creating your own ad with Airtory is simple. After signing up, you can choose from our library of 400+ ad templates, customize them with your brand assets using our drag-and-drop editor, preview your creation, and publish it across multiple channels with a single click.',
  },
  {
    question: 'What is a Creative Management Platform?',
    answer: 'A Creative Management Platform (CMP) is a software solution that enables advertisers, agencies, and publishers to create, manage, and optimize digital ad creatives at scale. It streamlines the entire creative workflow from design to deployment and provides analytics for performance optimization.',
  },
  {
    question: "What Ad Formats are available on Airtory's Ad Builder Platform?",
    answer: 'Airtory offers over 400 ad formats including Rich Media Display ads, Interactive Video ads, Parallax ads, Skin/Wrapper ads, Spin Cube ads, and many more. Each format is designed to maximize engagement and can be customized to match your brand guidelines.',
  },
  {
    question: 'What are universally compatible ads?',
    answer: 'Universally compatible ads are ad units that work seamlessly across all major ad servers, DSPs, ad exchanges, and publisher platforms. Airtory Ad Tags are designed to be platform-agnostic, ensuring your ads reach your target audience regardless of where they are published.',
  },
];

export function FAQSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
