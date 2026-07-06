import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    name: 'X-1 Ultra',
    description: 'Premium 4K AI Camera',
    image: 'https://images.unsplash.com/photo-1599350686877-382a54114d2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHByb2R1Y3QlMjBzaG90fGVufDF8fHx8MTc2NDA3Njk2OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'X1 Mini',
    description: 'Compact Security',
    image: 'https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjY3R2JTIwc3lzdGVtfGVufDF8fHx8MTc2NDA3Njk3MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'XC-19 Camera',
    description: 'All-Weather Pro',
    image: 'https://images.unsplash.com/photo-1760638346074-e65e53d31e78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZWlsbGFuY2UlMjBlcXVpcG1lbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0MDc2OTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'EVOX X1 Pro',
    description: 'Professional System',
    image: 'https://images.unsplash.com/photo-1552502064-a188252d86d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHRlY2hub2xvZ3klMjBtaW5pbWFsfGVufDF8fHx8MTc2NDA3Njk3MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function FeaturedProducts() {
  return (
    <section id="products" className="py-32 px-6 bg-black border-t border-white/10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-5xl md:text-7xl font-light mb-24 tracking-tight">Products</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-neutral-900 rounded-2xl overflow-hidden mb-6">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-medium">{product.name}</h3>
                <p className="text-neutral-500 font-light">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}