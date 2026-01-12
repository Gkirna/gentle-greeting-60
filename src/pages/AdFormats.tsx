import { useState } from 'react';
import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { ContactSection } from '@/components/marketing/ContactSection';
import { PageHero } from '@/components/shared/PageHero';
import { ContentSection } from '@/components/shared/ContentSection';
import { CTASection } from '@/components/shared/CTASection';
import { Button } from '@/components/ui/button';

import formatSkins from '@/assets/format-skins.png';
import formatParallax from '@/assets/format-parallax.png';
import formatSpin from '@/assets/format-spin.png';
import adFormatPreview from '@/assets/ad-format-preview.png';

const categories = [
  'All',
  'Display',
  'Rich Media',
  'Video',
  'Mobile',
  'Native',
  'Expandable',
  'Interstitial',
];

const adFormats = [
  { name: 'Parallax Cube', category: 'Rich Media', image: formatParallax, featured: true },
  { name: 'Skin Ads', category: 'Display', image: formatSkins, featured: true },
  { name: '3D Spin', category: 'Rich Media', image: formatSpin, featured: true },
  { name: 'Interactive Carousel', category: 'Rich Media', image: adFormatPreview, featured: false },
  { name: 'Expandable Banner', category: 'Expandable', image: formatParallax, featured: false },
  { name: 'Interstitial', category: 'Interstitial', image: formatSkins, featured: false },
  { name: 'In-Banner Video', category: 'Video', image: formatSpin, featured: false },
  { name: 'Native Infeed', category: 'Native', image: adFormatPreview, featured: false },
  { name: 'Mobile Scroller', category: 'Mobile', image: formatParallax, featured: false },
  { name: 'Scratch Card', category: 'Rich Media', image: formatSkins, featured: false },
  { name: 'Poll Ad', category: 'Rich Media', image: formatSpin, featured: false },
  { name: 'Shoppable Gallery', category: 'Rich Media', image: adFormatPreview, featured: false },
  { name: 'Video Slider', category: 'Video', image: formatParallax, featured: false },
  { name: 'Flip Card', category: 'Rich Media', image: formatSkins, featured: false },
  { name: 'Countdown Timer', category: 'Display', image: formatSpin, featured: false },
  { name: '360° Viewer', category: 'Rich Media', image: adFormatPreview, featured: false },
];

export default function AdFormats() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFormats = activeCategory === 'All' 
    ? adFormats 
    : adFormats.filter(format => format.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        subtitle="Ad Format Gallery"
        title="400+ Interactive Ad Formats"
        description="Explore our extensive library of rich media ad formats designed to captivate audiences and drive engagement across all devices and platforms."
        ctaText="View Live Demos"
        ctaLink="https://formats.airtory.com"
      />

      {/* Category Filter */}
      <ContentSection variant="gray">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Format Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFormats.map((format, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={format.image}
                  alt={format.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {format.featured && (
                  <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                  <Button
                    variant="secondary"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Preview
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{format.name}</h3>
                <span className="text-sm text-muted-foreground">{format.category}</span>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Format Categories Description */}
      <ContentSection
        title="Format Categories"
        subtitle="Something for Every Campaign"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Display Ads', count: '50+', desc: 'Standard and enhanced display formats' },
            { title: 'Rich Media', count: '150+', desc: 'Interactive and engaging experiences' },
            { title: 'Video Ads', count: '80+', desc: 'In-stream and out-stream video formats' },
            { title: 'Mobile Formats', count: '120+', desc: 'Touch-optimized mobile experiences' },
          ].map((cat, index) => (
            <div key={index} className="text-center p-6 bg-muted/50 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">{cat.count}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{cat.title}</h3>
              <p className="text-muted-foreground text-sm">{cat.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <CTASection
        title="Can't Find What You're Looking For?"
        description="Our team can create custom ad formats tailored to your specific campaign needs."
        ctaText="Request Custom Format"
        variant="primary"
      />

      <ContactSection />
      <Footer />
    </div>
  );
}
