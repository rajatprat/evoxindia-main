import type { MetadataRoute } from 'next';
import { getPostSitemapEntries, SITE_URL } from '../lib/wordpress-server';

export const revalidate = 300;

const staticRoutes = [
  ['', 'weekly', 1],
  ['/products', 'weekly', 0.9],
  ['/products/x1-pro', 'monthly', 0.8],
  ['/products/x1-mini', 'monthly', 0.8],
  ['/products/x1-ultra', 'monthly', 0.8],
  ['/products/xc-19', 'monthly', 0.8],
  ['/products/ptt-super-mini', 'monthly', 0.8],
  ['/products/x10', 'monthly', 0.8],
  ['/industries', 'monthly', 0.8],
  ['/blog', 'weekly', 0.8],
  ['/about', 'monthly', 0.7],
  ['/contact', 'monthly', 0.7],
  ['/get-quote', 'monthly', 0.7],
  ['/faq', 'monthly', 0.7],
  ['/testimonials', 'monthly', 0.6],
  ['/privacy-policy', 'yearly', 0.3],
  ['/terms-of-service', 'yearly', 0.3],
  ['/cookie-policy', 'yearly', 0.3],
  ['/sitemap', 'monthly', 0.2],
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostSitemapEntries(50);
  const now = new Date();

  return [
    ...staticRoutes.map(([route, changeFrequency, priority]) => ({
      url: `${SITE_URL}${route || '/'}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.modified || post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
