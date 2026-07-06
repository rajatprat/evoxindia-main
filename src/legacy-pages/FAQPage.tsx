import { Header } from '../components/Header';
import { PremiumFooter } from '../components/PremiumFooter';
import { SEO } from '../components/SEO';
import { ArrowRight, HelpCircle, ChevronDown, Package, Truck, CreditCard, Shield, Headphones, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Products
  {
    category: 'Products',
    question: 'What products does EVOX India offer?',
    answer: 'EVOX India offers professional communication and recording devices including the X1 Mini body camera, X1 Pro, X10 and EVOX Ultra radios, XC-19 security camera, and PTT Super Mini. All products are designed for dependable professional use.',
  },
  {
    category: 'Products',
    question: 'Are EVOX products suitable for outdoor use?',
    answer: 'Yes, all EVOX products are built with durability in mind. They feature weather-resistant designs and are tested for use in various environmental conditions, making them ideal for outdoor applications in construction, security, and tourism industries.',
  },
  {
    category: 'Products',
    question: 'What is the difference between X1 Mini and X1 Ultra?',
    answer: 'The X1 Mini is a compact body camera designed for personal security and documentation, while the X1 Ultra is a professional-grade two-way radio with extended range and advanced features. Both serve different purposes - the X1 Mini for video recording and the X1 Ultra for voice communication.',
  },
  {
    category: 'Products',
    question: 'Can I get a product demonstration before purchasing?',
    answer: 'Yes! You can visit our offices in Delhi or Mumbai for a hands-on demonstration. Alternatively, contact our sales team at +91-9990696931 to schedule a virtual demo or arrange a product trial.',
  },
  
  // Ordering & Pricing
  {
    category: 'Ordering & Pricing',
    question: 'How do I place an order?',
    answer: 'You can place an order by using our "Get Quote" page on the website, calling us at +91-9990696931, or emailing sales@evoxindia.in. Our sales team will guide you through the process and provide a detailed quotation.',
  },
  {
    category: 'Ordering & Pricing',
    question: 'Do you offer bulk order discounts?',
    answer: 'Yes! We offer competitive pricing for bulk orders. The discount varies based on quantity and product selection. Please contact our sales team with your requirements for a customized quote.',
  },
  {
    category: 'Ordering & Pricing',
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including bank transfers, cheques, online payments, and for businesses, we also offer credit terms. Payment details will be provided in your quotation.',
  },
  {
    category: 'Ordering & Pricing',
    question: 'Is there a minimum order quantity?',
    answer: 'For most products, we accept orders starting from a single unit. However, for certain customized solutions or bulk pricing, minimum quantities may apply. Contact us to discuss your specific needs.',
  },

  // Shipping & Delivery
  {
    category: 'Shipping & Delivery',
    question: 'What is the delivery time?',
    answer: 'Standard delivery typically takes 5-7 business days within India. For urgent requirements, express delivery options are available. International shipping timelines vary by location. Exact delivery dates will be confirmed with your order.',
  },
  {
    category: 'Shipping & Delivery',
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to select international locations. Shipping costs and delivery times vary by destination. Please contact our sales team for international shipping quotes and availability.',
  },
  {
    category: 'Shipping & Delivery',
    question: 'How can I track my order?',
    answer: 'Once your order is shipped, you will receive a tracking number via email or SMS. You can use this number to track your shipment on the courier\'s website. Our customer support team is also available to help you track your order.',
  },
  {
    category: 'Shipping & Delivery',
    question: 'What if my order arrives damaged?',
    answer: 'All products are carefully packaged and insured. If you receive a damaged product, please contact us within 48 hours with photos of the damage. We will arrange for a replacement or repair at no additional cost.',
  },

  // Warranty & Support
  {
    category: 'Warranty & Support',
    question: 'What warranty do EVOX products come with?',
    answer: 'All EVOX products come with a standard 1-year manufacturer warranty covering defects in materials and workmanship. Extended warranty options are available for purchase. The warranty does not cover damage from misuse or accidents.',
  },
  {
    category: 'Warranty & Support',
    question: 'How do I claim warranty service?',
    answer: 'To claim warranty service, contact our support team at evoxindia@gmail.com or call +91-9990696931. You will need to provide your purchase invoice and a description of the issue. Our team will guide you through the warranty claim process.',
  },
  {
    category: 'Warranty & Support',
    question: 'Do you provide after-sales support?',
    answer: 'Yes! We offer comprehensive after-sales support including technical assistance, troubleshooting, and maintenance services. Our support team is available Monday to Saturday, 9:00 AM - 7:00 PM.',
  },
  {
    category: 'Warranty & Support',
    question: 'Where can I get my EVOX product repaired?',
    answer: 'Repairs can be handled at our service centers in Delhi and Mumbai. For customers in other locations, we can arrange pickup and delivery for repairs. Contact our support team for repair services.',
  },

  // Technical
  {
    category: 'Technical',
    question: 'What is the battery life of EVOX devices?',
    answer: 'Battery life varies by model and usage. The X1 Mini body camera offers up to 8 hours of continuous recording, while the X1 Pro and X1 Ultra walkie-talkies provide 12-16 hours of standby time. Detailed specifications are available on individual product pages.',
  },
  {
    category: 'Technical',
    question: 'Are EVOX radios compatible with other brands?',
    answer: 'EVOX radios can communicate with other devices operating on the same frequency bands, subject to regulatory compliance. For optimal performance, we recommend using EVOX devices within the same network.',
  },
  {
    category: 'Technical',
    question: 'Do I need a license to operate EVOX walkie-talkies?',
    answer: 'In India, commercial use of walkie-talkies requires a license from the Wireless Planning and Coordination (WPC) wing of the Department of Telecommunications. We can guide you through the licensing process.',
  },
  {
    category: 'Technical',
    question: 'Can I customize EVOX products for my business?',
    answer: 'Yes! We offer customization options including branding, programming channels for specific frequencies, and custom accessories. Contact our sales team to discuss your customization requirements.',
  },

  // General
  {
    category: 'General',
    question: 'Where are EVOX products manufactured?',
    answer: 'EVOX products are manufactured using high-quality components and undergo rigorous quality testing. We work with certified manufacturing partners to ensure all products meet international quality standards.',
  },
  {
    category: 'General',
    question: 'Do you provide training for using EVOX products?',
    answer: 'Yes, we provide training sessions for bulk orders and enterprise customers. Training can be conducted at your location or at our offices. Basic user manuals and video tutorials are included with all products.',
  },
  {
    category: 'General',
    question: 'Can I return a product if I\'m not satisfied?',
    answer: 'We accept returns within 7 days of delivery for unused products in original packaging. A restocking fee may apply. Customized or opened products may not be eligible for return. Please refer to our return policy or contact our support team.',
  },
  {
    category: 'General',
    question: 'How can I become an EVOX dealer or distributor?',
    answer: 'We welcome partnership opportunities! If you\'re interested in becoming an EVOX dealer or distributor, please contact us at sales@evoxindia.in with details about your business and location. Our team will get in touch with partnership information.',
  },
];

const categories = [
  { name: 'All', icon: HelpCircle },
  { name: 'Products', icon: Package },
  { name: 'Ordering & Pricing', icon: CreditCard },
  { name: 'Shipping & Delivery', icon: Truck },
  { name: 'Warranty & Support', icon: Shield },
  { name: 'Technical', icon: Headphones },
  { name: 'General', icon: MapPin },
];

export function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setOpenIndex(null);
  };

  return (
    <div className="premium-faq-page">
      <SEO
        title="Body Camera & Walkie-Talkie FAQs | EVOX India"
        description="Find answers about EVOX products, pricing, ordering, delivery, returns, warranty, licensing and technical support."
        canonicalUrl="https://evoxindia.in/faq"
        structuredData={{
          "@type": "FAQPage",
          "@id": "https://evoxindia.in/faq#faq",
          "mainEntity": faqs.slice(0, 10).map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
      />
      <Header />

      <section className="faq-hero">
        <div className="faq-hero-orbit" />
        <div className="premium-shell faq-hero-layout">
          <div>
            <p className="premium-kicker light">EVOX support library</p>
            <h1>Answers,<br /><em>without the noise.</em></h1>
          </div>
          <div className="faq-hero-aside">
            <p>Product details, ordering, delivery, warranty and technical support—find the information you need to move forward.</p>
            <div className="faq-hero-stat">
              <strong>{faqs.length}</strong>
              <span>questions answered</span>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-content">
        <div className="premium-shell faq-layout">
          <aside className="faq-category-panel">
            <p className="premium-kicker">Browse by topic</p>
            <nav aria-label="FAQ categories">
              {categories.map((category, index) => {
                const Icon = category.icon;
                const count = category.name === 'All' ? faqs.length : faqs.filter(faq => faq.category === category.name).length;
                return (
                  <button
                    key={category.name}
                    onClick={() => selectCategory(category.name)}
                    className={selectedCategory === category.name ? 'is-active' : ''}
                    aria-pressed={selectedCategory === category.name}
                  >
                    <span className="faq-category-icon"><Icon size={17} /></span>
                    <span><small>0{index + 1}</small>{category.name}</span>
                    <strong>{count}</strong>
                  </button>
                );
              })}
            </nav>
            <div className="faq-side-help">
              <p>Need a more specific answer?</p>
              <button onClick={() => (window as any).navigateToContact?.()}>
                Talk to our team <ArrowRight size={15} />
              </button>
            </div>
          </aside>

          <div className="faq-list-wrap">
            <div className="faq-list-heading">
              <div>
                <p className="premium-kicker">{selectedCategory}</p>
                <h2>{selectedCategory === 'All' ? 'Frequently asked.' : selectedCategory}</h2>
              </div>
              <span>{String(filteredFAQs.length).padStart(2, '0')} entries</span>
            </div>

            <div className="faq-list">
              {filteredFAQs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <article className={isOpen ? 'is-open' : ''} key={faq.question}>
                    <button onClick={() => toggleFAQ(index)} aria-expanded={isOpen}>
                      <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="faq-question">
                        <small>{faq.category}</small>
                        <strong>{faq.question}</strong>
                      </span>
                      <span className="faq-toggle"><ChevronDown size={19} /></span>
                    </button>
                    <div className="faq-answer" aria-hidden={!isOpen}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-cta">
        <div className="premium-shell faq-cta-inner">
          <div>
            <p className="premium-kicker light">Still need clarity?</p>
            <h2>Speak to someone<br />who knows the equipment.</h2>
          </div>
          <div>
            <p>Our specialists can help with products, deployment, licensing and after-sales support.</p>
            <button className="premium-button white" onClick={() => (window as any).navigateToContact?.()}>
              Contact support <ArrowRight size={17} />
            </button>
            <a href="tel:+919990696931"><Phone size={16} /> +91 99906 96931</a>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}
