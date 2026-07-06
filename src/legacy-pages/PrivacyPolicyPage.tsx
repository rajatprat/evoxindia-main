import { PremiumLegalPage, type LegalSection } from '../components/PremiumPages';

const sections: LegalSection[] = [
  {
    title: 'Introduction',
    paragraphs: [
      'Welcome to EVOX India ("we", "our", or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit evoxindia.in or make purchases from us. Please read this policy carefully. If you do not agree with its terms, please do not access the site.',
    ],
  },
  {
    title: 'Information We Collect',
    paragraphs: [
      'We may collect personal information that you voluntarily provide when you register on the website, complete a contact form, request a quote, make a purchase, subscribe to our newsletter, or participate in a survey or promotion. This may include your name, email address, phone number, postal address, company name, job title, and payment information.',
      'When you visit our website, we may automatically collect information about your device and activity, including your browser, IP address, time zone, installed cookies, browsing behaviour, and interactions with the website.',
    ],
    bullets: [
      'Website registrations and contact form submissions',
      'Quote and product information requests',
      'Purchases and orders',
      'Newsletter subscriptions',
      'Survey and promotion participation',
    ],
  },
  {
    title: 'How We Use Your Information',
    paragraphs: ['We use the information we collect or receive to operate our business and serve you.'],
    bullets: [
      'Process transactions, fulfil orders, process payments, and deliver products',
      'Respond to questions, provide customer support, and handle quote requests',
      'Send newsletters, promotional material, and product updates with your consent',
      'Analyse usage patterns and improve the website experience',
      'Monitor and protect against fraudulent transactions and activity',
      'Meet regulatory obligations and respond to lawful requests',
    ],
  },
  {
    title: 'Information Sharing and Disclosure',
    paragraphs: [
      'We do not sell, rent, or trade your personal information to third parties for marketing purposes. We may share information only where it is necessary to provide our services, complete a business transaction, comply with law, protect our rights and safety, or where you have given explicit consent.',
    ],
    bullets: [
      'Service providers such as payment processors, shipping companies, and email providers',
      'Business transfers connected with a merger, asset sale, or acquisition',
      'Legal requirements and requests needed to protect our rights and safety',
      'Other disclosures made with your explicit consent',
    ],
  },
  {
    title: 'Data Security',
    paragraphs: [
      'We implement appropriate technical and organisational measures to protect personal information against unauthorised access, alteration, disclosure, or destruction.',
      'No method of internet transmission or electronic storage is completely secure. While we work to protect your personal information, we cannot guarantee absolute security.',
    ],
    bullets: [
      'Encryption of sensitive data during transmission',
      'Regular security assessments and updates',
      'Access limited to authorised personnel',
      'Secure storage on protected servers',
    ],
  },
  {
    title: 'Your Privacy Rights',
    paragraphs: [
      'Subject to applicable law, you may exercise the following rights by contacting us using the details below.',
    ],
    bullets: [
      'Access: request a copy of the personal information we hold about you',
      'Correction: request correction of inaccurate or incomplete information',
      'Deletion: request deletion of personal information, subject to legal obligations',
      'Opt-out: unsubscribe from marketing communications at any time',
      'Portability: request transfer of your data to another service provider',
      'Object: object to processing in certain circumstances',
    ],
  },
  {
    title: 'Cookies and Tracking',
    paragraphs: [
      'We use cookies and similar technologies to track website activity and store certain information. You can instruct your browser to refuse cookies or notify you when a cookie is being sent. Please see our Cookie Policy for more detailed information.',
    ],
  },
  {
    title: 'Third-Party Links',
    paragraphs: [
      'Our website may contain links to third-party websites. We are not responsible for their privacy practices or content, and encourage you to review the privacy policies of any external sites you visit.',
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      'Our website is not intended for children under 18, and we do not knowingly collect personal information from children. If you are a parent or guardian and believe a child has provided information to us, please contact us so we can delete it.',
    ],
  },
  {
    title: 'Changes to This Privacy Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated “Last updated” date and will take effect when posted. We recommend reviewing this page periodically.',
    ],
  },
  {
    title: 'Contact Us',
    paragraphs: [
      'For questions about this Privacy Policy or our privacy practices, email evoxindia@gmail.com or call +91 99906 96931 / +91 97170 67092.',
      'EVOX India — Delhi & Mumbai, India.',
    ],
  },
];

export function PrivacyPolicyPage() {
  return (
    <PremiumLegalPage
      title="Privacy Policy"
      eyebrow="Your privacy matters"
      description="How EVOX India collects, uses, protects and manages your personal information."
      updated="December 24, 2024"
      canonicalUrl="https://evoxindia.in/privacy-policy"
      sections={sections}
    />
  );
}
