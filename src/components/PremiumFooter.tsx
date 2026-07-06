'use client';

import evoxLogo from '../assets/evox-logo-transparent.png';
import makeInIndia from '../assets/make-in-india.png';

const routeFallbacks: Record<string, string> = {
  navigateToProducts: '/products',
  navigateToIndustries: '/industries',
  navigateToBlog: '/blog',
  navigateToAbout: '/about',
  navigateToFAQ: '/faq',
  navigateToContact: '/contact',
  navigateToGetQuote: '/get-quote',
  navigateToPrivacyPolicy: '/privacy-policy',
  navigateToTermsOfService: '/terms-of-service',
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

export function PremiumFooter() {
  return (
    <footer className="premium-footer">
      <div className="premium-shell">
        <div className="premium-footer-top">
          <div className="premium-footer-identity">
            <div className="premium-footer-brand">
              <img src={evoxLogo} alt="EVOX" />
            </div>
            <p>Professional communication technology,<br />designed in India for the world.</p>
          </div>
          <div className="premium-origin">
            <span>Proudly built in India</span>
            <img src={makeInIndia} alt="Make in India" />
          </div>
        </div>
        <div className="premium-footer-links">
          <div>
            <span>Explore</span>
            <button onClick={() => go('navigateToProducts')}>Products</button>
            <button onClick={() => go('navigateToIndustries')}>Industries</button>
            <button onClick={() => go('navigateToBlog')}>Blog</button>
            <button onClick={() => go('navigateToAbout')}>Our story</button>
          </div>
          <div>
            <span>Support</span>
            <button onClick={() => go('navigateToFAQ')}>FAQ</button>
            <button onClick={() => go('navigateToContact')}>Contact</button>
            <button onClick={() => go('navigateToGetQuote')}>Get a quote</button>
          </div>
          <div>
            <span>Connect</span>
            <a href="tel:+919990696931">+91 99906 96931</a>
            <a href="mailto:evoxindia@gmail.com">evoxindia@gmail.com</a>
            <p>New Delhi · Mumbai</p>
          </div>
        </div>
        <div className="premium-footer-bottom">
          <span>© {new Date().getFullYear()} EVOX Corporation</span>
          <div>
            <button onClick={() => go('navigateToPrivacyPolicy')}>Privacy</button>
            <button onClick={() => go('navigateToTermsOfService')}>Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
