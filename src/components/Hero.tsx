import { useEffect, useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => 
        (prev + 1) % siteConfig.hero.animatedTexts.length
      );
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={siteConfig.hero.videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Centered Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 text-center">
          <span className="block mb-2">PanMas</span>
          <div className="h-24 md:h-32 lg:h-40 flex items-center justify-center">
            {siteConfig.hero.animatedTexts.map((text, index) => (
              <span
                key={index}
                className={`absolute transition-opacity duration-1000 ${
                  index === currentTextIndex
                    ? 'opacity-100'
                    : 'opacity-0 pointer-events-none'
                }`}
                style={{
                  maxWidth: '90vw',
                  textAlign: 'center',
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </h1>
      </div>
    </section>
  );
}

