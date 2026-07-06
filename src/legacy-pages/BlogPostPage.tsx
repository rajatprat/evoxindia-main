import { useEffect, useState } from 'react';
import { ArrowLeft, CalendarDays, RefreshCw } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { PremiumFooter } from '../components/PremiumFooter';
import { SEO } from '../components/SEO';
import {
  getPostBySlug,
  getPostImage,
  sanitizeWordPressHtml,
  stripHtml,
  type WordPressPost,
} from '../lib/wordpress';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

export function BlogPostPage() {
  const { slug = '' } = useParams();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getPostBySlug(slug)
      .then((result) => {
        if (!result) {
          setError('This article could not be found.');
          return;
        }
        setPost(result);
      })
      .catch(() => setError('This article is not available right now.'))
      .finally(() => setLoading(false));
  }, [slug]);

  const title = post ? stripHtml(post.title.rendered) : 'Blog | EVOX India';
  const description = post
    ? stripHtml(post.excerpt.rendered).slice(0, 155)
    : 'Read EVOX India insights on communication equipment and field operations.';
  const image = post ? getPostImage(post) : '';
  const canonical = `https://evoxindia.in/blog/${slug}`;

  return (
    <div className="premium-blog-page">
      <SEO
        title={post ? `${title} | EVOX India` : 'Blog | EVOX India'}
        description={description}
        canonicalUrl={canonical}
        ogType="article"
        ogImage={image || undefined}
        ogImageAlt={title}
        structuredData={
          post
            ? {
                '@type': 'BlogPosting',
                '@id': `${canonical}#article`,
                headline: title,
                description,
                datePublished: post.date,
                dateModified: post.modified,
                image: image || 'https://evoxindia.in/og-image.png',
                mainEntityOfPage: { '@id': `${canonical}#webpage` },
                publisher: { '@id': 'https://evoxindia.in/#organization' },
              }
            : undefined
        }
      />
      <Header theme="light" />

      <main>
        {loading && (
          <section className="blog-article-status">
            <RefreshCw size={18} />
            <span>Loading article...</span>
          </section>
        )}

        {!loading && error && (
          <section className="blog-article-status">
            <p>{error}</p>
            <button onClick={() => (window as any).navigateToBlog?.()}>
              <ArrowLeft size={16} /> Back to blog
            </button>
          </section>
        )}

        {!loading && post && (
          <>
            <article className="blog-article">
              <div className="premium-shell">
                <button className="blog-back" onClick={() => (window as any).navigateToBlog?.()}>
                  <ArrowLeft size={16} /> Blog
                </button>

                <header>
                  <span>
                    <CalendarDays size={15} />
                    {formatDate(post.date)}
                  </span>
                  <h1>{title}</h1>
                  <p>{description}</p>
                </header>

                {image && <img className="blog-featured-image" src={image} alt={title} />}

                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeWordPressHtml(post.content.rendered),
                  }}
                />
              </div>
            </article>
          </>
        )}
      </main>

      <PremiumFooter />
    </div>
  );
}
