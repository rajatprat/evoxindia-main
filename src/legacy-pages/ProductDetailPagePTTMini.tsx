import { PremiumProductDetail } from '../components/PremiumPages';
import image from '../assets/ptt-super-mini.png';

export function ProductDetailPagePTTMini() {
  return <PremiumProductDetail config={{
    name: 'PTT Super Mini',
    slug: 'ptt-super-mini',
    type: 'Compact Radio',
    eyebrow: 'Ultra-compact FM transceiver',
    statement: 'Less to carry. Nothing to miss.',
    description: 'A lightweight push-to-talk radio built for retail, events, hospitality and teams that need instant communication.',
    image,
    tone: 'sand',
    seoImage: 'https://evoxindia.in/images/ptt-super-mini.png',
    quickSpecs: [['20', 'Channels'], ['95g', 'Weight'], ['0.5W', 'Output']],
    features: ['Ultra-compact 95g construction', 'Instant push-to-talk operation', 'Twenty memory channels', 'Five-level volume adjustment', 'License-free PMR 446 operation', 'Ideal for discreet professional use'],
    specs: [['Frequency', 'PMR 446 MHz'], ['Channels', '20 memory'], ['Output power', '0.5W'], ['Weight', '95g'], ['Dimensions', '81 × 18 × 15 mm'], ['Volume', '5-level adjustment']],
  }} />;
}
