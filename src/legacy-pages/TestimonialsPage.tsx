import { Star } from 'lucide-react';
import { InnerHero, PremiumPage } from '../components/PremiumPages';

const reviews = [
  ['Sachin Desai', 'Professional User', 'X1 Mini', 'Compact, dependable and genuinely useful for everyday work. The battery life and build quality stand out.'],
  ['Priya Sharma', 'Field Engineer', 'EVOX Ultra', 'Clear communication and battery performance that lasts through long field operations.'],
  ['Rahul Kumar', 'Security Manager', 'XC-19', 'Reliable equipment for our security team. The simple operation makes deployment easy.'],
  ['Amit Patel', 'Operations Head', 'X1 Pro', 'The X1 Pro transformed team communication with clear audio and dependable range.'],
  ['Sneha Reddy', 'Security Consultant', 'XC-19', 'A strong investment for surveillance, especially where compact equipment matters.'],
  ['Vikram Singh', 'Fleet Manager', 'EVOX Ultra', 'Our EVOX equipment has handled daily use for years with excellent support.'],
];

export function TestimonialsPage() {
  return (
    <PremiumPage
      title="Customer Reviews | EVOX India"
      description="Read customer experiences with EVOX professional radios, body cameras and security equipment used in real working environments."
      canonicalUrl="https://evoxindia.in/testimonials"
      hero={<InnerHero eyebrow="Customer experiences" title="Trusted in the" accent="real world." description="The most useful measure of professional equipment is how it performs when teams depend on it." aside={<div className="rating-aside"><strong>4.9</strong><div><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div><span>average customer rating</span></div>} />}
    >
      <section className="reviews-section">
        <div className="premium-shell">
          <div className="reviews-summary"><div><strong>150+</strong><span>customers served</span></div><div><strong>100%</strong><span>would recommend</span></div><div><strong>5/5</strong><span>support rating</span></div></div>
          <div className="reviews-grid">
            {reviews.map(([name, role, product, quote], index) => <blockquote key={name}><span>0{index + 1}</span><div className="review-stars">★★★★★</div><p>“{quote}”</p><footer><strong>{name}</strong><small>{role} · {product}</small></footer></blockquote>)}
          </div>
        </div>
      </section>
    </PremiumPage>
  );
}
