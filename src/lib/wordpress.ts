export interface WordPressRendered {
  rendered: string;
}

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  link: string;
  title: WordPressRendered;
  excerpt: WordPressRendered;
  content: WordPressRendered;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url?: string;
      alt_text?: string;
      media_details?: {
        sizes?: Record<string, { source_url?: string }>;
      };
    }>;
  };
}

const DEFAULT_API_BASE = 'https://public-api.wordpress.com/wp/v2/sites/evoxindia.wordpress.com';
const publicEnv =
  typeof process !== 'undefined'
    ? process.env
    : ({} as Record<string, string | undefined>);
const DEMO_ENABLED = publicEnv.NEXT_PUBLIC_WORDPRESS_DEMO === 'true';

export const WORDPRESS_API_BASE = (
  publicEnv.NEXT_PUBLIC_WORDPRESS_API_BASE ||
  publicEnv.VITE_WORDPRESS_API_BASE ||
  publicEnv.VITE_WORDPRESS_SITE_URL ||
  DEFAULT_API_BASE
).replace(/\/$/, '');

const samplePosts: WordPressPost[] = [
  {
    id: 9001,
    date: '2026-06-25T09:00:00',
    modified: '2026-06-25T09:00:00',
    slug: 'best-walkie-talkie-for-security-teams',
    link: 'https://evoxindia.in/blog/best-walkie-talkie-for-security-teams',
    featured_media: 0,
    title: {
      rendered: 'Best Walkie Talkie for Security Teams in India',
    },
    excerpt: {
      rendered:
        '<p>A practical guide to choosing radios for guards, facility teams, events and field operations where speed and clarity matter.</p>',
    },
    content: {
      rendered: `
        <p>Security teams need communication that works instantly. A phone call is often too slow, and messaging apps depend on attention, signal quality and unlock screens. A professional walkie talkie keeps the team connected with one press.</p>
        <h2>What security teams should look for</h2>
        <p>The best radio for a guard team is not always the most expensive one. It should be simple to operate, loud enough for busy environments and durable enough for everyday duty.</p>
        <ul>
          <li>Clear audio for noisy entrances, malls and parking areas.</li>
          <li>Reliable battery life across long shifts.</li>
          <li>Comfortable size for belt or pocket carry.</li>
          <li>Quick push-to-talk operation with minimal training.</li>
        </ul>
        <h2>Why PMR446 radios are useful</h2>
        <p>License-free PMR446 radios are a strong fit for many businesses because they are easy to deploy for internal team coordination. They work especially well for hotels, construction sites, warehouses, schools, events and retail spaces.</p>
        <blockquote>For most teams, the winning radio is the one staff will actually carry, charge and use correctly every day.</blockquote>
        <h2>Recommended setup</h2>
        <p>Start by mapping your site into zones. Give supervisors a slightly higher-capacity device and keep compact radios for mobile staff. For large premises, test coverage during a real working shift before scaling.</p>
        <h3>Where EVOX can help</h3>
        <p>EVOX radios are built for practical business use, with straightforward controls and dependable field performance. If you are choosing devices for a team, request a quote and share your site size, number of users and duty hours.</p>
      `,
    },
  },
  {
    id: 9002,
    date: '2026-06-18T10:30:00',
    modified: '2026-06-18T10:30:00',
    slug: 'body-camera-buying-guide',
    link: 'https://evoxindia.in/blog/body-camera-buying-guide',
    featured_media: 0,
    title: {
      rendered: 'Body Camera Buying Guide for Security and Field Staff',
    },
    excerpt: {
      rendered:
        '<p>How to compare recording quality, battery life, night vision and storage before buying body cameras for operational teams.</p>',
    },
    content: {
      rendered: `
        <p>A body camera helps teams document interactions, improve accountability and review incidents with more clarity. The right choice depends on where the camera will be used and how long each shift lasts.</p>
        <h2>Core features to compare</h2>
        <p>Before comparing models, decide whether your team needs occasional recording or continuous shift documentation.</p>
        <ul>
          <li>HD video quality with stable low-light performance.</li>
          <li>Battery capacity that matches duty hours.</li>
          <li>Secure storage and simple file transfer.</li>
          <li>Comfortable mounting for uniforms or jackets.</li>
        </ul>
        <h2>When night vision matters</h2>
        <p>For parking, perimeter checks, late-night events and enforcement roles, infrared support can make footage more useful after dark.</p>
        <h2>Final buying advice</h2>
        <p>Run a small pilot before buying in bulk. Give devices to actual users for a few shifts and review comfort, footage clarity, charging routine and file handling.</p>
      `,
    },
  },
  {
    id: 9003,
    date: '2026-06-10T11:15:00',
    modified: '2026-06-10T11:15:00',
    slug: 'walkie-talkie-vs-mobile-phone',
    link: 'https://evoxindia.in/blog/walkie-talkie-vs-mobile-phone',
    featured_media: 0,
    title: {
      rendered: 'Walkie Talkie vs Mobile Phone for Field Teams',
    },
    excerpt: {
      rendered:
        '<p>Phones are powerful, but radios still win for instant team coordination in many operational environments.</p>',
    },
    content: {
      rendered: `
        <p>Mobile phones are excellent for detailed conversations, documents and customer communication. Walkie talkies are built for a different job: fast group coordination.</p>
        <h2>Where radios win</h2>
        <p>A radio lets one person speak to the whole team instantly. There is no dialing, no waiting for someone to answer and no app notification delay.</p>
        <h2>Where phones win</h2>
        <p>Phones are better for private calls, photos, maps, documents and long-distance communication. Most strong teams use both tools for different tasks.</p>
        <h2>Best practical setup</h2>
        <p>Use radios for live operations and phones for reporting, escalation and management communication.</p>
      `,
    },
  },
];

export function stripHtml(html = '') {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

export function sanitizeWordPressHtml(html = '') {
  if (typeof window === 'undefined') return html;

  const doc = new DOMParser().parseFromString(html, 'text/html');
  doc.querySelectorAll('script, iframe, object, embed, form').forEach((node) => node.remove());
  doc.body.querySelectorAll('*').forEach((node) => {
    [...node.attributes].forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      const value = attribute.value.trim().toLowerCase();
      if (name.startsWith('on') || value.startsWith('javascript:')) {
        node.removeAttribute(attribute.name);
      }
    });
  });

  return doc.body.innerHTML;
}

export function getPostImage(post: WordPressPost) {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  return (
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.medium_large?.source_url ||
    media?.source_url ||
    ''
  );
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`WordPress request failed: ${response.status}`);
  }
  return response.json();
}

export async function getPosts(limit = 12) {
  if (DEMO_ENABLED) return samplePosts.slice(0, limit);

  const params = new URLSearchParams({
    per_page: String(limit),
    _embed: '1',
    status: 'publish',
  });

  return fetchJson<WordPressPost[]>(`${WORDPRESS_API_BASE}/posts?${params}`);
}

export async function getPostBySlug(slug: string) {
  if (DEMO_ENABLED) return samplePosts.find((post) => post.slug === slug) || null;

  const params = new URLSearchParams({
    slug,
    _embed: '1',
    status: 'publish',
  });

  const posts = await fetchJson<WordPressPost[]>(`${WORDPRESS_API_BASE}/posts?${params}`);
  return posts[0] || null;
}
