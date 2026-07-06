import { Header } from '../components/Header';
import { PremiumFooter } from '../components/PremiumFooter';
import { SEO } from '../components/SEO';
import { Home, Info, Package, Building2, MessageCircle, Star, HelpCircle, FileText, Phone, ShoppingCart, Shield } from 'lucide-react';

const sitemapSections = [
  {
    title: 'Main Pages',
    icon: Home,
    links: [
      { name: 'Home', action: () => (window as any).navigateToHome?.(), description: 'Homepage with products and services' },
      { name: 'About Us', action: () => (window as any).navigateToAbout?.(), description: 'Learn about EVOX India' },
      { name: 'Contact', action: () => (window as any).navigateToContact?.(), description: 'Get in touch with our team' },
      { name: 'Industries', action: () => (window as any).navigateToIndustries?.(), description: 'Industries we serve' },
    ],
  },
  {
    title: 'Products',
    icon: Package,
    links: [
      { name: 'All Products', action: () => (window as any).navigateToProducts?.(), description: 'Browse our complete product catalog' },
      { name: 'X1 mini Body Camera', action: () => (window as any).navigateToProductX1Mini?.(), description: 'Compact security body camera' },
      { name: 'X1 Pro Walkie Talkie', action: () => (window as any).navigateToProductX1Pro?.(), description: 'Professional communication radio' },
      { name: 'XC-19 Camera', action: () => (window as any).navigateToProductXC19?.(), description: 'Advanced surveillance camera' },
      { name: 'X-1 Ultra Device', action: () => (window as any).navigateToProductX1Ultra?.(), description: 'Rugged professional radio' },
      { name: 'PTT Super Mini Radio', action: () => (window as any).navigateToProductPTTMini?.(), description: 'Ultra-compact FM transceiver' },
      { name: 'X10 Rugged Radio', action: () => (window as any).navigateToProductX10?.(), description: 'License-free PMR446 radio with AI noise reduction' },
    ],
  },
  {
    title: 'Resources',
    icon: FileText,
    links: [
      { name: 'Testimonials', action: () => (window as any).navigateToTestimonials?.(), description: 'Customer reviews and feedback' },
      { name: 'Blog', action: () => (window as any).navigateToBlog?.(), description: 'Articles and buying guides from EVOX India' },
      { name: 'FAQ', action: () => (window as any).navigateToFAQ?.(), description: 'Frequently asked questions' },
      { name: 'Get Quote', action: () => (window as any).navigateToGetQuote?.(), description: 'Request a product quote' },
    ],
  },
  {
    title: 'Legal & Policies',
    icon: Shield,
    links: [
      { name: 'Privacy Policy', action: () => (window as any).navigateToPrivacyPolicy?.(), description: 'How we handle your data' },
      { name: 'Terms of Service', action: () => (window as any).navigateToTermsOfService?.(), description: 'Terms and conditions' },
      { name: 'Cookie Policy', action: () => (window as any).navigateToCookiePolicy?.(), description: 'Our cookie usage policy' },
    ],
  },
];

export function SitemapPage() {
  return (
    <div className="premium-legacy-page">
      <SEO
        title="Sitemap | EVOX India"
        description="Browse all EVOX India pages, including products, industries, support resources, contact information and legal policies."
        canonicalUrl="https://evoxindia.in/sitemap"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/50 dark:to-orange-950/50 border border-red-100 dark:border-red-900 rounded-full mb-8">
            <Home className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-red-600 dark:text-red-400 font-semibold">
              Site Navigation
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="text-transparent bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-clip-text">
              Sitemap
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Complete navigation guide to all pages and sections of EVOX India website
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 px-6 lg:px-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {sitemapSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <button
                        key={linkIndex}
                        onClick={link.action}
                        className="w-full text-left group p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                              {link.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {link.description}
                            </p>
                          </div>
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 group-hover:scale-150 transition-transform"></div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-12 lg:p-16 shadow-2xl">
            <Phone className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is here to help you find the perfect communication solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window as any).navigateToContact?.()}
                className="px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact Us
              </button>
              <a
                href="tel:+919990696931"
                className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Call: +91-9990696931
              </a>
            </div>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}
