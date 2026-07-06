import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

async function loadDotEnv() {
  try {
    const content = await readFile('.env', 'utf8');
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue;
      const index = trimmed.indexOf('=');
      const key = trimmed.slice(0, index).trim();
      const value = trimmed.slice(index + 1).trim().replace(/^['"]|['"]$/g, '');
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // Hosting providers usually inject these values directly.
  }
}

await loadDotEnv();

const siteUrl = (process.env.SITE_URL || 'https://evoxindia.in').replace(/\/$/, '');
const image = `${siteUrl}/og-image.png`;
const configuredWordPressBase = process.env.WORDPRESS_API_BASE || process.env.VITE_WORDPRESS_API_BASE || '';

const pages = [
  ['/', 'Professional Radios & Body Cameras | EVOX India', 'Explore EVOX professional radios, body cameras and security equipment for dependable communication and documentation across demanding operations.', 'website', 'weekly', '1.0'],
  ['/about', 'About EVOX India | Communication Technology', "Discover EVOX India's mission, values and journey building dependable professional communication and recording equipment.", 'website', 'monthly', '0.7'],
  ['/testimonials', 'Customer Reviews | EVOX India', 'Read customer experiences with EVOX professional radios, body cameras and security equipment used in real working environments.', 'website', 'monthly', '0.6'],
  ['/contact', 'Contact EVOX India | New Delhi & Mumbai', 'Contact EVOX India for product guidance, quotes and support for professional radios, body cameras and communication equipment.', 'website', 'monthly', '0.7'],
  ['/products', 'Professional Radios & Body Cameras | EVOX Products', 'Compare EVOX professional radios, body cameras and security equipment engineered for reliable communication, recording and field performance.', 'website', 'weekly', '0.9'],
  ['/products/x1-pro', 'X1 Pro - Professional Radio | EVOX India', 'A rugged PMR 446 professional radio designed for dependable, straightforward communication across demanding shifts.', 'product', 'monthly', '0.8', '/images/x1-pro.png', 'X1 Pro', 'Professional Radio'],
  ['/products/xc-19', 'XC-19 - Security Camera | EVOX India', 'A compact security camera created for reliable documentation, flexible mounting and enhanced low-light recording.', 'product', 'monthly', '0.8', '/images/xc19.png', 'XC-19', 'Security Camera'],
  ['/products/x1-ultra', 'EVOX Ultra - Rugged Radio | EVOX India', 'A high-endurance professional radio combining rugged construction, long battery life and flexible voice operation.', 'product', 'monthly', '0.8', '/images/evox-ultra.png', 'EVOX Ultra', 'Rugged Radio'],
  ['/products/x1-mini', 'X1 Mini - Body Camera | EVOX India', 'Wearable HD documentation with infrared night vision, motion detection and dependable all-day battery performance.', 'product', 'monthly', '0.8', '/images/x1-mini.png', 'X1 Mini', 'Body Camera'],
  ['/products/ptt-super-mini', 'PTT Super Mini - Compact Radio | EVOX India', 'A lightweight push-to-talk radio built for retail, events, hospitality and teams that need instant communication.', 'product', 'monthly', '0.8', '/images/ptt-super-mini.png', 'PTT Super Mini', 'Compact Radio'],
  ['/products/x10', 'X10 - Rugged Radio | EVOX India', 'A durable license-free handheld radio with AI noise reduction, a strong integrated flashlight and straightforward controls.', 'product', 'monthly', '0.8', '/images/x10.png', 'X10', 'Rugged Radio'],
  ['/get-quote', 'Request a Product Quote | EVOX India', 'Request a tailored quote for EVOX professional radios, body cameras and communication equipment for your team or deployment.', 'website', 'monthly', '0.7'],
  ['/industries', 'Communication Solutions by Industry | EVOX India', 'Explore EVOX communication and recording solutions for security, construction, hospitality, healthcare, retail and other operations.', 'website', 'monthly', '0.8'],
  ['/faq', 'Body Camera & Walkie-Talkie FAQs | EVOX India', 'Find answers about EVOX products, pricing, ordering, delivery, returns, warranty, licensing and technical support.', 'website', 'monthly', '0.7'],
  ['/blog', 'Blog | EVOX India', 'Read EVOX India insights on professional radios, body cameras, security communication, field operations and equipment selection.', 'website', 'weekly', '0.8'],
  ['/privacy-policy', 'Privacy Policy | EVOX India', 'Learn how EVOX India collects, uses, protects and manages personal information.', 'website', 'yearly', '0.3'],
  ['/terms-of-service', 'Terms of Service | EVOX India', 'Read the terms governing EVOX India website use, products, orders, delivery, returns and warranty.', 'website', 'yearly', '0.3'],
  ['/cookie-policy', 'Cookie Policy | EVOX India', 'Learn how EVOX India uses cookies and related technologies on its website.', 'website', 'yearly', '0.3'],
  ['/sitemap', 'Sitemap | EVOX India', 'Browse all EVOX India pages, including products, industries, support resources, contact information and legal policies.', 'website', 'monthly', '0.2'],
];

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const stripHtml = (value = '') => String(value)
  .replace(/<[^>]*>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/&#8217;/g, "'")
  .replace(/&#8220;|&#8221;/g, '"')
  .replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ')
  .trim();

const sanitizeHtml = (value = '') => String(value)
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
  .replace(/\son\w+="[^"]*"/gi, '')
  .replace(/\son\w+='[^']*'/gi, '')
  .replace(/javascript:/gi, '');

const getCanonical = (route) => `${siteUrl}${route === '/' ? '/' : route}`;

function getFeaturedImage(post) {
  const media = post?._embedded?.['wp:featuredmedia']?.[0];
  return (
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.medium_large?.source_url ||
    media?.source_url ||
    image
  );
}

function buildGraph({ route, title, description, type = 'website', productImage, productName, productCategory, article }) {
  const canonical = getCanonical(route);
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'EVOX India', url: `${siteUrl}/` },
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: 'EVOX India', publisher: { '@id': `${siteUrl}/#organization` } },
      { '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: title, description, isPartOf: { '@id': `${siteUrl}/#website` }, inLanguage: 'en-IN' },
    ],
  };

  if (type === 'product') {
    graph['@graph'].push(
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteUrl}/products` },
          { '@type': 'ListItem', position: 3, name: productName, item: canonical },
        ],
      },
      {
        '@type': 'Product',
        '@id': `${canonical}#product`,
        name: productName,
        model: productName,
        description,
        image: `${siteUrl}${productImage}`,
        category: productCategory,
        brand: { '@type': 'Brand', name: 'EVOX' },
        manufacturer: { '@id': `${siteUrl}/#organization` },
        url: canonical,
      },
    );
  }

  if (article) {
    graph['@graph'].push({
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: title.replace(' | EVOX India', ''),
      description,
      datePublished: article.date,
      dateModified: article.modified,
      image: article.image,
      mainEntityOfPage: { '@id': `${canonical}#webpage` },
      publisher: { '@id': `${siteUrl}/#organization` },
    });
  }

  return graph;
}

function buildHead({ route, title, description, type = 'website', pageImage = image, productImage, productName, productCategory, article }) {
  const canonical = getCanonical(route);
  const graph = buildGraph({ route, title, description, type, productImage, productName, productCategory, article });

  return `<!-- SEO:START -->
      <title>${escapeHtml(title)}</title>
      <meta name="description" content="${escapeHtml(description)}" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href="${canonical}" />
      <meta property="og:title" content="${escapeHtml(title)}" />
      <meta property="og:description" content="${escapeHtml(description)}" />
      <meta property="og:type" content="${type}" />
      <meta property="og:url" content="${canonical}" />
      <meta property="og:image" content="${pageImage}" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="${escapeHtml(title)}" />
      <meta property="og:site_name" content="EVOX India" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${escapeHtml(title)}" />
      <meta name="twitter:description" content="${escapeHtml(description)}" />
      <meta name="twitter:image" content="${pageImage}" />
      <script id="seo-structured-data" type="application/ld+json">${JSON.stringify(graph)}</script>
      <!-- SEO:END -->`;
}

async function writeRoute(template, route, head, fallbackHtml = '') {
  const output = route === '/' ? 'build/index.html' : path.join('build', route.slice(1), 'index.html');
  const html = template
    .replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, head)
    .replace('<div id="root"></div>', `<div id="root">${fallbackHtml}</div>`);

  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, html);
}

async function fetchWordPressPosts() {
  if (!configuredWordPressBase) return [];

  const base = configuredWordPressBase.replace(/\/$/, '');
  const params = new URLSearchParams({ per_page: '50', _embed: '1', status: 'publish' });
  const response = await fetch(`${base}/posts?${params}`);

  if (!response.ok) {
    throw new Error(`WordPress API returned ${response.status}`);
  }

  return response.json();
}

function buildArticleFallback(post, title, description, route, pageImage) {
  return `
        <main class="premium-blog-page">
          <article class="blog-article">
            <div class="premium-shell">
              <header>
                <span>${escapeHtml(new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }))}</span>
                <h1>${escapeHtml(title.replace(' | EVOX India', ''))}</h1>
                <p>${escapeHtml(description)}</p>
              </header>
              ${pageImage !== image ? `<img class="blog-featured-image" src="${escapeHtml(pageImage)}" alt="${escapeHtml(title)}" />` : ''}
              <div class="blog-content">${sanitizeHtml(post.content?.rendered || '')}</div>
            </div>
          </article>
        </main>`;
}

function buildBlogFallback(posts) {
  const cards = posts.slice(0, 12).map((post) => {
    const route = `/blog/${post.slug}`;
    const title = stripHtml(post.title?.rendered || 'Blog post');
    const excerpt = stripHtml(post.excerpt?.rendered || post.content?.rendered || '').slice(0, 180);
    const pageImage = getFeaturedImage(post);
    const date = new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    return `
              <article class="blog-card">
                <a href="${escapeHtml(route)}">
                  <div class="blog-card-image">
                    ${pageImage !== image ? `<img src="${escapeHtml(pageImage)}" alt="${escapeHtml(title)}" />` : '<span>EVOX</span>'}
                  </div>
                  <div class="blog-card-copy">
                    <span>${escapeHtml(date)}</span>
                    <h2>${escapeHtml(title)}</h2>
                    <p>${escapeHtml(excerpt)}</p>
                    <strong>Read article</strong>
                  </div>
                </a>
              </article>`;
  }).join('');

  return `
        <main class="premium-blog-page">
          <section class="blog-hero">
            <div class="premium-shell">
              <p class="premium-kicker">EVOX Journal</p>
              <h1>Ideas for safer, sharper field operations.</h1>
              <p>Product guidance, industry notes and practical communication tips for teams using radios, body cameras and security equipment.</p>
            </div>
          </section>
          <section class="blog-list-section">
            <div class="premium-shell">
              <div class="blog-grid">${cards}</div>
            </div>
          </section>
        </main>`;
}

const template = await readFile('build/index.html', 'utf8');
const sitemapEntries = [];

let blogPosts = [];
try {
  blogPosts = await fetchWordPressPosts();
} catch (error) {
  console.warn(`WordPress posts were not generated: ${error.message}`);
}

for (const [route, title, description, type, changefreq, priority, productImage, productName, productCategory] of pages) {
  const head = buildHead({ route, title, description, type, productImage, productName, productCategory });
  const fallbackHtml = route === '/blog' && blogPosts.length > 0 ? buildBlogFallback(blogPosts) : '';
  await writeRoute(template, route, head, fallbackHtml);
  sitemapEntries.push({ route, lastmod: new Date().toISOString().slice(0, 10), changefreq, priority });
}

for (const post of blogPosts) {
  const route = `/blog/${post.slug}`;
  const postTitle = stripHtml(post.title?.rendered || 'Blog post');
  const title = `${postTitle} | EVOX India`;
  const description = stripHtml(post.excerpt?.rendered || post.content?.rendered || '').slice(0, 155);
  const pageImage = getFeaturedImage(post);
  const article = { date: post.date, modified: post.modified, image: pageImage };
  const head = buildHead({ route, title, description, type: 'article', pageImage, article });
  const fallbackHtml = buildArticleFallback(post, title, description, route, pageImage);

  await writeRoute(template, route, head, fallbackHtml);
  sitemapEntries.push({
    route,
    lastmod: (post.modified || post.date || new Date().toISOString()).slice(0, 10),
    changefreq: 'monthly',
    priority: '0.7',
  });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(({ route, lastmod, changefreq, priority }) => `  <url><loc>${getCanonical(route)}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`).join('\n')}
</urlset>
`;

await writeFile('build/sitemap.xml', sitemap);

console.log(`Generated static SEO metadata for ${pages.length} routes and ${blogPosts.length} WordPress posts.`);
