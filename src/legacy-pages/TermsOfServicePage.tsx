import { PremiumLegalPage, type LegalSection } from '../components/PremiumPages';

const sections: LegalSection[] = [
  {
    title: 'Agreement to Terms',
    paragraphs: [
      'These Terms of Service ("Terms") are a legally binding agreement between you and EVOX India ("Company", "we", "us", or "our") concerning your access to evoxindia.in and your purchase of our products.',
      'By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of them, you must not use the website or purchase our products.',
    ],
  },
  {
    title: 'Products and Services',
    paragraphs: [
      'We make every effort to display our body cameras, walkie-talkies, and communication devices accurately. We do not warrant that descriptions, colours, specifications, or other website content are complete, reliable, current, or error-free.',
      'All prices are listed in Indian Rupees (INR) and may change without notice. Stock information may also change, and we may discontinue products or limit quantities at any time.',
    ],
    bullets: [
      'We may modify prices before accepting an order',
      'We may correct pricing errors after an order has been placed',
      'Different prices may be offered to different customers or market segments',
    ],
  },
  {
    title: 'Orders and Payments',
    paragraphs: [
      'All orders are subject to acceptance by EVOX India. We may refuse or cancel an order because of product availability, pricing or product-information errors, suspected fraud, or other reasonable grounds.',
      'Quotes issued through our Get Quote system are valid for 30 days unless otherwise stated. Prices may change after that period.',
    ],
    bullets: [
      'Full payment is required before processing unless otherwise agreed',
      'We accept bank transfers, online payments, and other specified methods',
      'Credit terms may be available for approved business customers',
      'Applicable taxes and shipping charges are added to the order total',
    ],
  },
  {
    title: 'Shipping and Delivery',
    paragraphs: [
      'Delivery times are estimates and are not guaranteed. We are not liable for carrier delays or circumstances outside our control. Risk of loss and title pass to you upon delivery to the carrier.',
    ],
    bullets: [
      'You are responsible for providing accurate shipping information',
      'We are not liable for delays or non-delivery caused by incorrect addresses',
      'Additional charges may apply for expedited or remote-location delivery',
    ],
  },
  {
    title: 'Returns and Refunds',
    paragraphs: [
      'We accept eligible returns within seven days of delivery. Products must be unused, undamaged, and returned in their original packaging with all accessories and documentation. Customised or specially ordered products are non-returnable, and a 10–15% restocking fee may apply.',
      'After receiving and inspecting an eligible return, we will process the refund to the original payment method within 7–10 business days. Shipping charges are non-refundable unless the return is due to our error.',
      'If a product arrives damaged or defective, contact us within 48 hours with photographs. We will arrange a replacement or full refund at no additional cost.',
    ],
  },
  {
    title: 'Warranty',
    paragraphs: [
      'EVOX products include a standard one-year manufacturer warranty covering defects in materials and workmanship.',
    ],
    bullets: [
      'The warranty does not cover misuse, abuse, or accidents',
      'Normal wear and tear is excluded',
      'Unauthorised repairs or modifications are excluded',
      'Damage caused by improper storage or environmental factors is excluded',
      'Loss or theft is excluded',
    ],
  },
  {
    title: 'Intellectual Property Rights',
    paragraphs: [
      'All website content—including text, graphics, logos, images, product descriptions, and software—is the property of EVOX India and is protected by Indian and international intellectual-property laws.',
      'You may not reproduce, distribute, modify, publicly display, create derivative works from, or otherwise exploit our content without express written permission.',
    ],
  },
  {
    title: 'Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by law, EVOX India is not liable for indirect, incidental, special, consequential, or punitive damages; loss of profits or revenue; or loss of data, use, goodwill, or other intangible losses arising from your use of the website or products.',
      'Our total liability for claims arising from or related to these Terms will not exceed the amount you paid for the products concerned.',
    ],
    bullets: [
      'Use of, or inability to use, our website or products',
      'Unauthorised access to our servers or stored personal information',
      'Bugs, viruses, or similar harmful material transmitted through the website',
      'Errors or omissions in content, or loss caused by reliance on that content',
    ],
  },
  {
    title: 'Governing Law and Jurisdiction',
    paragraphs: [
      'These Terms are governed by the laws of India, without regard to conflict-of-law provisions. Disputes arising from these Terms are subject to the exclusive jurisdiction of the courts located in Delhi/Mumbai, India.',
    ],
  },
  {
    title: 'Changes to Terms',
    paragraphs: [
      'We may modify these Terms at any time. Changes take effect immediately when posted. Continuing to use the website after changes are posted constitutes acceptance of the modified Terms, so we recommend reviewing this page periodically.',
    ],
  },
  {
    title: 'Contact Us',
    paragraphs: [
      'For questions about these Terms, email evoxindia@gmail.com or call +91 99906 96931 / +91 97170 67092.',
      'EVOX India — Delhi & Mumbai, India.',
    ],
  },
];

export function TermsOfServicePage() {
  return (
    <PremiumLegalPage
      title="Terms of Service"
      eyebrow="Legal terms"
      description="The terms governing use of our website, products, orders, delivery, returns and warranty."
      updated="December 24, 2024"
      canonicalUrl="https://evoxindia.in/terms-of-service"
      sections={sections}
    />
  );
}
