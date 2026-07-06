import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Zap, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import x1ProImage from '../assets/x1-pro.png';
import x1MiniImage from '../assets/x1-mini.png';
import evoxUltraImage from '../assets/evox-ultra.png';

const slides = [
  {
    id: 1,
    title: 'EVOX X1 PRO',
    subtitle: 'Next-Gen Communication',
    tagline: 'Premium Professional Radio',
    description: 'License-Free PMR 446 • 4800mAh Battery • Advanced Noise Cancellation • 200 Channels',
    image: x1ProImage,
    features: ['4800mAh Battery', 'Noise Cancellation', '200 Channels'],
    icon: Zap,
    gradient: 'from-red-600 to-orange-500',
    bgGradient: 'from-red-50 to-orange-50',
    darkBgGradient: 'from-red-950/20 to-orange-950/20',
    link: 'product-x1-pro',
  },
  {
    id: 2,
    title: 'EVOX X1 MINI',
    subtitle: 'Compact Security Solution',
    tagline: 'Body Camera Excellence',
    description: 'HD Quality Recording • Motion Detection • Infrared Night Vision • 16 Hours Battery Backup',
    image: x1MiniImage,
    features: ['HD Recording', 'Motion Detection', '16Hr Battery'],
    icon: Shield,
    gradient: 'from-orange-600 to-red-600',
    bgGradient: 'from-orange-50 to-red-50',
    darkBgGradient: 'from-orange-950/20 to-red-950/20',
    link: 'product-x1-mini',
  },
  {
    id: 3,
    title: 'EVOX ULTRA',
    subtitle: 'Built for Extreme Conditions',
    tagline: 'Rugged Professional Radio',
    description: 'Military-Grade Design • 4500mAh Battery • Wide/Narrow Band • VOX Activation',
    image: evoxUltraImage,
    features: ['Rugged Design', 'Wide/Narrow', 'VOX Ready'],
    icon: Sparkles,
    gradient: 'from-red-700 to-orange-600',
    bgGradient: 'from-red-50 to-orange-50',
    darkBgGradient: 'from-red-950/20 to-orange-950/20',
    link: 'product-x1-ultra',
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-20 w-96 h-96 bg-gradient-to-br ${slide.gradient} opacity-20 dark:opacity-10 rounded-full blur-3xl animate-float`}></div>
        <div className={`absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr ${slide.gradient} opacity-20 dark:opacity-10 rounded-full blur-3xl animate-float`} style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slideInLeft">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg">
              <span className={`p-2 rounded-full bg-gradient-to-r ${slide.gradient}`}>
                <Icon className="w-4 h-4 text-white" />
              </span>
              <span className="font-semibold bg-gradient-to-r bg-clip-text text-transparent from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                {slide.subtitle}
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className={`bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                {slide.title}
              </h1>
              <p className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                {slide.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {slide.description}
            </p>

            {/* Features Pills */}
            <div className="flex flex-wrap gap-3">
              {slide.features.map((feature, index) => (
                <div 
                  key={index}
                  className="px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all hover:scale-105"
                >
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => {
                  if (slide.link === 'product-x1-pro') {
                    (window as any).navigateToProductX1Pro?.();
                  } else if (slide.link === 'product-x1-mini') {
                    (window as any).navigateToProductX1Mini?.();
                  } else if (slide.link === 'product-x1-ultra') {
                    (window as any).navigateToProductX1Ultra?.();
                  }
                }}
                className={`group px-8 py-4 bg-gradient-to-r ${slide.gradient} text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                <span className="flex items-center gap-2">
                  Explore Product
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => (window as any).navigateToProducts?.()}
                className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-all hover:scale-105 shadow-lg"
              >
                View All Products
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative animate-slideInRight">
            {/* Gradient Glow Effects */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-30 dark:opacity-20 blur-[100px] scale-150`}></div>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-br ${slide.gradient} opacity-20 dark:opacity-10 blur-[80px] rounded-full`}></div>
            
            {/* Product Image - No background card */}
            <div className="relative h-[400px] lg:h-[550px] flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 bottom-12 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Dots Indicator */}
          <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl px-6 py-4 rounded-full shadow-xl border border-gray-200 dark:border-gray-700">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? `w-12 h-3 bg-gradient-to-r ${slide.gradient}`
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl hover:bg-white dark:hover:bg-gray-900 rounded-full shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl hover:bg-white dark:hover:bg-gray-900 rounded-full shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}