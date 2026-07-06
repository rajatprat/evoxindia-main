import { PremiumProductDetail } from '../components/PremiumPages';
import image from '../assets/xc19.png';

export function ProductDetailPageXC19() {
  return <PremiumProductDetail config={{
    name: 'XC-19',
    slug: 'xc-19',
    type: 'Security Camera',
    eyebrow: 'Compact visual intelligence',
    statement: 'Professional visibility. Without the bulk.',
    description: 'A compact security camera created for reliable documentation, flexible mounting and enhanced low-light recording.',
    image,
    tone: 'slate',
    seoImage: 'https://evoxindia.in/images/xc19.png',
    quickSpecs: [['HD', 'Recording'], ['Wide', 'Field of view'], ['Low light', 'Enhanced']],
    features: ['High-definition video capture', 'Wide-angle viewing', 'Enhanced low-light sensor', 'Loop recording support', 'Compact, discreet construction', 'Multiple mounting options'],
    specs: [['Resolution', 'HD 720p / 1080p'], ['Lens', 'Wide angle'], ['Recording', 'Loop recording'], ['Low light', 'Enhanced sensor'], ['Construction', 'Durable body'], ['Mounting', 'Multiple options']],
  }} />;
}
