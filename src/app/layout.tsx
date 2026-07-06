import type { Metadata } from 'next';
import { GoogleAnalytics } from '../components/GoogleAnalytics';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://evoxindia.in'),
  title: {
    default: 'Professional Radios & Body Cameras | EVOX India',
    template: '%s | EVOX India',
  },
  description:
    'Explore EVOX professional radios, body cameras and security equipment for dependable communication and documentation across demanding operations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <form name="contact" method="POST" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" />
          <input name="email" type="email" />
          <input name="subject" />
          <textarea name="message" />
        </form>
        <form name="quote" method="POST" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="quote" />
          <input name="fullName" />
          <input name="email" type="email" />
          <input name="phone" />
          <input name="company" />
          <input name="city" />
          <input name="products" />
          <input name="quantity" />
          <textarea name="message" />
        </form>
        <form name="home-contact" method="POST" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="home-contact" />
          <input name="name" />
          <input name="email" type="email" />
          <textarea name="message" />
        </form>
        <form name="newsletter" method="POST" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="newsletter" />
          <input name="email" type="email" />
        </form>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
