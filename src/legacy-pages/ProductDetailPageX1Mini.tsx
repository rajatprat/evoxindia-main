import { PremiumProductDetail } from '../components/PremiumPages';
import image from '../assets/x1-mini.png';

export function ProductDetailPageX1Mini() {
  return <PremiumProductDetail config={{
    name: 'X1 Mini',
    slug: 'x1-mini',
    type: 'Body Camera',
    eyebrow: 'Compact professional body camera',
    statement: 'A compact witness. Ready for every shift.',
    description: 'Wearable HD documentation with infrared night vision, motion detection and dependable all-day battery performance.',
    image,
    tone: 'porcelain',
    seoImage: 'https://evoxindia.in/images/x1-mini.png',
    quickSpecs: [['1080p', 'Video'], ['16 hrs', 'Battery'], ['IR', 'Night vision']],
    features: ['Full HD video recording', 'Infrared low-light visibility', 'Motion detection support', 'Compact wearable construction', 'Extended continuous operation', 'Simple field-ready controls'],
    specs: [['Video quality', 'Full HD 1080p'], ['Battery life', 'Up to 16 hours'], ['Storage', 'Up to 128GB'], ['Night vision', 'Infrared LED'], ['Motion detection', 'Supported'], ['Construction', 'Rugged wearable']],
  }} />;
}
