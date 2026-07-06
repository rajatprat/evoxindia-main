export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-[#0a0a0a]">
      <div className="max-w-[1200px] w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-[120px] font-light tracking-tight leading-[0.95]">
            Security.<br/>Simplified.
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto font-light">
            Professional CCTV systems for homes and businesses across India
          </p>
          <div className="pt-8">
            <button className="px-8 py-4 border border-white/20 text-white rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300">
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}