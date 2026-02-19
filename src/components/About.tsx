import { useEffect, useState } from 'react';
import { Wheat, Clock, ChefHat } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const icons = [Wheat, Clock, ChefHat];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % siteConfig.about.slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Nuestra Historia
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            {siteConfig.about.slides.map((slide, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide
                      ? 'opacity-100'
                      : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.text}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Icon className="w-12 h-12 text-accent mb-2" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Text Side */}
          <div className="relative h-96 md:h-[500px] flex items-center">
            {siteConfig.about.slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute transition-opacity duration-1000 ${
                  index === currentSlide
                    ? 'opacity-100'
                    : 'opacity-0 pointer-events-none'
                }`}
              >
                <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
                  {slide.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {siteConfig.about.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-accent'
                  : 'w-2 bg-primary/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

