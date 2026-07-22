import {
  ArrowRight,
  BatteryCharging,
  ChevronRight,
  Headphones,
  Radio,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import x1Pro from '../assets/x1-pro.png';
import x1Mini from '../assets/x1-mini.png';
import evoxUltra from '../assets/evox-ultra.png';
import xc19 from '../assets/xc19.png';
import pttMini from '../assets/ptt-super-mini.png';
import { PremiumFooter } from './PremiumFooter';

const navigate = (name: string) => (window as any)[name]?.();

const products = [
  {
    name: 'X1 Pro',
    type: 'Professional Radio',
    copy: 'Clearer calls. Longer shifts. Built for people who cannot afford to lose contact.',
    image: x1Pro,
    tone: 'graphite',
    action: 'navigateToProductX1Pro',
  },
  {
    name: 'X1 Mini',
    type: 'Body Camera',
    copy: 'A compact witness with HD recording, infrared vision and all-day endurance.',
    image: x1Mini,
    tone: 'silver',
    action: 'navigateToProductX1Mini',
  },
  {
    name: 'EVOX Ultra',
    type: 'Rugged Radio',
    copy: 'Purpose-built communication for demanding sites and unpredictable conditions.',
    image: evoxUltra,
    tone: 'red',
    action: 'navigateToProductX1Ultra',
  },
  {
    name: 'XC-19',
    type: 'Security Camera',
    copy: 'Reliable visual intelligence in a compact, field-ready form.',
    image: xc19,
    tone: 'midnight',
    action: 'navigateToProductXC19',
  },
];

export function PremiumHome() {
  return (
    <div className="premium-home">
      <section className="premium-hero">
        <div className="premium-glow" />
        <div className="premium-shell premium-hero-grid">
          <div className="premium-hero-copy">
            <div className="premium-eyebrow">
              <span />
              Professional communication, refined.
            </div>
            <h1>
              Stay heard.<br />
              <em>Stay ahead.</em>
            </h1>
            <p>
              Mission-ready radios and body cameras engineered for clear decisions,
              tough environments and long days in the field.
            </p>
            <div className="premium-actions">
              <button className="premium-button primary" onClick={() => navigate('navigateToProducts')}>
                Explore products <ArrowRight size={17} />
              </button>
              <button className="premium-text-link" onClick={() => navigate('navigateToGetQuote')}>
                Talk to an expert <ChevronRight size={17} />
              </button>
            </div>
            <div className="premium-trust-row">
              <span>ISO 9001:2015</span>
              <span>License-free solutions</span>
              <span>Made for India</span>
            </div>
          </div>

          <div className="premium-hero-visual" aria-label="EVOX X1 Pro professional radio">
            <div className="premium-orbit orbit-one" />
            <div className="premium-orbit orbit-two" />
            <div className="premium-product-halo" />
            <img src={x1Pro} alt="EVOX X1 Pro professional radio" />
            <div className="premium-spec spec-one">
              <BatteryCharging size={17} />
              <span><strong>4800mAh</strong> long-life battery</span>
            </div>
            <div className="premium-spec spec-two">
              <Headphones size={17} />
              <span><strong>Advanced</strong> noise control</span>
            </div>
          </div>
        </div>
        <a className="premium-scroll-cue" href="#products" aria-label="Scroll to products">
          <span />
          Discover
        </a>
      </section>

      <section className="premium-statement">
        <div className="premium-shell">
          <p className="premium-kicker">Built around the mission</p>
          <h2>
            Technology should disappear.<br />
            <span>Confidence should remain.</span>
          </h2>
          <p className="premium-statement-copy">
            Every EVOX device is designed to reduce friction between your team and the work
            that matters—from the first push-to-talk to the final hour of a demanding shift.
          </p>
        </div>
      </section>

      <section className="premium-products" id="products">
        <div className="premium-shell">
          <div className="premium-section-heading">
            <div>
              <p className="premium-kicker">The EVOX lineup</p>
              <h2>Choose your edge.</h2>
            </div>
            <button className="premium-text-link dark" onClick={() => navigate('navigateToProducts')}>
              View all products <ArrowRight size={17} />
            </button>
          </div>

          <div className="premium-product-grid">
            {products.map((product, index) => (
              <article className={`premium-product-card ${product.tone}`} key={product.name}>
                <div className="premium-product-copy">
                  <p>{product.type}</p>
                  <h3>{product.name}</h3>
                  <span>{product.copy}</span>
                  <button onClick={() => navigate(product.action)} aria-label={`Explore ${product.name}`}>
                    Explore <ArrowRight size={16} />
                  </button>
                </div>
                <div className="premium-card-number">0{index + 1}</div>
                <img src={product.image} alt={product.name} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-engineering">
        <div className="premium-shell">
          <div className="premium-engineering-intro">
            <p className="premium-kicker light">Engineered to endure</p>
            <h2>Ready before<br />you are.</h2>
            <p>
              From crowded venues to exposed worksites, EVOX is built around the realities
              of professional use.
            </p>
          </div>
          <div className="premium-feature-list">
            <div>
              <ShieldCheck />
              <span>01</span>
              <h3>Field-ready construction</h3>
              <p>Confident handling, durable materials and dependable performance.</p>
            </div>
            <div>
              <Radio />
              <span>02</span>
              <h3>Immediate communication</h3>
              <p>Simple controls and crisp audio keep teams moving without hesitation.</p>
            </div>
            <div>
              <BatteryCharging />
              <span>03</span>
              <h3>Endurance by design</h3>
              <p>High-capacity batteries engineered around real professional shifts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-mini-feature">
        <div className="premium-shell premium-mini-grid">
          <div className="premium-mini-device">
            <div className="premium-mini-aura" />
            <img src={pttMini} alt="EVOX PTT Super Mini" />
          </div>
          <div className="premium-mini-copy">
            <p className="premium-kicker">PTT Super Mini</p>
            <h2>Less to carry.<br />Nothing to miss.</h2>
            <p>
              Ultra-compact, uncomplicated and ready for instant communication.
              A small radio with a serious role.
            </p>
            <div className="premium-inline-stats">
              <div><strong>20</strong><span>channels</span></div>
              <div><strong>446</strong><span>MHz PMR</span></div>
              <div><strong>0.5W</strong><span>output</span></div>
            </div>
            <button className="premium-button dark" onClick={() => navigate('navigateToProductPTTMini')}>
              Meet Super Mini <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      <section className="premium-proof">
        <div className="premium-shell">
          <Sparkles size={20} />
          <blockquote>
            “Reliable equipment should create calm in the moments that are anything but.”
          </blockquote>
          <div className="premium-proof-stats">
            <div><strong>10,000+</strong><span>professionals served</span></div>
            <div><strong>6</strong><span>focused product launches</span></div>
            <div><strong>1 year</strong><span>product warranty</span></div>
          </div>
        </div>
      </section>

      <section className="premium-cta">
        <div className="premium-shell premium-cta-inner">
          <div>
            <p className="premium-kicker light">Let’s equip your team</p>
            <h2>Communication,<br />without compromise.</h2>
          </div>
          <div>
            <p>Tell us about your environment. We’ll help you choose the right EVOX solution.</p>
            <button className="premium-button white" onClick={() => navigate('navigateToGetQuote')}>
              Get a tailored quote <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}
