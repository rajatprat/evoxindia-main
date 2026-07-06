import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Check, Phone } from 'lucide-react';
import { Header } from './Header';
import { PremiumFooter } from './PremiumFooter';
import { SEO } from './SEO';
import x1Pro from '../assets/x1-pro.png';
import evoxUltra from '../assets/evox-ultra.png';

const go = (name: string) => (window as any)[name]?.();

export function InnerHero({
  eyebrow,
  title,
  accent,
  description,
  aside,
  visual,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  aside?: ReactNode;
  visual?: ReactNode | false;
}) {
  const heroVisual = visual === false ? null : visual || (
    <div className="inner-hero-device-stage" aria-hidden="true">
      <div className="inner-hero-visual-marker">
        <span>Professional systems</span>
        <strong>EVOX / INDIA</strong>
      </div>
      <div className="inner-hero-visual-notes">
        <span>Designed for the field</span>
        <span>Built for long shifts</span>
      </div>
      <img src={evoxUltra} alt="" />
      <img src={x1Pro} alt="" />
    </div>
  );

  return (
    <section className="inner-hero">
      <div className="inner-hero-orbit" />
      <div className="premium-shell inner-hero-layout">
        <div>
          <p className="premium-kicker light">{eyebrow}</p>
          <h1>{title}{accent && <><br /><em>{accent}</em></>}</h1>
          <p>{description}</p>
        </div>
        {(aside || heroVisual) && (
          <div className="inner-hero-aside">
            {heroVisual}
            {aside && <div className="inner-hero-aside-content">{aside}</div>}
          </div>
        )}
      </div>
    </section>
  );
}

export function PremiumPage({
  title,
  description,
  canonicalUrl,
  hero,
  children,
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  hero: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="premium-inner-page">
      <SEO
        title={title}
        description={description}
        canonicalUrl={canonicalUrl}
        structuredData={{
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://evoxindia.in/' },
            { '@type': 'ListItem', position: 2, name: title.replace(/\s*\|\s*EVOX India$/, ''), item: canonicalUrl },
          ],
        }}
      />
      <Header />
      <main>{hero}{children}</main>
      <PremiumFooter />
    </div>
  );
}

export type ProductDetailConfig = {
  name: string;
  slug: string;
  type: string;
  eyebrow: string;
  statement: string;
  description: string;
  image: string;
  tone: string;
  seoImage: string;
  quickSpecs: Array<[string, string]>;
  features: string[];
  specs: Array<[string, string]>;
};

export function PremiumProductDetail({ config }: { config: ProductDetailConfig }) {
  const hasLightHero = config.tone === 'porcelain' || config.tone === 'sand';

  return (
    <div className="premium-detail-page">
      <SEO
        title={`${config.name} — ${config.type} | EVOX India`}
        description={config.description}
        canonicalUrl={`https://evoxindia.in/products/${config.slug}`}
        ogImageAlt={`${config.name} ${config.type} by EVOX India`}
        ogType="product"
        structuredData={[
          {
            '@type': 'BreadcrumbList',
            '@id': `https://evoxindia.in/products/${config.slug}#breadcrumb`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://evoxindia.in/' },
              { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://evoxindia.in/products' },
              { '@type': 'ListItem', position: 3, name: config.name, item: `https://evoxindia.in/products/${config.slug}` },
            ],
          },
          {
            '@type': 'Product',
            '@id': `https://evoxindia.in/products/${config.slug}#product`,
            name: config.name,
            model: config.name,
            description: config.description,
            image: config.seoImage,
            category: config.type,
            brand: { '@type': 'Brand', name: 'EVOX' },
            manufacturer: { '@id': 'https://evoxindia.in/#organization' },
            url: `https://evoxindia.in/products/${config.slug}`,
            additionalProperty: config.specs.map(([name, value]) => ({
              '@type': 'PropertyValue',
              name,
              value,
            })),
          },
        ]}
      />
      <Header theme={hasLightHero ? 'light' : 'dark'} />
      <main>
        <section className={`detail-hero ${config.tone} product-${config.name.toLowerCase().replace(/\s+/g, '-')}`}>
          <div className="detail-hero-orbit" />
          <div className="premium-shell detail-hero-layout">
            <div className="detail-copy">
              <button className="detail-back" onClick={() => go('navigateToProducts')}>
                <ArrowLeft size={16} /> All products
              </button>
              <p className="premium-kicker light">{config.eyebrow}</p>
              <h1>{config.name}</h1>
              <h2>{config.statement}</h2>
              <p>{config.description}</p>
              <div className="detail-actions">
                <button className="premium-button primary" onClick={() => go('navigateToGetQuote')}>
                  Request a quote <ArrowRight size={17} />
                </button>
                <a href="tel:+919990696931"><Phone size={16} /> Talk to sales</a>
              </div>
            </div>
            <div className="detail-product">
              <div className="detail-product-ring" />
              <img src={config.image} alt={config.name} />
            </div>
          </div>
          <div className="premium-shell detail-quick-specs">
            {config.quickSpecs.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </section>

        <section className="detail-overview">
          <div className="premium-shell detail-overview-layout">
            <div>
              <p className="premium-kicker">Designed for the field</p>
              <h2>Everything you need.<br />Nothing you don’t.</h2>
            </div>
            <div className="detail-features">
              {config.features.map((feature, index) => (
                <div key={feature}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Check size={18} />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-specifications">
          <div className="premium-shell">
            <div className="detail-section-heading">
              <p className="premium-kicker light">Technical overview</p>
              <h2>Specifications.</h2>
            </div>
            <div className="detail-spec-grid">
              {config.specs.map(([label, value], index) => (
                <div key={label}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{label}</p>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-cta">
          <div className="premium-shell">
            <p className="premium-kicker">Equip your team</p>
            <h2>Built for your<br />working environment.</h2>
            <button className="premium-button dark" onClick={() => go('navigateToGetQuote')}>
              Get a tailored quote <ArrowRight size={17} />
            </button>
          </div>
        </section>
      </main>
      <PremiumFooter />
    </div>
  );
}

export type LegalSection = { title: string; paragraphs: string[]; bullets?: string[] };

export function PremiumLegalPage({
  title,
  eyebrow,
  description,
  updated,
  canonicalUrl,
  sections,
}: {
  title: string;
  eyebrow: string;
  description: string;
  updated: string;
  canonicalUrl: string;
  sections: LegalSection[];
}) {
  return (
    <PremiumPage
      title={`${title} | EVOX India`}
      description={description}
      canonicalUrl={canonicalUrl}
      hero={<InnerHero eyebrow={eyebrow} title={title} description={description} aside={<div className="legal-updated"><span>Last updated</span><strong>{updated}</strong></div>} />}
    >
      <section className="legal-content">
        <div className="premium-shell legal-layout">
          <aside>
            <span>On this page</span>
            {sections.map((section, index) => <a href={`#legal-${index}`} key={section.title}>{section.title}</a>)}
          </aside>
          <article>
            {sections.map((section, index) => (
              <section id={`legal-${index}`} key={section.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
          </article>
        </div>
      </section>
    </PremiumPage>
  );
}
