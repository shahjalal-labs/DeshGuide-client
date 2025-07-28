import { motion } from "framer-motion";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import useScrollToTop from "../../hooks/useScrollToTop";

const PrivacyPolicy = () => {
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e1b2d] py-12 px-4 sm:px-6 lg:px-8 text-gray-300"
    >
      <Helmet>
        <title>Privacy Policy | DeshGuide</title>
        <meta
          name="description"
          content="Learn how DeshGuide collects, uses, and protects your personal data while exploring Bangladesh's tourism opportunities"
        />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-400">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              1. Information We Collect
            </h2>
            <p className="mb-3 leading-relaxed">
              When you use DeshGuide, we may collect:
            </p>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <strong>Personal Information:</strong> Name, email, profile
                picture when you register
              </li>
              <li>
                <strong>Booking Details:</strong> Tour preferences, payment
                information, travel dates
              </li>
              <li>
                <strong>Content:</strong> Stories, reviews, photos you upload
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type,
                device information
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, features used, time
                spent
              </li>
            </ul>
          </section>

          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              2. How We Use Your Information
            </h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>Provide and personalize our tourism services</li>
              <li>Process bookings and payments</li>
              <li>Improve platform functionality and user experience</li>
              <li>Communicate important service updates</li>
              <li>Prevent fraud and ensure platform security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              3. Data Sharing
            </h2>
            <p className="mb-3 leading-relaxed">
              We may share information with:
            </p>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <strong>Tour Guides:</strong> Necessary booking details for
                service fulfillment
              </li>
              <li>
                <strong>Payment Processors:</strong> To complete transactions
                (Stripe, etc.)
              </li>
              <li>
                <strong>Analytics Providers:</strong> Google Analytics for usage
                statistics
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by law or to
                protect rights
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              We never sell your personal data to third parties.
            </p>
          </section>

          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              4. Data Security
            </h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>Encryption of sensitive data in transit (SSL/TLS)</li>
              <li>Secure storage with access controls</li>
              <li>Regular security audits</li>
              <li>Limited employee access to personal data</li>
            </ul>
            <p className="mt-3 leading-relaxed text-amber-200">
              While we implement robust measures, no electronic transmission is
              100% secure.
            </p>
          </section>

          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              5. Your Rights
            </h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Update inaccurate information
              </li>
              <li>
                <strong>Deletion:</strong> Request removal of your data
              </li>
              <li>
                <strong>Opt-Out:</strong> Unsubscribe from marketing emails
              </li>
              <li>
                <strong>Complaints:</strong> Lodge with regulatory authorities
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@deshguide.com"
                className="text-indigo-400 hover:underline"
              >
                privacy@deshguide.com
              </a>
            </p>
          </section>

          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              6. Cookies & Tracking
            </h2>
            <p className="leading-relaxed">We use cookies to:</p>
            <ul className="space-y-3 list-disc pl-5 mt-3">
              <li>Authenticate users and maintain sessions</li>
              <li>Remember preferences and settings</li>
              <li>Analyze traffic and usage patterns</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              You can control cookies through browser settings, but this may
              affect functionality.
            </p>
          </section>

          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              7. Children's Privacy
            </h2>
            <p className="leading-relaxed">
              Our services are not directed to individuals under 18. We do not
              knowingly collect personal information from children without
              parental consent.
            </p>
          </section>

          <section className="bg-[#1e1b2d]/50 p-6 rounded-xl border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              8. Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this policy periodically. Significant changes will
              be notified via email or platform notice. Continued use after
              changes constitutes acceptance.
            </p>
          </section>

          <div className="text-center mt-10">
            <p className="text-gray-400">
              For privacy-related inquiries, contact our Data Protection Officer
              at:
              <br />
              <a
                href="mailto:dpo@deshguide.com"
                className="text-indigo-400 hover:underline"
              >
                dpo@deshguide.com
              </a>
            </p>
            <p className="mt-4">
              <Link to="/terms" className="text-indigo-400 hover:underline">
                View our Terms of Use
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
