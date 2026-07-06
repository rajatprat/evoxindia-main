import { ArrowRight, Phone, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-red-600 animate-gradient"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-white font-semibold">Ready to Get Started?</span>
          </div>

          {/* Title */}
          <h2 className="text-white mb-6">
            Experience the Future of Communication
          </h2>
          
          {/* Description */}
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join thousands of professionals who trust EVOX for their communication needs. 
            Get in touch with our team today and discover the perfect solution for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="group px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold shadow-2xl hover:shadow-white/50 transition-all hover:scale-105 inline-flex items-center gap-3"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919990696931"
              className="px-10 py-5 bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 rounded-2xl font-bold hover:bg-white/20 transition-all hover:scale-105 inline-flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+91-9990696931</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span className="font-medium">sales@evoxindia.in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
