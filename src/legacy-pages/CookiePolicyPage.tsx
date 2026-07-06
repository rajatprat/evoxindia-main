import { Header } from '../components/Header';
import { PremiumFooter } from '../components/PremiumFooter';
import { SEO } from '../components/SEO';
import { Cookie, Settings, Eye, BarChart, Shield, Mail, Phone } from 'lucide-react';

export function CookiePolicyPage() {
  return (
    <div className="premium-legacy-page">
      <SEO title="Cookie Policy | EVOX India" description="Learn how EVOX India uses cookies and related technologies." canonicalUrl="https://evoxindia.in/cookie-policy" />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/50 dark:to-yellow-950/50 border border-amber-100 dark:border-amber-900 rounded-full mb-8">
            <Cookie className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-amber-600 dark:text-amber-400 font-semibold">Cookie Information</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
              Cookie Policy
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-6">
            Learn how EVOX India uses cookies and similar technologies to improve your browsing experience
          </p>
          <p className="text-gray-500 dark:text-gray-500">
            Last Updated: December 24, 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* What Are Cookies */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Are Cookies?</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  EVOX India uses cookies to enhance your browsing experience, analyze website traffic, and personalize content. This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Types of Cookies We Use */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-8">
                  {/* Essential Cookies */}
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Essential Cookies (Required)</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                          These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                        </p>
                        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-xl p-4">
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Examples:</strong></p>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></span>
                              <span>Session cookies for maintaining your login state</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></span>
                              <span>Security cookies to authenticate users and prevent fraud</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></span>
                              <span>Load balancing cookies to distribute traffic efficiently</span>
                            </li>
                          </ul>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                            <strong>Note:</strong> These cookies cannot be disabled as they are essential for website operation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <BarChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Analytics and Performance Cookies</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                          These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's functionality and user experience.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-xl p-4">
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>What we track:</strong></p>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                              <span>Number of visitors to the website</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                              <span>Pages viewed and time spent on each page</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                              <span>Navigation paths through the website</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                              <span>Browser type and device information</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                              <span>Error messages encountered</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <Settings className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Functional Cookies</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                          These cookies allow the website to remember choices you make (such as your language preference or dark mode setting) and provide enhanced, more personalized features.
                        </p>
                        <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900 rounded-xl p-4">
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Examples:</strong></p>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></span>
                              <span>Remembering your dark mode preference</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></span>
                              <span>Storing your language preference</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></span>
                              <span>Remembering items in your quote request</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></span>
                              <span>Customizing content based on your preferences</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                        <Eye className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Marketing and Targeting Cookies</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                          These cookies are used to deliver advertisements that are more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
                        </p>
                        <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-xl p-4">
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Used for:</strong></p>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></span>
                              <span>Showing you relevant product recommendations</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></span>
                              <span>Tracking ad campaign performance</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></span>
                              <span>Retargeting visitors who didn't complete a purchase</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></span>
                              <span>Building profiles for targeted advertising</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Cookies</h2>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  In addition to our own cookies, we may also use third-party cookies from trusted partners to enhance your experience. These include:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Google Analytics</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      We use Google Analytics to understand how visitors use our site. These cookies collect information in an anonymous form.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Social Media Platforms</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      We may use cookies from social media platforms (Facebook, Twitter, LinkedIn, Instagram) to enable social sharing features and track social media campaigns.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Advertising Networks</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Third-party advertising partners may use cookies to show you relevant ads across the internet based on your browsing activity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Manage Cookies */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How to Manage Cookies</h2>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in the following ways:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Browser Settings</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                      Most web browsers allow you to control cookies through their settings. You can set your browser to:
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                        <span>Block all cookies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                        <span>Accept only first-party cookies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                        <span>Receive notifications when cookies are set</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                        <span>Delete cookies after closing your browser</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Browser-Specific Instructions:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 min-w-[100px]">Chrome:</span>
                        <span className="text-gray-600 dark:text-gray-400">Settings → Privacy and security → Cookies and other site data</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 min-w-[100px]">Firefox:</span>
                        <span className="text-gray-600 dark:text-gray-400">Settings → Privacy & Security → Cookies and Site Data</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 min-w-[100px]">Safari:</span>
                        <span className="text-gray-600 dark:text-gray-400">Preferences → Privacy → Manage Website Data</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 min-w-[100px]">Edge:</span>
                        <span className="text-gray-600 dark:text-gray-400">Settings → Cookies and site permissions → Cookies and site data</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Opt-Out Tools</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                      You can also use these tools to opt out of targeted advertising:
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                        <span><strong>Google Ads Settings:</strong> Control ads personalization from Google</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                        <span><strong>Facebook Ad Preferences:</strong> Manage your Facebook ad settings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                        <span><strong>Digital Advertising Alliance:</strong> Opt out of interest-based advertising</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-xl p-4 flex gap-3">
                    <Shield className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Important Note:</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Blocking all cookies may affect the functionality of our website. Some features may not work properly if cookies are disabled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Updates to Policy */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Updates to This Cookie Policy</h2>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We will notify you of any significant changes by posting a notice on our website. Please review this policy periodically to stay informed about how we use cookies.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-900 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Questions About Cookies?</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <a href="mailto:evoxindia@gmail.com" className="text-amber-600 hover:text-amber-700">evoxindia@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <a href="tel:+919990696931" className="text-amber-600 hover:text-amber-700">+91 99906 96931</a>
                  <span className="text-gray-500 mx-2">|</span>
                  <a href="tel:+919717067092" className="text-amber-600 hover:text-amber-700">+91 97170 67092</a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center text-amber-600 dark:text-amber-400 mt-1">
                  <span className="text-xl">🏢</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Company</p>
                  <p className="text-gray-600 dark:text-gray-400">EVOX India</p>
                  <p className="text-gray-600 dark:text-gray-400">Delhi & Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}
