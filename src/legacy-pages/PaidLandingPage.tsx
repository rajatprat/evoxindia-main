import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BadgeCheck, CheckCircle2, MessageCircle, Phone, ShieldCheck, Zap } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { PremiumFooter } from '../components/PremiumFooter';
import { SEO } from '../components/SEO';
import { submitNetlifyForm } from '../lib/netlifyForms';
import evoxLogo from '../assets/evox-logo-transparent.png';
import heroProduct from '../assets/x10.png';
import makeInIndia from '../assets/make-in-india.png';
import isoCertificate from '../assets/iso-certificate.png';

const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'] as const;

type TrackingKey = typeof trackingKeys[number];

type LeadForm = {
  name: string;
  phone: string;
  city: string;
  productInterest: string;
  quantity: string;
  message: string;
};

export function PaidLandingPage() {
  const [formData, setFormData] = useState<LeadForm>({
    name: '',
    phone: '',
    city: '',
    productInterest: '',
    quantity: '',
    message: '',
  });
  const [tracking, setTracking] = useState<Record<TrackingKey, string>>({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    gclid: '',
    fbclid: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nextTracking = trackingKeys.reduce((acc, key) => {
      acc[key] = params.get(key) || '';
      return acc;
    }, {} as Record<TrackingKey, string>);
    setTracking(nextTracking);
  }, []);

  const leadSource = useMemo(() => {
    if (tracking.utm_source) return tracking.utm_source;
    if (tracking.gclid) return 'google';
    if (tracking.fbclid) return 'instagram';
    return 'direct-paid-landing';
  }, [tracking]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(current => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await submitNetlifyForm('paid_landing_lead', {
        ...formData,
        leadSource,
        landingPage: '/landing/evox',
        ...tracking,
      });
      setIsSubmitted(true);
      toast.success('Request received. EVOX will contact you shortly.');
      setFormData({ name: '', phone: '', city: '', productInterest: '', quantity: '', message: '' });
    } catch (error) {
      console.error('Paid landing form error:', error);
      toast.error('Could not send your request. Please call or WhatsApp us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="paid-landing-page">
      <SEO
        title="EVOX Professional Radios & Body Cameras | Quick Quote"
        description="Get a quick EVOX quote for professional radios, body cameras and team communication equipment across India."
        canonicalUrl="https://evoxindia.in/landing/evox"
        robots="noindex, follow"
      />

      <main>
        <section className="paid-hero">
          <div className="paid-hero-shell">
            <nav className="paid-topbar" aria-label="Landing page">
              <img src={evoxLogo} alt="EVOX" />
              <div>
                <a href="tel:+919990696931"><Phone size={16} /> Call</a>
                <a href="https://wa.me/919990696931" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
              </div>
            </nav>

            <div className="paid-hero-grid">
              <div className="paid-hero-copy">
                <p className="premium-kicker light">Professional communication equipment</p>
                <h1>Reliable radios and body cameras for active teams.</h1>
                <p>
                  Tell us your requirement and EVOX will recommend the right product mix for
                  security, hospitality, events, construction and industrial operations.
                </p>
                <div className="paid-hero-actions">
                  <a className="premium-button primary" href="#lead-form">Get quick quote <ArrowRight size={17} /></a>
                  <a className="premium-button white" href="tel:+919990696931"><Phone size={17} /> Talk to sales</a>
                </div>
                <div className="paid-proof-strip" aria-label="Highlights">
                  <span><ShieldCheck size={17} /> Built for field use</span>
                  <span><BadgeCheck size={17} /> India support</span>
                  <span><Zap size={17} /> Fast response</span>
                </div>
              </div>

              <div className="paid-product-stage" aria-label="EVOX product preview">
                <img src={heroProduct} alt="EVOX professional two-way radio" />
                <div>
                  <strong>Quick quotes</strong>
                  <span>For teams from 10 to 500+ units</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="paid-main">
          <div className="premium-shell paid-main-grid">
            <div className="paid-trust-panel">
              <p className="premium-kicker">Why teams enquire</p>
              <h2>Clear product guidance before you buy.</h2>
              <div className="paid-trust-list">
                <div><CheckCircle2 size={18} /><span>Professional radios, body cameras and accessories</span></div>
                <div><CheckCircle2 size={18} /><span>Deployment advice by use case and team size</span></div>
                <div><CheckCircle2 size={18} /><span>Direct support from New Delhi and Mumbai</span></div>
              </div>
              <div className="paid-badges">
                <img src={makeInIndia} alt="Make in India" />
                <img src={isoCertificate} alt="ISO certified" />
              </div>
            </div>

            <form id="lead-form" name="paid_landing_lead" method="POST" data-netlify="true" className="premium-form paid-lead-form" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="paid_landing_lead" />
              <input type="hidden" name="leadSource" value={leadSource} />
              <input type="hidden" name="landingPage" value="/landing/evox" />
              {trackingKeys.map(key => <input key={key} type="hidden" name={key} value={tracking[key]} />)}

              {isSubmitted && (
                <div className="premium-success"><CheckCircle2 size={21} /><span><strong>Lead received.</strong> We will contact you shortly.</span></div>
              )}

              <div className="paid-form-heading">
                <p className="premium-kicker">Quick enquiry</p>
                <h2>Get a callback</h2>
              </div>

              <label><span>Name *</span><input name="name" value={formData.name} onChange={handleChange} required placeholder="Full name" /></label>
              <label><span>Phone / WhatsApp *</span><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91" /></label>
              <label><span>City *</span><input name="city" value={formData.city} onChange={handleChange} required placeholder="Where are you located?" /></label>
              <div className="premium-field-grid">
                <label>
                  <span>Product interest *</span>
                  <select name="productInterest" value={formData.productInterest} onChange={handleChange} required>
                    <option value="">Select product</option>
                    <option value="Two-way radios">Two-way radios</option>
                    <option value="Body cameras">Body cameras</option>
                    <option value="Security cameras">Security cameras</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </label>
                <label>
                  <span>Quantity</span>
                  <select name="quantity" value={formData.quantity} onChange={handleChange}>
                    <option value="">Select range</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101-500">101-500</option>
                    <option value="500+">500+</option>
                  </select>
                </label>
              </div>
              <label><span>Requirement</span><textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Industry, use case or timeline." /></label>
              <button className="premium-button primary premium-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Request callback'} <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <PremiumFooter />
    </div>
  );
}
