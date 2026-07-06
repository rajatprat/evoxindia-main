import { PremiumProductDetail } from '../components/PremiumPages';
import image from '../assets/x10.png';

export function ProductDetailPageX10() {
  return <PremiumProductDetail config={{
    name: 'X10',
    slug: 'x10',
    type: 'Rugged Radio',
    eyebrow: 'License-free PMR446 radio',
    statement: 'Clearer voice. Tougher build. Ready for the shift.',
    description: 'A durable license-free handheld radio with AI noise reduction, a strong integrated flashlight and straightforward controls for professional teams.',
    image,
    tone: 'obsidian',
    seoImage: 'https://evoxindia.in/images/x10.png',
    quickSpecs: [['3500mAh', 'Battery'], ['16', 'Channels'], ['PMR446', 'License-free']],
    features: [
      'AI noise reduction for clearer communication',
      'Strong integrated flashlight for low-light work',
      'VOX hands-free voice operation',
      'Channel scan and English voice prompts',
      'Power-saving mode and low-voltage alert',
      'Frequency hopping and scrambling support',
      'CTCSS and DCS analogue/digital sub-audio',
      'USB-C direct charging support',
    ],
    specs: [
      ['Frequency range', 'PMR446'],
      ['Channel capacity', '16'],
      ['Channel spacing', '25kHz / 12.5kHz'],
      ['Battery', '3500mAh Li-ion'],
      ['Working voltage', 'DC 4.2V'],
      ['Rated audio power', '500mW'],
      ['Working temperature', '-20°C to +50°C'],
      ['Weight', '231g'],
      ['Dimensions', '110 × 59 × 38mm'],
    ],
  }} />;
}
