import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import { Header } from '../../components/Header';
import { PremiumFooter } from '../../components/PremiumFooter';
import {
  getPostDescription,
  getPostImage,
  getPosts,
  SITE_URL,
  stripHtml,
} from '../../lib/wordpress-server';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read EVOX India insights on professional radios, body cameras, security communication, field operations and equipment selection.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog | EVOX India',
    description:
      'Read EVOX India insights on professional radios, body cameras, security communication, field operations and equipment selection.',
    url: `${SITE_URL}/blog`,
    siteName: 'EVOX India',
    type: 'website',
  },
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));

export default async function BlogPage() {
  const posts = await getPosts(12);

  return (
    <div className="premium-blog-page">
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
            {posts.length === 0 && <div className="blog-status">No posts have been published yet.</div>}
            <div className="blog-grid">
              {posts.map((post) => {
                const image = getPostImage(post);
                const title = stripHtml(post.title.rendered);
                const excerpt = getPostDescription(post, 180);

                return (
                  <article className="blog-card" key={post.id}>
                    <Link href={`/blog/${post.slug}`}>
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
                        <strong>Read article</strong>
                      </div>
                    </Link>
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
