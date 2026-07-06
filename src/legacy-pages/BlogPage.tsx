import { useEffect, useState } from 'react';
import { ArrowRight, CalendarDays, RefreshCw } from 'lucide-react';
import { Header } from '../components/Header';
import { PremiumFooter } from '../components/PremiumFooter';
import { SEO } from '../components/SEO';
import { getPostImage, getPosts, stripHtml, type WordPressPost } from '../lib/wordpress';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));

export function BlogPage() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getPosts(12)
      .then(setPosts)
      .catch(() => setError('Blog posts are not available right now.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="premium-blog-page">
      <SEO
        title="Blog | EVOX India"
        description="Read EVOX India insights on professional radios, body cameras, security communication, field operations and equipment selection."
        canonicalUrl="https://evoxindia.in/blog"
      />
      <Header theme="light" />

      <main>
        <section className="blog-hero">
          <div className="premium-shell">
            <p className="premium-kicker">EVOX Journal</p>
            <h1>Ideas for safer, sharper field operations.</h1>
            <p>
              Product guidance, industry notes and practical communication tips for teams
              using radios, body cameras and security equipment.
            </p>
          </div>
        </section>

        <section className="blog-list-section">
          <div className="premium-shell">
            {loading && (
              <div className="blog-status">
                <RefreshCw size={18} />
                <span>Loading latest posts...</span>
              </div>
            )}

            {!loading && error && <div className="blog-status">{error}</div>}

            {!loading && !error && posts.length === 0 && (
              <div className="blog-status">No posts have been published yet.</div>
            )}

            <div className="blog-grid">
              {posts.map((post) => {
                const image = getPostImage(post);
                const title = stripHtml(post.title.rendered);
                const excerpt = stripHtml(post.excerpt.rendered);

                return (
                  <article className="blog-card" key={post.id}>
                    <button onClick={() => (window as any).navigateToBlogPost?.(post.slug)}>
                      <div className="blog-card-image">
                        {image ? <img src={image} alt={title} /> : <span>EVOX</span>}
                      </div>
                      <div className="blog-card-copy">
                        <span>
                          <CalendarDays size={14} />
                          {formatDate(post.date)}
                        </span>
                        <h2>{title}</h2>
                        <p>{excerpt}</p>
                        <strong>
                          Read article <ArrowRight size={16} />
                        </strong>
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <PremiumFooter />
    </div>
  );
}
