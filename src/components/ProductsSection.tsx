import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Battery, Radio, Camera, Shield } from 'lucide-react';
import x1ProImage from '../assets/x1-pro.png';
import x1MiniImage from '../assets/x1-mini.png';
import xc19Image from '../assets/xc19.png';
import evoxUltraImage from '../assets/evox-ultra.png';
import pttMiniImage from '../assets/ptt-super-mini.png';

const products = [
  {
    id: 1,
    name: 'X1 mini',
    category: 'Body Camera',
    description: 'HD Quality, Motion Detection, Infrared Video, 16 Hours Battery Backup.',
    image: x1MiniImage,
    icon: Camera,
    gradient: 'from-red-600 to-orange-500',
    features: ['HD Recording', 'Motion Detect', '16Hr Battery'],
    link: 'product-x1-mini',
  },
  {
    id: 2,
    name: 'Evox X1 Pro',
    category: 'Professional Radio',
    description: 'License-Free PMR 446, 4800mAh Battery, Noise Cancellation, 200 Channels.',
    image: x1ProImage,
    icon: Radio,
    gradient: 'from-orange-600 to-red-600',
    features: ['200 Channels', 'Noise Cancel', '4800mAh'],
    link: 'product-x1-pro',
  },
  {
    id: 3,
    name: 'XC-19 Camera',
    category: 'Security Camera',
    description: 'Compact and reliable communication device.',
    image: xc19Image,
    icon: Shield,
    gradient: 'from-red-700 to-orange-600',
    features: ['Compact', 'Reliable', 'Durable'],
    link: 'product-xc19',
  },
  {
    id: 4,
    name: 'Evox Ultra',
    category: 'Rugged Radio',
    description: 'Rugged Design, 4500mAh Battery, Wide/Narrow Selectable, VOX.',
    image: evoxUltraImage,
    icon: Battery,
    gradient: 'from-red-600 to-orange-500',
    features: ['Rugged', 'VOX Ready', '4500mAh'],
    link: 'product-x1-ultra',
  },
  {
    id: 5,
    name: 'PTT Super Mini',
    category: 'FM Transceiver',
    description: 'PMR 446 MHz, 20 Channels, 0.5W Output Power, Ultra-Compact Design.',
    image: pttMiniImage,
    icon: Radio,
    gradient: 'from-orange-600 to-red-600',
    features: ['20 Channels', 'PMR 446', 'Ultra-Compact'],
    link: 'product-ptt-mini',
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/50 dark:to-orange-950/50 border border-red-100 dark:border-red-900/50 rounded-full mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-full animate-pulse"></span>
            <span className="text-red-600 dark:text-red-400 font-semibold text-sm">Our Products</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Premium Communication Devices
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Engineered for professionals who demand the highest standards of reliability, performance, and innovation
          </p>
        </div>

        {/* Products Grid - 2 Column Layout for Better Spacing */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 mb-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div 
                key={product.id} 
                className="group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 hover:shadow-2xl h-full flex flex-col">
                  {/* Product Image Area */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-12 lg:p-16 flex items-center justify-center overflow-hidden">
                    {/* Gradient Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Floating Background Orb */}
                    <div className={`absolute w-48 h-48 bg-gradient-to-br ${product.gradient} opacity-20 blur-3xl group-hover:scale-125 transition-transform duration-700 rounded-full`}></div>
                    
                    {/* Product Image */}
                    <div className="relative h-72 lg:h-80 w-full flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105 drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-8 lg:p-10 flex-1 flex flex-col">
                    {/* Icon & Category */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${product.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-all">
                      {product.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {product.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Learn More Button */}
                    <button 
                      onClick={() => {
                        if (product.link === 'product-x1-pro') {
                          (window as any).navigateToProductX1Pro?.();
                        } else if (product.link === 'product-xc19') {
                          (window as any).navigateToProductXC19?.();
                        } else if (product.link === 'product-x1-ultra') {
                          (window as any).navigateToProductX1Ultra?.();
                        } else if (product.link === 'product-x1-mini') {
                          (window as any).navigateToProductX1Mini?.();
                        } else if (product.link === 'product-ptt-mini') {
                          (window as any).navigateToProductPTTMini?.();
                        } else {
                          (window as any).navigateToProducts?.();
                        }
                      }}
                      className={`group/button inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all hover:scale-105`}
                    >
                      <span>{product.link ? 'Learn More' : 'View All Products'}</span>
                      <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fadeInUp">
          <button 
            onClick={() => (window as any).navigateToProducts?.()}
            className="group px-12 py-5 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:shadow-red-500/30 inline-flex items-center gap-3 hover:scale-105"
          >
            View All Products
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}