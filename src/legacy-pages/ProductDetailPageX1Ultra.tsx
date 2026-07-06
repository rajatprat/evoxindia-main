import { PremiumProductDetail } from '../components/PremiumPages';
import image from '../assets/evox-ultra.png';

export function ProductDetailPageX1Ultra() {
  return <PremiumProductDetail config={{
    name: 'EVOX Ultra',
    slug: 'x1-ultra',
    type: 'Rugged Radio',
    eyebrow: 'Built for extreme conditions',
    statement: 'Engineered for the places that test everything.',
    description: 'A high-endurance professional radio combining rugged construction, long battery life and flexible voice operation.',
    image,
    tone: 'signal',
    seoImage: 'https://evoxindia.in/images/evox-ultra.png',
    quickSpecs: [['4500mAh', 'Battery'], ['IP67', 'Protection'], ['VOX', 'Ready']],
    features: ['Rugged field-ready enclosure', 'Water and dust resistance', 'Voice-activated operation', 'Wide and narrow selectable bandwidth', 'High-capacity lithium-ion battery', 'Shock-resistant construction'],
    specs: [['Battery', '4500mAh Li-ion'], ['Protection', 'IP67'], ['Voice operation', 'VOX'], ['Bandwidth', 'Wide / Narrow'], ['Construction', 'Military-grade'], ['Operation', 'Simplex']],
  }} />;
}
