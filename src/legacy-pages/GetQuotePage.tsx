import { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Header } from '../components/Header';
import { PremiumFooter } from '../components/PremiumFooter';
import { SEO } from '../components/SEO';
import { submitNetlifyForm } from '../lib/netlifyForms';

const products = [
  { id: 'x1-pro', name: 'X1 Pro', category: 'Professional radio' },
  { id: 'x1-mini', name: 'X1 Mini', category: 'Body camera' },
  { id: 'x1-ultra', name: 'EVOX Ultra', category: 'Rugged radio' },
  { id: 'xc-19', name: 'XC-19', category: 'Security camera' },
  { id: 'ptt-mini', name: 'PTT Super Mini', category: 'Compact radio' },
  { id: 'x10', name: 'X10', category: 'Rugged PMR446 radio' },
];

export function GetQuotePage() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', company: '', city: '',
    selectedProducts: [] as string[], quantity: '', message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleProductToggle = (productId: string) => {
    setFormData(current => ({
      ...current,
      selectedProducts: current.selectedProducts.includes(productId)
        ? current.selectedProducts.filter(id => id !== productId)
        : [...current.selectedProducts, productId],
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(current => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.selectedProducts.length) {
      toast.error('Please select at least one product');
      return;
    }
    setIsSubmitting(true);

    try {
      const selectedProductNames = formData.selectedProducts
        .map(id => products.find(product => product.id === id)?.name)
        .filter(Boolean)
        .join(', ');
      await submitNetlifyForm('quote', {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        city: formData.city,
        products: selectedProductNames,
        quantity: formData.quantity,
        message: formData.message,
      });
      setIsSubmitted(true);
      toast.success('Quote request sent. We will contact you within 24 hours.');
      setFormData({ fullName: '', email: '', phone: '', company: '', city: '', selectedProducts: [], quantity: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Failed to send quote request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="premium-quote-page">
      <SEO
        title="Request a Product Quote | EVOX India"
        description="Request a tailored quote for EVOX professional radios, body cameras and communication equipment for your team or deployment."
        canonicalUrl="https://evoxindia.in/get-quote"
        structuredData={{
          '@type': 'ContactPage',
          '@id': 'https://evoxindia.in/get-quote#quote-page',
          name: 'Request an EVOX product quote',
          url: 'https://evoxindia.in/get-quote',
          mainEntity: { '@id': 'https://evoxindia.in/#organization' },
        }}
      />
      <Header />

      <section className="quote-hero">
        <div className="quote-hero-orbit" />
        <div className="premium-shell quote-hero-layout">
          <div>
            <p className="premium-kicker light">Built around your operation</p>
            <h1>A better fit.<br /><em>A precise quote.</em></h1>
          </div>
          <div className="quote-hero-aside">
            <p>Tell us about your team, environment and quantities. We’ll recommend the right equipment and prepare a tailored commercial proposal.</p>
            <div><strong>24h</strong><span>typical response time</span></div>
          </div>
        </div>
      </section>

      <section className="quote-main">
        <div className="premium-shell quote-main-grid">
          <aside className="quote-sidebar">
            <p className="premium-kicker">What happens next</p>
            <h2>Clear advice.<br />No guesswork.</h2>
            <ol>
              <li><span>01</span><p><strong>We review your brief</strong>Your needs are matched to the right product configuration.</p></li>
              <li><span>02</span><p><strong>We speak with you</strong>A specialist clarifies deployment, accessories and timelines.</p></li>
              <li><span>03</span><p><strong>You receive a proposal</strong>Transparent pricing and a solution shaped around your team.</p></li>
            </ol>
            <div className="quote-contact-card">
              <p>Prefer to speak directly?</p>
              <a href="tel:+919990696931"><Phone size={16} /> +91 99906 96931</a>
              <a href="mailto:evoxindia@gmail.com"><Mail size={16} /> evoxindia@gmail.com</a>
              <span><MapPin size={16} /> New Delhi · Mumbai</span>
            </div>
          </aside>

          <form name="quote" method="POST" data-netlify="true" className="premium-form quote-form" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="quote" />
            {isSubmitted && (
              <div className="premium-success"><CheckCircle2 size={21} /><span><strong>Request received.</strong> Our team will be in touch shortly.</span></div>
            )}

            <fieldset>
              <legend><span>01</span>Your details</legend>
              <div className="premium-field-grid">
                <label><span>Full name *</span><input name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Full name" /></label>
                <label><span>Work email *</span><input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="name@company.com" /></label>
                <label><span>Phone number *</span><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91" /></label>
                <label><span>Company</span><input name="company" value={formData.company} onChange={handleChange} placeholder="Company name" /></label>
              </div>
              <label><span>City / location *</span><input name="city" value={formData.city} onChange={handleChange} required placeholder="Where will the equipment be used?" /></label>
            </fieldset>

            <fieldset>
              <legend><span>02</span>Choose products</legend>
              <div className="quote-product-grid">
                {products.map(product => {
                  const selected = formData.selectedProducts.includes(product.id);
                  return (
                    <button className={selected ? 'is-selected' : ''} key={product.id} type="button" onClick={() => handleProductToggle(product.id)} aria-pressed={selected}>
                      <span>{product.category}</span><strong>{product.name}</strong><i>{selected && <Check size={15} />}</i>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend><span>03</span>Scale and requirements</legend>
              <label>
                <span>Approximate quantity *</span>
                <select name="quantity" value={formData.quantity} onChange={handleChange} required>
                  <option value="">Select a range</option>
                  <option value="1-10">1–10 units</option>
                  <option value="11-50">11–50 units</option>
                  <option value="51-100">51–100 units</option>
                  <option value="101-500">101–500 units</option>
                  <option value="500+">500+ units</option>
                </select>
              </label>
              <label>
                <span>Additional requirements</span>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Deployment environment, accessories, delivery timeline or anything else we should know." />
              </label>
            </fieldset>

            <button className="premium-button primary premium-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Preparing request…' : 'Request tailored quote'} <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}
