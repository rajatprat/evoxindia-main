import { Building2, Eye, Target, Sparkles } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50 border border-orange-100 dark:border-orange-900 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-orange-600 dark:text-orange-400 font-semibold">Who We Are</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-6">
            Why Choose EVOX
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Leading the way in innovative communication solutions with commitment to excellence and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* About Us */}
          <div className="group relative bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:scale-105">
            {/* Gradient Border on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px]">
              <div className="bg-white dark:bg-gray-900 h-full w-full rounded-3xl"></div>
            </div>

            <div className="relative">
              {/* Floating Gradient Orb */}
              <div className="absolute -top-2 -right-2 w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-500/20 blur-3xl group-hover:scale-150 transition-transform duration-700 rounded-full"></div>
              
              <div className="relative w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-red-500/50">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-gray-900 dark:text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all">
                About Us
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                At EVOX Corporation, we are committed to delivering top-notch communication solutions. Our range of products is designed to meet the diverse needs of professionals and enthusiasts alike.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="group relative bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:scale-105">
            {/* Gradient Border on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px]">
              <div className="bg-white dark:bg-gray-900 h-full w-full rounded-3xl"></div>
            </div>

            <div className="relative">
              {/* Floating Gradient Orb */}
              <div className="absolute -top-2 -right-2 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl group-hover:scale-150 transition-transform duration-700 rounded-full"></div>
              
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-blue-500/50">
                <Eye className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-gray-900 dark:text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                Our Vision
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the leading provider of innovative communication technologies, enhancing connectivity and reliability across the globe.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="group relative bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:scale-105">
            {/* Gradient Border on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px]">
              <div className="bg-white dark:bg-gray-900 h-full w-full rounded-3xl"></div>
            </div>

            <div className="relative">
              {/* Floating Gradient Orb */}
              <div className="absolute -top-2 -right-2 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl group-hover:scale-150 transition-transform duration-700 rounded-full"></div>
              
              <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-emerald-500/50">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-gray-900 dark:text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all">
                Our Mission
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To develop cutting-edge products that empower our customers with seamless and efficient communication capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
