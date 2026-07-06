import 'server-only';

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
const WORDPRESS_API_BASE = (
  process.env.WORDPRESS_API_BASE ||
  process.env.NEXT_PUBLIC_WORDPRESS_API_BASE ||
  process.env.VITE_WORDPRESS_API_BASE ||
  DEFAULT_API_BASE
).replace(/\/$/, '');

export const SITE_URL = (process.env.SITE_URL || process.env.URL || 'https://evoxindia.in').replace(/\/$/, '');
export const BLOG_REVALIDATE_SECONDS = Number(process.env.BLOG_REVALIDATE_SECONDS || 21600);

export function stripHtml(html = '') {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

export function sanitizeHtml(html = '') {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/<object[\s\S]*?<\/object>/gi, '')
    .replace(/<embed[\s\S]*?>/gi, '')
    .replace(/\son\w+="[^"]*"/gi, '')
    .replace(/\son\w+='[^']*'/gi, '')
    .replace(/javascript:/gi, '');
}

export function getPostImage(post: WordPressPost) {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  return (
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.medium_large?.source_url ||
    media?.source_url ||
    `${SITE_URL}/og-image.png`
  );
}

export function getPostDescription(post: WordPressPost, length = 155) {
  return stripHtml(post.excerpt?.rendered || post.content?.rendered || '').slice(0, length);
}

async function fetchWordPress<T>(path: string, params: Record<string, string> = {}) {
  const search = new URLSearchParams({
    _embed: '1',
    status: 'publish',
    ...params,
  });
  const response = await fetch(`${WORDPRESS_API_BASE}${path}?${search}`, {
    next: { revalidate: BLOG_REVALIDATE_SECONDS, tags: ['wordpress-posts'] },
  });

  if (!response.ok) {
    throw new Error(`WordPress request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getPosts(limit = 12) {
  return fetchWordPress<WordPressPost[]>('/posts', { per_page: String(limit) });
}

export async function getPostSitemapEntries(limit = 50) {
  const search = new URLSearchParams({
    status: 'publish',
    per_page: String(limit),
    _fields: 'id,slug,date,modified',
  });
  const response = await fetch(`${WORDPRESS_API_BASE}/posts?${search}`, {
    next: { revalidate: BLOG_REVALIDATE_SECONDS, tags: ['wordpress-posts'] },
  });

  if (!response.ok) {
    throw new Error(`WordPress request failed: ${response.status}`);
  }

  return response.json() as Promise<Array<Pick<WordPressPost, 'id' | 'slug' | 'date' | 'modified'>>>;
}

export async function getPostBySlug(slug: string) {
  const posts = await fetchWordPress<WordPressPost[]>('/posts', { slug, per_page: '1' });
  return posts[0] || null;
}
