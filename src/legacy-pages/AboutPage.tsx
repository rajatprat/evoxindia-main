import { Award, Eye, Target } from 'lucide-react';
import { InnerHero, PremiumPage } from '../components/PremiumPages';
import x1Pro from '../assets/x1-pro.png';
import x1Mini from '../assets/x1-mini.png';
import evoxUltra from '../assets/evox-ultra.png';

const milestones = [
  ['2022', 'EVOX India is founded with a clear focus: dependable communication tools for teams that work on the move.'],
  ['2023', 'X1 Pro and X1 Mini introduce the first EVOX radio lineup for practical daily coordination.'],
  ['2024', 'X10 and X1 Ultra expand the range for teams that need stronger, more capable field communication.'],
  ['2025', 'XC-19 and Super Mini PTT add recording and pocket-sized PMR options to complete the current portfolio.'],
];

export function AboutPage() {
  return (
    <PremiumPage
      title="About EVOX India | Communication Technology"
      description="Discover EVOX India's mission, values and journey building dependable professional communication and recording equipment."
      canonicalUrl="https://evoxindia.in/about"
      hero={<div className="about-hero"><InnerHero eyebrow="Our story" title="Technology with" accent="a job to do." description="We build professional communication and recording tools around a simple belief: equipment should make demanding work feel more controlled." visual={
          <div className="about-product-stage" aria-hidden="true">
            <img src={evoxUltra} alt="" />
            <img src={x1Pro} alt="" />
            <img src={x1Mini} alt="" />
          </div>
        } aside={<div className="inner-stat"><strong>2022</strong><span>founded to build practical field communication tools</span></div>} /></div>}
    >
      <section className="story-beliefs">
        <div className="premium-shell story-beliefs-grid">
          <div><Target /><span>01</span><h2>Our mission</h2><p>To give professional teams reliable, intuitive technology that improves coordination and confidence.</p></div>
          <div><Eye /><span>02</span><h2>Our vision</h2><p>To become a globally trusted Indian brand for thoughtfully engineered communication solutions.</p></div>
          <div><Award /><span>03</span><h2>Our standard</h2><p>Quality is not a feature list. It is how a product behaves after hours of real use.</p></div>
        </div>
      </section>
      <section className="story-manifesto">
        <div className="premium-shell">
          <p className="premium-kicker light">What guides us</p>
          <h2>Make it clear.<br />Make it durable.<br /><em>Make it useful.</em></h2>
        </div>
      </section>
      <section className="story-timeline">
        <div className="premium-shell">
          <div className="story-section-heading"><p className="premium-kicker">Our journey</p><h2>Built one milestone<br />at a time.</h2></div>
          <div className="story-milestones">
            {milestones.map(([year, text], index) => <div key={year}><span>{String(index + 1).padStart(2, '0')}</span><strong>{year}</strong><p>{text}</p></div>)}
          </div>
        </div>
      </section>
    </PremiumPage>
  );
}
