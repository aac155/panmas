import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        (prev + 1) % siteConfig.hero.images.length
      );
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  // Change text every 4 seconds (independent from images)
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => 
        (prev + 1) % siteConfig.hero.animatedTexts.length
      );
    }, 4000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Carousel Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={siteConfig.hero.images[currentImageIndex]}
            alt={`Panadería artesanal ${currentImageIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Centered Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 text-center">
          <span className="block mb-2">PanMas</span>
          <div className="h-24 md:h-32 lg:h-40 flex items-center justify-center">
            {siteConfig.hero.animatedTexts.map((text, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentTextIndex ? 1 : 0,
                }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className={`absolute ${
                  index === currentTextIndex
                    ? 'pointer-events-auto'
                    : 'pointer-events-none'
                }`}
                style={{
                  maxWidth: '90vw',
                  textAlign: 'center',
                }}
              >
                {text}
              </motion.span>
            ))}
          </div>
        </h1>
      </div>
    </section>
  );
}
