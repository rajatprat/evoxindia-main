import { Award, Eye, Target } from 'lucide-react';
import { InnerHero, PremiumPage } from '../components/PremiumPages';
import x1Pro from '../assets/x1-pro.png';
import x1Mini from '../assets/x1-mini.png';
import evoxUltra from '../assets/evox-ultra.png';

const milestones = [
  ['2018', 'EVOX India begins with a focus on professional communication technology.'],
  ['2020', 'Body cameras and surveillance equipment join the product portfolio.'],
  ['2021', 'ISO 9001:2015 certification reinforces our quality systems.'],
  ['2023', 'The advanced X1 product family launches across India.'],
  ['Today', 'EVOX supports teams across security, hospitality, retail and infrastructure.'],
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
        } aside={<div className="inner-stat"><strong>15+</strong><span>years of industry experience</span></div>} /></div>}
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
