import { useEffect } from 'react';

const SITE_URL = 'https://evoxindia.in';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

type StructuredData = object | object[];

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  canonicalUrl?: string;
  robots?: string;
  structuredData?: StructuredData;
}

const organizationSchema = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'EVOX India',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/evox-logo.png`,
    width: 150,
    height: 50,
  },
  email: 'evoxindia@gmail.com',
  telephone: '+91-99906-96931',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '10th Floor, Flat No. 1011, Devika Tower, B-6, Nehru Place',
      addressLocality: 'New Delhi',
      postalCode: '110019',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'First Floor, Ashoka Super Market, B-122, S.V. Road, Piramal Nagar, Goregaon',
      addressLocality: 'Mumbai',
      postalCode: '400104',
      addressCountry: 'IN',
    },
  ],
};

const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'EVOX India',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
};

export function SEO({
  title,
  description,
  keywords,
  ogImage = DEFAULT_IMAGE,
  ogImageAlt = 'EVOX India professional communication technology',
  ogType = 'website',
  canonicalUrl,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  structuredData,
}: SEOProps) {
  const canonical = canonicalUrl || `${SITE_URL}${window.location.pathname}`;
  const resolvedImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;
  const additionalSchema = structuredData
    ? (Array.isArray(structuredData) ? structuredData : [structuredData])
    : [];
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      websiteSchema,
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-IN',
      },
      ...additionalSchema,
    ],
  });

  useEffect(() => {
    document.title = title;

    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const removeMetaTag = (name: string) => {
      document.querySelector(`meta[name="${name}"]`)?.remove();
    };

    setMetaTag('description', description);
    keywords ? setMetaTag('keywords', keywords) : removeMetaTag('keywords');
    setMetaTag('author', 'EVOX India');
    setMetaTag('robots', robots);
    setMetaTag('googlebot', robots);
    setMetaTag('theme-color', '#090909');

    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonical, true);
    setMetaTag('og:image', resolvedImage, true);
    setMetaTag('og:image:secure_url', resolvedImage, true);
    setMetaTag('og:image:alt', ogImageAlt, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:site_name', 'EVOX India', true);
    setMetaTag('og:locale', 'en_IN', true);

    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', resolvedImage);
    setMetaTag('twitter:image:alt', ogImageAlt);

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    let script = document.querySelector('#seo-structured-data') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'seo-structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = schema;

    document.documentElement.lang = 'en-IN';
  }, [canonical, description, keywords, ogImageAlt, ogType, resolvedImage, robots, schema, title]);

  return null;
}
