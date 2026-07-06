'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, Phone, X } from 'lucide-react';
import evoxLogo from '../assets/evox-logo-transparent.png';

const productLinks = [
  ['X1 Pro', 'Professional radio', 'navigateToProductX1Pro'],
  ['X1 Mini', 'Body camera', 'navigateToProductX1Mini'],
  ['EVOX Ultra', 'Rugged radio', 'navigateToProductX1Ultra'],
  ['XC-19', 'Security camera', 'navigateToProductXC19'],
  ['PTT Super Mini', 'Compact radio', 'navigateToProductPTTMini'],
  ['X10', 'Rugged PMR446 radio', 'navigateToProductX10'],
];

const routeFallbacks: Record<string, string> = {
  navigateToHome: '/',
  navigateToAbout: '/about',
  navigateToTestimonials: '/testimonials',
  navigateToContact: '/contact',
  navigateToProducts: '/products',
  navigateToProductX1Pro: '/products/x1-pro',
  navigateToProductXC19: '/products/xc-19',
  navigateToProductX1Ultra: '/products/x1-ultra',
  navigateToProductX1Mini: '/products/x1-mini',
  navigateToProductPTTMini: '/products/ptt-super-mini',
  navigateToProductX10: '/products/x10',
  navigateToGetQuote: '/get-quote',
  navigateToIndustries: '/industries',
  navigateToFAQ: '/faq',
  navigateToBlog: '/blog',
  navigateToPrivacyPolicy: '/privacy-policy',
  navigateToTermsOfService: '/terms-of-service',
  navigateToCookiePolicy: '/cookie-policy',
  navigateToSitemap: '/sitemap',
};

const go = (name: string) => {
  const handler = (window as any)[name];
  if (typeof handler === 'function') {
    handler();
    return;
  }
  const fallback = routeFallbacks[name];
  if (fallback) window.location.href = fallback;
};

export function Header({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (name: string) => {
    go(name);
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className={`premium-header ${theme === 'light' ? 'on-light' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="premium-nav">
        <button className="premium-wordmark" onClick={() => navigate('navigateToHome')} aria-label="EVOX home">
          <img src={evoxLogo} alt="EVOX" />
        </button>

        <nav className="premium-desktop-nav" aria-label="Primary navigation">
          <button onClick={() => navigate('navigateToAbout')}>Our story</button>
          <div
            className="premium-nav-products"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button onClick={() => navigate('navigateToProducts')}>
              Products <ChevronDown size={14} />
            </button>
            <div className={`premium-mega-menu ${productsOpen ? 'is-open' : ''}`}>
              <div>
                <p>Product family</p>
                {productLinks.map(([name, type, action]) => (
                  <button key={name} onClick={() => navigate(action)}>
                    <strong>{name}</strong>
                    <span>{type}</span>
                  </button>
                ))}
              </div>
              <button className="premium-mega-all" onClick={() => navigate('navigateToProducts')}>
                <div className="premium-mega-count">06</div>
                <span>Explore the complete lineup</span>
                <strong>All products <ArrowRight size={16} /></strong>
              </button>
            </div>
          </div>
          <button onClick={() => navigate('navigateToIndustries')}>Industries</button>
          <button onClick={() => navigate('navigateToBlog')}>Blog</button>
          <button onClick={() => navigate('navigateToContact')}>Support</button>
        </nav>

        <div className="premium-nav-actions">
          <a href="tel:+919990696931" aria-label="Call EVOX"><Phone size={16} /></a>
          <button className="premium-nav-cta" onClick={() => navigate('navigateToGetQuote')}>Get a quote</button>
          <button
            className="premium-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`premium-mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <button onClick={() => navigate('navigateToAbout')}>Our story</button>
        <button onClick={() => navigate('navigateToProducts')}>Products</button>
        <button onClick={() => navigate('navigateToIndustries')}>Industries</button>
        <button onClick={() => navigate('navigateToBlog')}>Blog</button>
        <button onClick={() => navigate('navigateToContact')}>Support</button>
        <button onClick={() => navigate('navigateToGetQuote')}>Get a quote <span>→</span></button>
      </div>
    </header>
  );
}
