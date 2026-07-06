import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import evoxLogo from '../assets/logo.png';
import makeInIndiaLogo from '../assets/make-in-india.png';
import { useState } from 'react';
import { toast } from 'sonner';
import { submitNetlifyForm } from '../lib/netlifyForms';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitNetlifyForm('newsletter', { email });
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white mb-3">Stay Updated</h3>
              <p className="text-gray-400 text-lg">
                Subscribe to our newsletter for the latest products and offers
              </p>
            </div>
            <form name="newsletter" method="POST" data-netlify="true" onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input type="hidden" name="form-name" value="newsletter" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl font-semibold hover:from-red-700 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src={evoxLogo} 
                alt="EVOX India Logo" 
                className="h-12 w-auto mb-4 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => (window as any).navigateToHome?.()}
              />
              <p className="text-gray-400 leading-relaxed">
                Leading provider of innovative communication solutions with commitment to excellence and reliability.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-white/10 backdrop-blur-xl hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 rounded-xl transition-all hover:scale-110 group"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            {/* Make in India Badge */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-gray-400 text-xs mb-3 font-semibold tracking-wider uppercase">
                Proudly Manufacturing in India
              </div>
              <img 
                src={makeInIndiaLogo} 
                alt="Make in India" 
                className="footer-make-in-india opacity-90 hover:opacity-100 transition-opacity"
                title="Make in India - Supporting Local Manufacturing"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', action: () => (window as any).navigateToHome?.() },
                { name: 'About Us', action: () => (window as any).navigateToAbout?.() },
                { name: 'Products', action: () => (window as any).navigateToProducts?.() },
                { name: 'Industries', action: () => (window as any).navigateToIndustries?.() },
                { name: 'Testimonials', action: () => (window as any).navigateToTestimonials?.() },
                { name: 'FAQ', action: () => (window as any).navigateToFAQ?.() },
                { name: 'Contact', action: () => (window as any).navigateToContact?.() },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-flex items-center gap-2 transition-all group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 transition-all"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white mb-6">Our Products</h4>
            <ul className="space-y-3">
              {[
                { name: 'X1 mini', link: 'product-x1-mini' },
                { name: 'Evox X1 Pro', link: 'product-x1-pro' },
                { name: 'XC-19 Camera', link: 'product-xc19' },
                { name: 'Evox Ultra', link: 'product-x1-ultra' },
                { name: 'PTT Super Mini', link: 'product-ptt-mini' },
              ].map((product) => (
                <li key={product.name}>
                  <button
                    onClick={() => {
                      if (product.link === 'product-x1-mini') {
                        (window as any).navigateToProductX1Mini?.();
                      } else if (product.link === 'product-x1-pro') {
                        (window as any).navigateToProductX1Pro?.();
                      } else if (product.link === 'product-xc19') {
                        (window as any).navigateToProductXC19?.();
                      } else if (product.link === 'product-x1-ultra') {
                        (window as any).navigateToProductX1Ultra?.();
                      } else if (product.link === 'product-ptt-mini') {
                        (window as any).navigateToProductPTTMini?.();
                      }
                    }}
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-flex items-center gap-2 transition-all group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 transition-all"></span>
                    {product.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-6">Contact Info</h4>
            <div className="space-y-6">
              {/* Delhi Office */}
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Delhi Office</div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    10th Floor, Flat No. 1011,<br />
                    Devika Tower, B-6, Nehru Place<br />
                    New Delhi - 110019, India
                  </p>
                </div>
              </div>

              {/* Mumbai Office */}
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Mumbai Office</div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    First Floor, Ashoka Super Market,<br />
                    B-122, Swami Vivekananda Rd,<br />
                    Piramal Nagar, Goregaon,<br />
                    Mumbai, Maharashtra 400104
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919990696931" className="text-gray-400 hover:text-white transition-colors">
                  +91-9990696931
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:sales@evoxindia.in" className="text-gray-400 hover:text-white transition-colors">
                  sales@evoxindia.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} EVOX India. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button 
                onClick={() => (window as any).navigateToPrivacyPolicy?.()}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => (window as any).navigateToTermsOfService?.()}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => (window as any).navigateToCookiePolicy?.()}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
              <button 
                onClick={() => (window as any).navigateToSitemap?.()}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
