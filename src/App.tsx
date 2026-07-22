import { Toaster } from 'sonner@2.0.3';
import { DarkModeProvider } from './components/DarkModeContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { PremiumHome } from './components/PremiumHome';
import { AboutPage } from './legacy-pages/AboutPage';
import { TestimonialsPage } from './legacy-pages/TestimonialsPage';
import { ContactPage } from './legacy-pages/ContactPage';
import { ProductsPage } from './legacy-pages/ProductsPage';
import { ProductDetailPage } from './legacy-pages/ProductDetailPage';
import { ProductDetailPageXC19 } from './legacy-pages/ProductDetailPageXC19';
import { ProductDetailPageX1Ultra } from './legacy-pages/ProductDetailPageX1Ultra';
import { ProductDetailPageX1Mini } from './legacy-pages/ProductDetailPageX1Mini';
import { ProductDetailPagePTTMini } from './legacy-pages/ProductDetailPagePTTMini';
import { ProductDetailPageX10 } from './legacy-pages/ProductDetailPageX10';
import { GetQuotePage } from './legacy-pages/GetQuotePage';
import { PaidLandingPage } from './legacy-pages/PaidLandingPage';
import { IndustriesPage } from './legacy-pages/IndustriesPage';
import { FAQPage } from './legacy-pages/FAQPage';
import { PrivacyPolicyPage } from './legacy-pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './legacy-pages/TermsOfServicePage';
import { CookiePolicyPage } from './legacy-pages/CookiePolicyPage';
import { SitemapPage } from './legacy-pages/SitemapPage';
import { BlogPage } from './legacy-pages/BlogPage';
import { BlogPostPage } from './legacy-pages/BlogPostPage';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { SEO } from './components/SEO';

// Home page component
function HomePage() {
  return (
    <>
      <SEO
        title="Professional Radios & Body Cameras | EVOX India"
        description="Explore EVOX professional radios, body cameras and security equipment for dependable communication and documentation across demanding operations."
        canonicalUrl="https://evoxindia.in/"
      />
      <Header />
      <main>
        <PremiumHome />
      </main>
    </>
  );
}

// Navigation helper component
function NavigationHelper() {
  const navigate = useNavigate();

  useEffect(() => {
    // Add global navigation handlers
    if (typeof window !== 'undefined') {
      (window as any).navigateToHome = () => navigate('/');
      (window as any).navigateToAbout = () => navigate('/about');
      (window as any).navigateToTestimonials = () => navigate('/testimonials');
      (window as any).navigateToContact = () => navigate('/contact');
      (window as any).navigateToProducts = () => navigate('/products');
      (window as any).navigateToProductX1Pro = () => navigate('/products/x1-pro');
      (window as any).navigateToProductXC19 = () => navigate('/products/xc-19');
      (window as any).navigateToProductX1Ultra = () => navigate('/products/x1-ultra');
      (window as any).navigateToProductX1Mini = () => navigate('/products/x1-mini');
      (window as any).navigateToProductPTTMini = () => navigate('/products/ptt-super-mini');
      (window as any).navigateToProductX10 = () => navigate('/products/x10');
      (window as any).navigateToGetQuote = () => navigate('/get-quote');
      (window as any).navigateToIndustries = () => navigate('/industries');
      (window as any).navigateToFAQ = () => navigate('/faq');
      (window as any).navigateToBlog = () => navigate('/blog');
      (window as any).navigateToBlogPost = (slug: string) => navigate(`/blog/${slug}`);
      (window as any).navigateToPrivacyPolicy = () => navigate('/privacy-policy');
      (window as any).navigateToTermsOfService = () => navigate('/terms-of-service');
      (window as any).navigateToCookiePolicy = () => navigate('/cookie-policy');
      (window as any).navigateToSitemap = () => navigate('/sitemap');
    }
  }, [navigate]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <NavigationHelper />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Toaster 
            position="top-right" 
            richColors 
            closeButton
            toastOptions={{
              style: {
                background: 'white',
                color: '#1f2937',
                border: '1px solid #e5e7eb',
              },
              className: 'dark:bg-gray-800 dark:text-white dark:border-gray-700',
            }}
          />
          
          <Routes>
            <Route path="/" element={<><ScrollToTop /><HomePage /></>} />
            <Route path="/about" element={<><ScrollToTop /><AboutPage /></>} />
            <Route path="/testimonials" element={<><ScrollToTop /><TestimonialsPage /></>} />
            <Route path="/contact" element={<><ScrollToTop /><ContactPage /></>} />
            <Route path="/products" element={<><ScrollToTop /><ProductsPage /></>} />
            <Route path="/products/x1-pro" element={<><ScrollToTop /><ProductDetailPage /></>} />
            <Route path="/products/xc-19" element={<><ScrollToTop /><ProductDetailPageXC19 /></>} />
            <Route path="/products/x1-ultra" element={<><ScrollToTop /><ProductDetailPageX1Ultra /></>} />
            <Route path="/products/x1-mini" element={<><ScrollToTop /><ProductDetailPageX1Mini /></>} />
            <Route path="/products/ptt-super-mini" element={<><ScrollToTop /><ProductDetailPagePTTMini /></>} />
            <Route path="/products/x10" element={<><ScrollToTop /><ProductDetailPageX10 /></>} />
            <Route path="/get-quote" element={<><ScrollToTop /><GetQuotePage /></>} />
            <Route path="/landing/evox" element={<><ScrollToTop /><PaidLandingPage /></>} />
            <Route path="/industries" element={<><ScrollToTop /><IndustriesPage /></>} />
            <Route path="/faq" element={<><ScrollToTop /><FAQPage /></>} />
            <Route path="/blog" element={<><ScrollToTop /><BlogPage /></>} />
            <Route path="/blog/:slug" element={<><ScrollToTop /><BlogPostPage /></>} />
            <Route path="/privacy-policy" element={<><ScrollToTop /><PrivacyPolicyPage /></>} />
            <Route path="/terms-of-service" element={<><ScrollToTop /><TermsOfServicePage /></>} />
            <Route path="/cookie-policy" element={<><ScrollToTop /><CookiePolicyPage /></>} />
            <Route path="/sitemap" element={<><ScrollToTop /><SitemapPage /></>} />
          </Routes>
        </div>
      </DarkModeProvider>
    </BrowserRouter>
  );
}
