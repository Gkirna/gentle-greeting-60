import { Button } from '@/components/ui/button';
import formatPreview from '@/assets/ad-format-preview.png';
import formatSkins from '@/assets/format-skins.png';
import formatParallax from '@/assets/format-parallax.png';
import formatSpin from '@/assets/format-spin.png';

const adFormats = [
  { name: 'SKINS/WRAPPER', image: formatSkins },
  { name: 'PARALLAX', image: formatParallax },
  { name: 'SPIN CUBE', image: formatSpin },
];

export function AdFormatsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Preview & Formats */}
          <div className="space-y-8">
            {/* Main Preview */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={formatPreview}
                alt="Ad format preview"
                className="w-full h-auto"
              />
            </div>

            {/* Format Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {adFormats.map((format) => (
                <div
                  key={format.name}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <img
                    src={format.image}
                    alt={format.name}
                    className="w-full h-auto rounded-md mb-2"
                  />
                  <p className="text-xs font-medium text-center text-white/90">
                    {format.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Wide Range of Interactive Formats
            </h2>
            <p className="text-xl text-white/90 mb-4">
              Airtory has over <span className="font-bold">400 ad formats</span> for advertisers to choose from.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Start building yours today!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-white/90 font-semibold px-8"
            >
              View Ad Experiences
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
