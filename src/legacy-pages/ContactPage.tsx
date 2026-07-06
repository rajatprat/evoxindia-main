import { useState } from 'react';
import { ArrowRight, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Header } from '../components/Header';
import { PremiumFooter } from '../components/PremiumFooter';
import { SEO } from '../components/SEO';
import { submitNetlifyForm } from '../lib/netlifyForms';

const offices = [
  {
    city: 'New Delhi',
    label: 'Head office',
    address: '10th Floor, Flat No. 1011, Devika Tower, B-6, Nehru Place, New Delhi 110019',
    phone: '+91 99906 96931',
    phoneHref: 'tel:+919990696931',
    map: 'https://www.google.com/maps/search/?api=1&query=Devika+Tower+Nehru+Place+New+Delhi',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7471283213913!2d77.24777387549773!3d28.5473194757113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cfc16fffff%3A0x321cd31521cc055a!2sELECTROSONIC%20TECHNOLOGIES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1737721622324!5m2!1sen!2sin',
  },
  {
    city: 'Mumbai',
    label: 'West region',
    address: 'First Floor, Ashoka Super Market, B-122, S.V. Road, Piramal Nagar, Goregaon, Mumbai 400104',
    phone: '+91 90828 96765',
    phoneHref: 'tel:+919082896765',
    map: 'https://www.google.com/maps/search/?api=1&query=Ashoka+Super+Market+Goregaon+Mumbai',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.655743774865!2d72.84332247481682!3d19.16654074912475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7228cd365d5%3A0xfb511bd38a82c3e!2sElectrosonic%20Technologies%20Pvt%20Limited!5e0!3m2!1sen!2sin!4v1737722023139!5m2!1sen!2sin',
  },
];

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitNetlifyForm('contact', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(current => ({ ...current, [e.target.name]: e.target.value }));
  };

  return (
    <div className="premium-contact-page">
      <SEO
        title="Contact EVOX India | New Delhi & Mumbai"
        description="Contact EVOX India for product guidance, quotes and support for professional radios, body cameras and communication equipment."
        canonicalUrl="https://evoxindia.in/contact"
        structuredData={{
          '@type': 'ContactPage',
          '@id': 'https://evoxindia.in/contact#contact-page',
          name: 'Contact EVOX India',
          url: 'https://evoxindia.in/contact',
          mainEntity: { '@id': 'https://evoxindia.in/#organization' },
        }}
      />
      <Header />

      <section className="contact-hero">
        <div className="contact-hero-orbit" />
        <div className="premium-shell contact-hero-layout">
          <div>
            <p className="premium-kicker light">Direct access. Real support.</p>
            <h1>Let’s start a<br /><em>conversation.</em></h1>
          </div>
          <div className="contact-hero-aside">
            <p>
              Product guidance, deployment planning or after-sales support—our team is
              ready to help you move forward with confidence.
            </p>
            <div className="contact-direct-links">
              <a href="tel:+919990696931"><Phone size={18} /><span>Call our team<strong>+91 99906 96931</strong></span></a>
              <a href="mailto:evoxindia@gmail.com"><Mail size={18} /><span>Email us<strong>evoxindia@gmail.com</strong></span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="premium-shell contact-main-grid">
          <div className="contact-form-intro">
            <p className="premium-kicker">Send a message</p>
            <h2>Tell us what<br />you need.</h2>
            <p>Share a little context and the right person from EVOX will get back to you.</p>
            <div className="contact-response">
              <Clock size={18} />
              <span><strong>Monday–Saturday</strong>9:00 AM–7:00 PM</span>
            </div>
          </div>

          <form name="contact" method="POST" data-netlify="true" className="premium-form contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="premium-field-grid">
              <label>
                <span>Your name *</span>
                <input name="name" value={formData.name} onChange={handleChange} required placeholder="Full name" />
              </label>
              <label>
                <span>Work email *</span>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="name@company.com" />
              </label>
            </div>
            <label>
              <span>Subject *</span>
              <input name="subject" value={formData.subject} onChange={handleChange} required placeholder="How can we help?" />
            </label>
            <label>
              <span>Your message *</span>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Tell us about your requirement, team or deployment." />
            </label>
            <button className="premium-button primary premium-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send message'} <Send size={17} />
            </button>
          </form>
        </div>
      </section>

      <section className="contact-offices">
        <div className="premium-shell">
          <div className="premium-section-heading">
            <div>
              <p className="premium-kicker">Where to find us</p>
              <h2>Two cities.<br />One standard.</h2>
            </div>
            <p className="contact-offices-copy">Meet our teams in New Delhi and Mumbai for product consultation and business support.</p>
          </div>
          <div className="contact-office-grid">
            {offices.map((office, index) => (
              <article key={office.city}>
                <div className="contact-office-map">
                  <iframe
                    src={office.embed}
                    title={`${office.city} office map`}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="contact-office-content">
                <span className="contact-office-number">0{index + 1}</span>
                <p>{office.label}</p>
                <h3>{office.city}</h3>
                <div className="contact-office-detail"><MapPin size={18} /><span>{office.address}</span></div>
                <div className="contact-office-detail"><Phone size={18} /><a href={office.phoneHref}>{office.phone}</a></div>
                <a className="contact-direction-link" href={office.map} target="_blank" rel="noreferrer">
                  Get directions <ArrowRight size={16} />
                </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}
