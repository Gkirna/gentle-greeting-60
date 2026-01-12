import { Quote } from 'lucide-react';
import testimonialImg1 from '@/assets/testimonial-1.jpg';
import testimonialImg2 from '@/assets/testimonial-2.png';

const testimonials = [
  {
    name: 'Daniel Meehan',
    role: 'Founder & CEO',
    company: 'PadSquad',
    quote: "Working with Airtory's team to integrate their platform into our proprietary creative production technology stack is driving timelines that are 30-40% faster than they were previously. Speed is everything, and now we can not only deliver completed creative faster, but we're also able to increase our decisioning speed to drive superior results for our clients.",
    image: testimonialImg1,
  },
  {
    name: 'Mohitosh Negandhi',
    role: 'Director - Programmatic and Innovative Format',
    company: '',
    quote: "Airtory is a great solution for our Rich Media advertising requirements. It is an ad delivery platform that we can recommend whole-heartedly. We have partnered with them to create innovative and truly 'out of the box' work and campaigns that needed an engaging and interactive creative solution for their media plan. Right from building creative ad content to testing for its effectiveness and publishing it on multiple channels, it is all so quick. The platform also provides the functionality of detailed metrics to monitor the performance of the ad unit and the ability to optimize them on the go. Airtory's product is excellent, but personally for me, Airtory's biggest USP is their support and its team of amazing professionals who are always ready to help and go that extra mile to ensure that we always find a solution to any situation that may arise. Kudos to the team and product.",
    image: testimonialImg2,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Testimonials
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg p-8 lg:p-10 border border-border hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-6" />

              {/* Quote Text */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm lg:text-base">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
