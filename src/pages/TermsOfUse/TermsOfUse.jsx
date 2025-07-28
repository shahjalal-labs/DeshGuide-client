import { motion } from "framer-motion";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import useScrollToTop from "../../hooks/useScrollToTop";

const TermsOfUse = () => {
  useScrollToTop();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1a103d] py-12 px-4 sm:px-6 lg:px-8 text-gray-200"
    >
      <Helmet>
        <title>Terms of Use | DeshGuide</title>
        <meta
          name="description"
          content="DeshGuide Terms of Service for tourism platform usage"
        />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Animated header with gradient glow */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -inset-4 bg-purple-900/20 rounded-xl blur-xl opacity-75 -z-10"></div>
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-indigo-500 glow-text">
            Terms of Use
          </h1>
          <p className="text-lg text-indigo-300/80 pulse-glow">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <div className="space-y-10">
          {/* Section 1 - With floating animation */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1e1b2d]/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 glow-border hover:glow-effect transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-indigo-300 flex items-center">
              <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-3 jhilimili-glow"></span>
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed text-gray-300">
              By accessing or using{" "}
              <span className="text-sky-300">DeshGuide</span> ("the Platform"),
              you agree to be bound by these Terms. If you disagree with any
              part, you may not access our tourism services in{" "}
              <span className="text-amber-200">Bangladesh</span>.
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
              2. User Accounts
            </h2>
            <ul className="space-y-4 pl-6 relative z-10">
              {[
                "Must be 18+ years old to register",
                "Provide accurate information",
                "Maintain account confidentiality",
                "Responsible for all account activities",
                "We may suspend violating accounts",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Section 3 - With card grid */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1e1b2d]/90 p-8 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_40px_rgba(165,180,252,0.3)] transition-shadow"
          >
            <h2 className="text-3xl font-bold mb-6 text-indigo-300">
              3. Content Policy
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Prohibited Content",
                  items: [
                    "Illegal material",
                    "Defamatory content",
                    "Harmful information",
                  ],
                  icon: "🚫",
                  color: "bg-rose-500/20",
                },
                {
                  title: "Intellectual Property",
                  items: [
                    "Respect copyrights",
                    "No unauthorized use",
                    "Original content only",
                  ],
                  icon: "©️",
                  color: "bg-amber-500/20",
                },
                {
                  title: "Commercial Use",
                  items: [
                    "No unauthorized ads",
                    "No promotional content",
                    "Business inquiries only",
                  ],
                  icon: "💼",
                  color: "bg-blue-500/20",
                },
                {
                  title: "Moderation",
                  items: [
                    "We may remove content",
                    "Violations may be reported",
                    "Appeal process available",
                  ],
                  icon: "👁️",
                  color: "bg-emerald-500/20",
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
                  <ul className="space-y-2 pl-8">
                    {item.items.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-300 relative before:content-['•'] before:absolute before:-left-4 before:text-indigo-400"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Visual divider */}
          <div className="relative flex justify-center my-8">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent"></div>
            <div className="absolute -top-3 bg-indigo-500 rounded-full w-6 h-6 flex items-center justify-center pulse-glow">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Section 4 - With terminal-like design */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[#0f172a] p-8 rounded-2xl border border-indigo-500/30 code-block"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
              4. Bookings & Payments
            </h2>
            <div className="grid md:grid-cols-2 gap-6 font-mono">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-purple-400 mr-3 mt-1">$</div>
                  <div>
                    <h3 className="text-lg text-purple-300">Pricing</h3>
                    <p className="text-gray-400">
                      Subject to change without notice
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-purple-400 mr-3 mt-1">🔄</div>
                  <div>
                    <h3 className="text-lg text-purple-300">Cancellations</h3>
                    <p className="text-gray-400">Varies by tour operator</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-purple-400 mr-3 mt-1">⚠️</div>
                  <div>
                    <h3 className="text-lg text-purple-300">Liability</h3>
                    <p className="text-gray-400">
                      Not responsible for third-party services
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-purple-400 mr-3 mt-1">📅</div>
                  <div>
                    <h3 className="text-lg text-purple-300">Availability</h3>
                    <p className="text-gray-400">
                      All tours subject to availability
                    </p>
                  </div>
                </div>
              </div>
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
              Questions About Our Terms?
            </h3>
            <p className="mb-6 text-gray-400 max-w-2xl mx-auto">
              Contact our legal team for any clarifications regarding these
              terms of service
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]"
              >
                Contact Form
              </Link>
              <a
                href="mailto:legal@deshguide.com"
                className="px-6 py-3 border border-indigo-500 text-indigo-300 hover:text-white hover:border-indigo-300 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
              >
                legal@deshguide.com
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

export default TermsOfUse;

/* import { motion } from "framer-motion";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

const TermsOfUse = () => {
  // useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e1b2d] py-12 px-4 sm:px-6 lg:px-8 text-gray-300"
    >
      <Helmet>
        <title>Terms of Use | DeshGuide</title>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
            Terms of Use
          </h1>
          <p className="text-lg text-gray-400">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing or using DeshGuide ("the Platform"), you agree to be
              bound by these Terms of Use. If you disagree with any part, you
              may not access the Platform. These terms apply to all visitors,
              users, and others who wish to access or use our tourism services
              in Bangladesh.
            </p>
          </section>

          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              2. User Accounts
            </h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>You must be at least 18 years old to create an account</li>
              <li>Provide accurate information during registration</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>You are responsible for all activities under your account</li>
              <li>
                We reserve the right to suspend accounts violating our policies
              </li>
            </ul>
          </section>

          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              3. Content Policy
            </h2>
            <p className="mb-3 leading-relaxed">
              Users may submit travel stories, photos, and reviews subject to:
            </p>
            <ul className="space-y-3 list-disc pl-5">
              <li>No illegal, defamatory, or harmful content</li>
              <li>No infringement of intellectual property rights</li>
              <li>No commercial advertising without permission</li>
              <li>We may moderate or remove inappropriate content</li>
            </ul>
          </section>

          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              4. Bookings & Payments
            </h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>Tour packages are subject to availability</li>
              <li>Prices may change without notice</li>
              <li>Cancellation policies vary by tour operator</li>
              <li>We are not liable for third-party service quality</li>
            </ul>
          </section>

          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              5. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              DeshGuide acts solely as an intermediary between tourists and
              service providers. We are not responsible for:
            </p>
            <ul className="space-y-3 list-disc pl-5 mt-3">
              <li>Injuries, losses, or damages during tours</li>
              <li>Changes to itineraries by third parties</li>
              <li>Natural disasters or unforeseen events</li>
              <li>Accuracy of user-generated content</li>
            </ul>
          </section>

          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              6. Privacy
            </h2>
            <p className="leading-relaxed">
              Your use of the Platform is subject to our{" "}
              <Link
                to="/privacy-policy"
                className="text-indigo-400 hover:underline"
              >
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect your personal
              information.
            </p>
          </section>

          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              7. Modifications
            </h2>
            <p className="leading-relaxed">
              We may revise these terms at any time without notice. By
              continuing to use the Platform after changes, you agree to be
              bound by the revised terms.
            </p>
          </section>

          <div className="text-center mt-10">
            <p className="text-gray-400">
              For questions regarding these Terms, contact us at:
              <br />
              <a
                href="mailto:legal@deshguide.com"
                className="text-indigo-400 hover:underline"
              >
                legal@deshguide.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfUse; */
