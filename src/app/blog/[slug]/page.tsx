import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { PremiumFooter } from '../../../components/PremiumFooter';
import {
  getPostBySlug,
  getPostDescription,
  getPostImage,
  getPosts,
  getPostSitemapEntries,
  sanitizeHtml,
  SITE_URL,
  stripHtml,
} from '../../../lib/wordpress-server';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 300;
export const dynamicParams = true;

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

export async function generateStaticParams() {
  const posts = await getPostSitemapEntries(12);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = stripHtml(post.title.rendered);
  const description = getPostDescription(post);
  const image = getPostImage(post);
  const canonical = `${SITE_URL}/blog/${slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | EVOX India`,
      description,
      url: canonical,
      siteName: 'EVOX India',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | EVOX India`,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const title = stripHtml(post.title.rendered);
  const description = getPostDescription(post);
  const image = getPostImage(post);
  const canonical = `${SITE_URL}/blog/${slug}`;
  const relatedPosts = (await getPosts(6))
    .filter((relatedPost) => relatedPost.slug !== slug)
    .slice(0, 3);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: post.date,
    dateModified: post.modified,
    image,
    mainEntityOfPage: canonical,
    publisher: {
      '@type': 'Organization',
      name: 'EVOX India',
      url: SITE_URL,
    },
  };

  return (
    <div className="premium-blog-page">
      <Header theme="light" />
      <main>
        <article className="blog-article">
          <div className="premium-shell">
            <Link className="blog-back" href="/blog">
              <ArrowLeft size={16} /> Blog
            </Link>

            <header>
              <span>
                <CalendarDays size={15} />
                {formatDate(post.date)}
              </span>
              <h1>{title}</h1>
              <p>{description}</p>
            </header>

            <div className="blog-article-layout">
              <div className="blog-article-main">
                {image && <img className="blog-featured-image" src={image} alt={title} />}

                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content.rendered) }}
                />
              </div>

              {relatedPosts.length > 0 && (
                <aside className="blog-sidebar" aria-label="More articles">
                  <span>More articles</span>
                  {relatedPosts.map((relatedPost) => {
                    const relatedTitle = stripHtml(relatedPost.title.rendered);

                    return (
                      <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                        <img src={getPostImage(relatedPost)} alt={relatedTitle} />
                        <strong>{relatedTitle}</strong>
                        <small>{formatDate(relatedPost.date)}</small>
                      </Link>
                    );
                  })}
                </aside>
              )}
            </div>

            {relatedPosts.length > 0 && (
              <section className="blog-read-next" aria-label="Read next">
                <div>
                  <span>Read next</span>
                  <h2>More EVOX insights</h2>
                </div>
                <div className="blog-read-next-grid">
                  {relatedPosts.map((relatedPost) => {
                    const relatedTitle = stripHtml(relatedPost.title.rendered);
                    const relatedDescription = getPostDescription(relatedPost, 120);

                    return (
                      <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                        <img src={getPostImage(relatedPost)} alt={relatedTitle} />
                        <strong>{relatedTitle}</strong>
                        <p>{relatedDescription}</p>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
      <PremiumFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
