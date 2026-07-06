import { PremiumProductDetail } from '../components/PremiumPages';
import image from '../assets/x1-pro.png';

export function ProductDetailPage() {
  return <PremiumProductDetail config={{
    name: 'X1 Pro',
    slug: 'x1-pro',
    type: 'Professional Radio',
    eyebrow: 'License-free professional radio',
    statement: 'Clear communication. Even when the world gets loud.',
    description: 'A rugged PMR 446 professional radio designed for dependable, straightforward communication across demanding shifts.',
    image,
    tone: 'obsidian',
    seoImage: 'https://evoxindia.in/images/x1-pro.png',
    quickSpecs: [['4500mAh', 'Battery'], ['16', 'Channels'], ['PMR 446', 'License-free']],
    features: ['Rugged design with confident grip', 'Battery-saving mode and low-battery prompt', 'VOX hands-free activation', 'Wide and narrow bandwidth selection', 'Busy-channel lock and scan', 'Clear voice prompts and squelch control'],
    specs: [['Frequency range', 'PMR 446'], ['Operating voltage', 'DC 7.4V'], ['Channel capacity', '16'], ['Output power', '0.5W'], ['Audio output', '>500mW'], ['Frequency stability', '±5ppm']],
  }} />;
}
