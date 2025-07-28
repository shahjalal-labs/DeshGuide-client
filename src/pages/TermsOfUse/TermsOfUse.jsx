import { motion } from "framer-motion";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import useScrollToTop from "../../../../hooks/useScrollToTop";

const TermsOfUse = () => {
  useScrollToTop();

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

export default TermsOfUse;
