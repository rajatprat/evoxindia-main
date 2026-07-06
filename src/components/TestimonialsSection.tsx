import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sachin Desai',
    text: "I'm impressed with the compact design and features of EVOX X1mini. Great for everyday use.",
    rating: 5,
    role: 'Professional User',
    gradient: 'from-red-600 to-orange-600',
  },
  {
    id: 2,
    name: 'John Doe',
    text: 'Outstanding product quality and exceptional customer service. EVOX has set a new standard in communication devices.',
    rating: 5,
    role: 'Satisfied Customer',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    text: 'Outstanding communication quality and battery life. The EVOX products have exceeded my expectations.',
    rating: 5,
    role: 'Field Engineer',
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    id: 4,
    name: 'Rahul Kumar',
    text: 'Reliable and durable equipment. Perfect for our security team operations. Highly recommended!',
    rating: 5,
    role: 'Security Manager',
    gradient: 'from-purple-600 to-pink-600',
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border border-purple-100 dark:border-purple-900 rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hear from professionals who trust EVOX for their communication needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="group relative bg-white dark:bg-gray-900 rounded-3xl p-10 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:scale-105"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px]`}>
                <div className="bg-white dark:bg-gray-900 h-full w-full rounded-3xl"></div>
              </div>

              <div className="relative">
                {/* Floating Gradient Orb */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-500 rounded-full`}></div>

                {/* Quote Icon */}
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${testimonial.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
