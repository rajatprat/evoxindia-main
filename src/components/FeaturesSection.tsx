import { Shield, Zap, Headphones, Lock, Clock, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Military-Grade Durability',
    description: 'Built to withstand extreme conditions with IP67 water resistance and shock-proof design.',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Long Battery Life',
    description: 'Extended battery capacity ensuring uninterrupted communication for up to 16+ hours.',
    gradient: 'from-yellow-600 to-orange-600',
  },
  {
    icon: Headphones,
    title: 'Crystal Clear Audio',
    description: 'Advanced noise cancellation technology for clear communication in any environment.',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: Lock,
    title: 'Secure Encryption',
    description: 'End-to-end encrypted communication ensuring your conversations remain private.',
    gradient: 'from-red-600 to-rose-600',
  },
  {
    icon: Clock,
    title: 'Instant Connection',
    description: 'Quick pairing and instant push-to-talk functionality for seamless operation.',
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    icon: Globe,
    title: 'Global Compatibility',
    description: 'License-free PMR 446 frequencies compatible with international standards.',
    gradient: 'from-indigo-600 to-violet-600',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.1),transparent_50%)] dark:opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-100 dark:border-blue-900 rounded-full mb-6">
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose EVOX
            </span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-6">
            Engineered for Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Every product is designed with cutting-edge technology and rigorous quality standards to deliver unmatched performance
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-gray-500/10 hover:scale-105"
              >
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[1px]`}>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 h-full w-full rounded-3xl"></div>
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Floating Orb */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-full`}></div>

                  {/* Title */}
                  <h3 className="text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
