import { useState } from 'react';
import { ArrowRight, BatteryCharging, Camera, Radio, ShieldCheck } from 'lucide-react';
import { Header } from '../components/Header';
import { PremiumFooter } from '../components/PremiumFooter';
import { SEO } from '../components/SEO';
import x1Mini from '../assets/x1-mini.png';
import x1Pro from '../assets/x1-pro.png';
import xc19 from '../assets/xc19.png';
import evoxUltra from '../assets/evox-ultra.png';
import pttMini from '../assets/ptt-super-mini.png';
import x10 from '../assets/x10.png';

type Category = 'All' | 'Radios' | 'Cameras';

const products = [
  {
    index: '01',
    name: 'X1 Pro',
    family: 'Professional radio',
    category: 'Radios' as Category,
    statement: 'Clear communication. Even when the world gets loud.',
    description: 'A license-free professional radio with advanced noise control and long-shift endurance.',
    image: x1Pro,
    action: 'navigateToProductX1Pro',
    tone: 'obsidian',
    specs: [['4800mAh', 'Battery'], ['200', 'Channels'], ['PMR 446', 'License-free']],
  },
  {
    index: '02',
    name: 'X1 Mini',
    family: 'Body camera',
    category: 'Cameras' as Category,
    statement: 'A compact witness. Ready for every shift.',
    description: 'HD recording, infrared night vision and dependable battery life in a wearable form.',
    image: x1Mini,
    action: 'navigateToProductX1Mini',
    tone: 'porcelain',
    specs: [['1080p', 'Video'], ['16 hrs', 'Battery'], ['IR', 'Night vision']],
  },
  {
    index: '03',
    name: 'EVOX Ultra',
    family: 'Rugged radio',
    category: 'Radios' as Category,
    statement: 'Engineered for the places that test everything.',
    description: 'Rugged construction, voice activation and high-capacity power for demanding field work.',
    image: evoxUltra,
    action: 'navigateToProductX1Ultra',
    tone: 'signal',
    specs: [['4500mAh', 'Battery'], ['VOX', 'Ready'], ['IP67', 'Protection']],
  },
  {
    index: '04',
    name: 'XC-19',
    family: 'Security camera',
    category: 'Cameras' as Category,
    statement: 'Professional visibility. Without the bulk.',
    description: 'Compact surveillance designed for reliable documentation in changing conditions.',
    image: xc19,
    action: 'navigateToProductXC19',
    tone: 'slate',
    specs: [['HD', 'Recording'], ['Wide', 'Field of view'], ['Low light', 'Enhanced']],
  },
  {
    index: '05',
    name: 'PTT Super Mini',
    family: 'Compact radio',
    category: 'Radios' as Category,
    statement: 'Less to carry. Nothing to miss.',
    description: 'An ultra-compact push-to-talk radio for fast-moving teams and everyday professional use.',
    image: pttMini,
    action: 'navigateToProductPTTMini',
    tone: 'sand',
    specs: [['20', 'Channels'], ['95g', 'Weight'], ['0.5W', 'Output']],
  },
  {
    index: '06',
    name: 'X10',
    family: 'Rugged radio',
    category: 'Radios' as Category,
    statement: 'Clearer voice. Tougher build. Ready for the shift.',
    description: 'A license-free PMR446 radio with AI noise reduction, strong flashlight and a 3500mAh battery.',
    image: x10,
    action: 'navigateToProductX10',
    tone: 'obsidian',
    specs: [['3500mAh', 'Battery'], ['16', 'Channels'], ['PMR446', 'License-free']],
  },
];

const go = (name: string) => (window as any)[name]?.();

export function ProductsPage() {
  const [category, setCategory] = useState<Category>('All');
  const visibleProducts = category === 'All'
    ? products
    : products.filter((product) => product.category === category);

  return (
    <div className="catalog-page">
      <SEO
        title="Professional Radios & Body Cameras | EVOX Products"
        description="Compare EVOX professional radios, body cameras and security equipment engineered for reliable communication, recording and field performance."
        canonicalUrl="https://evoxindia.in/products"
        structuredData={[
          {
            '@type': 'BreadcrumbList',
            '@id': 'https://evoxindia.in/products#breadcrumb',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://evoxindia.in/' },
              { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://evoxindia.in/products' },
            ],
          },
          {
            '@type': 'CollectionPage',
            '@id': 'https://evoxindia.in/products#collection',
            name: 'EVOX professional products',
            url: 'https://evoxindia.in/products',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: products.length,
              itemListElement: products.map((product, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: product.name,
                url: `https://evoxindia.in/products/${product.action.replace('navigateToProduct', '').replace('X1Pro', 'x1-pro').replace('X1Mini', 'x1-mini').replace('X1Ultra', 'x1-ultra').replace('XC19', 'xc-19').replace('PTTMini', 'ptt-super-mini').replace('X10', 'x10')}`,
              })),
            },
          },
        ]}
      />
      <Header />

      <main>
        <section className="catalog-hero">
          <div className="catalog-hero-glow" />
          <div className="premium-shell catalog-hero-layout">
            <div className="catalog-hero-copy">
              <p className="premium-kicker light">The EVOX collection</p>
              <h1>Built to keep<br /><em>teams moving.</em></h1>
              <p>
                Professional communication and recording tools, considered down to the last
                control. Choose the device that fits your environment.
              </p>
            </div>
            <div className="catalog-hero-products" aria-hidden="true">
              <img src={evoxUltra} alt="" />
              <img src={x1Pro} alt="" />
              <img src={x1Mini} alt="" />
            </div>
          </div>
          <div className="premium-shell catalog-hero-meta">
            <span>06 products</span>
            <span>Radios · Body cameras · Security</span>
            <span>Designed for professional use</span>
          </div>
        </section>

        <section className="catalog-intro">
          <div className="premium-shell">
            <div className="catalog-intro-heading">
              <p className="premium-kicker">Find your EVOX</p>
              <h2>One standard.<br />Different missions.</h2>
            </div>
            <div className="catalog-filter" aria-label="Filter products">
              {(['All', 'Radios', 'Cameras'] as Category[]).map((item) => (
                <button
                  key={item}
                  className={category === item ? 'is-active' : ''}
                  onClick={() => setCategory(item)}
                >
                  {item}
                  <span>{item === 'All' ? products.length : products.filter((p) => p.category === item).length}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="catalog-list" aria-live="polite">
          <div className="premium-shell">
            {visibleProducts.map((product) => (
              <article className={`catalog-product ${product.tone}`} key={product.name}>
                <div className="catalog-product-copy">
                  <div className="catalog-product-label">
                    <span>{product.index}</span>
                    <p>{product.family}</p>
                  </div>
                  <h2>{product.name}</h2>
                  <h3>{product.statement}</h3>
                  <p className="catalog-description">{product.description}</p>
                  <button onClick={() => go(product.action)}>
                    Explore {product.name} <ArrowRight size={17} />
                  </button>
                </div>
                <div className="catalog-product-visual">
                  <div className="catalog-product-orbit" />
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="catalog-specs">
                  {product.specs.map(([value, label]) => (
                    <div key={label}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="catalog-principles">
          <div className="premium-shell">
            <div className="catalog-principles-heading">
              <p className="premium-kicker light">The EVOX standard</p>
              <h2>Designed around<br />real work.</h2>
            </div>
            <div className="catalog-principles-grid">
              <div>
                <Radio />
                <span>01</span>
                <h3>Communication first</h3>
                <p>Clear controls and dependable audio reduce hesitation in the field.</p>
              </div>
              <div>
                <BatteryCharging />
                <span>02</span>
                <h3>Shift-long endurance</h3>
                <p>Power systems selected around professional use, not ideal conditions.</p>
              </div>
              <div>
                <ShieldCheck />
                <span>03</span>
                <h3>Built for handling</h3>
                <p>Confident grip, resilient construction and straightforward operation.</p>
              </div>
              <div>
                <Camera />
                <span>04</span>
                <h3>Evidence you can trust</h3>
                <p>Reliable recording designed to document the moments that matter.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="catalog-assist">
          <div className="premium-shell catalog-assist-layout">
            <div>
              <p className="premium-kicker">Not sure where to start?</p>
              <h2>Tell us about<br />your environment.</h2>
            </div>
            <div>
              <p>
                Our team will recommend the right device, accessories and deployment
                approach for your people.
              </p>
              <button className="premium-button dark" onClick={() => go('navigateToGetQuote')}>
                Get expert guidance <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <PremiumFooter />
    </div>
  );
}
