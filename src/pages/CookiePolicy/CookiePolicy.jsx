import { motion } from "framer-motion";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import useScrollToTop from "../../hooks/useScrollToTop";

const CookiePolicy = () => {
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1a103d] py-12 px-4 sm:px-6 lg:px-8 text-gray-200"
    >
      <Helmet>
        <title>Cookie Policy | DeshGuide</title>
        <meta
          name="description"
          content="Learn how DeshGuide uses cookies to enhance your experience"
        />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Glowing header */}
        <div className="text-center mb-16 relative">
          <div className="absolute -inset-4 bg-indigo-900/30 rounded-xl blur-xl opacity-75 -z-10"></div>
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-indigo-500 glow-text">
            Cookie Policy
          </h1>
          <p className="text-lg text-indigo-300/80 pulse-glow">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-10">
          {/* Section 1 - Enhanced with glow */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1e1b2d]/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 glow-border hover:glow-effect transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-indigo-300 flex items-center">
              <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-3 jhilimili-glow"></span>
              1. What Are Cookies?
            </h2>
            <p className="leading-relaxed text-gray-300">
              Cookies are small text files stored on your device when you visit
              websites. They help us remember your preferences and improve your
              experience on
              <span className="text-sky-300"> DeshGuide</span>.
            </p>
          </motion.section>

          {/* Section 2 - With interactive list */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative bg-[#1e1b2d]/70 p-8 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 border-2 border-transparent hover:border-indigo-500/50 rounded-2xl pointer-events-none transition-all duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-sm opacity-50"></div>
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300 relative z-10">
              2. Types We Use
            </h2>
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              {[
                {
                  title: "Essential",
                  desc: "Required for core functionality",
                  icon: "🔒",
                  color: "bg-emerald-500/20",
                },
                {
                  title: "Preferences",
                  desc: "Remember your settings",
                  icon: "⚙️",
                  color: "bg-blue-500/20",
                },
                {
                  title: "Analytics",
                  desc: "Help improve our services",
                  icon: "📊",
                  color: "bg-purple-500/20",
                },
                {
                  title: "Marketing",
                  desc: "Show relevant content",
                  icon: "🎯",
                  color: "bg-amber-500/20",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`${item.color} p-5 rounded-xl border border-white/10 backdrop-blur-sm`}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Section 3 - Terminal-style */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#0f172a] p-8 rounded-2xl border border-indigo-500/30 code-block"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              3. Managing Cookies
            </h2>
            <div className="font-mono space-y-4">
              <div className="flex items-start">
                <span className="text-amber-400 mr-3 mt-1">$</span>
                <div>
                  <h3 className="text-lg text-amber-300">Browser Settings</h3>
                  <p className="text-gray-400">
                    Control via privacy/security preferences
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-amber-400 mr-3 mt-1">></span>
                <div>
                  <h3 className="text-lg text-amber-300">Opt-Out Tools</h3>
                  <p className="text-gray-400">
                    Available through third-party services
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-amber-400 mr-3 mt-1">!</span>
                <div>
                  <h3 className="text-lg text-amber-300">Important Note</h3>
                  <p className="text-gray-400">
                    Disabling may affect functionality
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 4 - With animated elements */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[#1e1b2d]/90 p-8 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_40px_rgba(165,180,252,0.3)] transition-shadow"
          >
            <h2 className="text-3xl font-bold mb-6 text-indigo-300">
              4. Your Choices
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Accept All",
                  desc: "Opt-in to all cookie categories",
                  icon: "✅",
                },
                {
                  title: "Essential Only",
                  desc: "Minimum required for functionality",
                  icon: "⚡",
                },
                {
                  title: "Custom Settings",
                  desc: "Select specific cookie types",
                  icon: "🔧",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start p-4 bg-[#2a2738]/50 rounded-xl border border-indigo-500/20"
                >
                  <span className="text-2xl mr-4 mt-1">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg text-indigo-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Footer with enhanced contact options */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16 relative"
          >
            <div className="absolute -inset-4 bg-indigo-900/20 rounded-xl blur-2xl -z-10"></div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-300">
              Need Help With Cookie Settings?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]"
              >
                Contact Support
              </Link>
              <a
                href="mailto:privacy@deshguide.com"
                className="px-6 py-3 border border-indigo-500 text-indigo-300 hover:text-white hover:border-indigo-300 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
              >
                privacy@deshguide.com
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-indigo-500/20">
              <Link
                to="/privacy-policy"
                className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center justify-center"
              >
                <span className="mr-2">View our Privacy Policy</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookiePolicy;
