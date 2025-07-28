import { motion } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaFilePdf } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";

const PartnerSignup = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-4"
          >
            <MdOutlineTravelExplore className="text-5xl text-cyan-400" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Become a DeshGuide Partner
          </h1>
          <p className="text-lg text-gray-300">
            Join our network of trusted tour guides and travel experts
          </p>
        </div>

        {/* Application Process */}
        <div className="bg-gray-800 rounded-xl p-6 mb-12 border border-cyan-400/20 shadow-lg shadow-cyan-400/10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaCheckCircle className="text-cyan-400" />
            <span>Application Process</span>
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400">
                1
              </div>
              <div>
                <h3 className="text-lg font-medium">Prepare Your Documents</h3>
                <p className="text-gray-400">
                  Resume/CV and cover letter highlighting your experience
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400">
                2
              </div>
              <div>
                <h3 className="text-lg font-medium">Email Your Application</h3>
                <p className="text-gray-400">
                  Send to partners@deshguide.com with subject:
                  <span className="bg-gray-700 px-2 py-1 rounded ml-2 text-sm font-mono">
                    [Partner Application] - Your Name
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400">
                3
              </div>
              <div>
                <h3 className="text-lg font-medium">Review Process</h3>
                <p className="text-gray-400">
                  Our team will contact you within 3-5 business days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gray-800 rounded-xl p-8 border-2 border-dashed border-cyan-400/30 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-cyan-900/20 rounded-full">
              <FaPaperPlane className="text-4xl text-cyan-400" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Ready to Apply?</h3>
          <p className="text-gray-400 mb-6">
            Send your application materials to our partner team
          </p>
          <a
            href="mailto:partners@deshguide.com?subject=[Partner Application] - Your Name"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            <FaPaperPlane className="mr-2" />
            Email Your Application
          </a>
          <p className="mt-4 text-sm text-gray-500">
            <FaFilePdf className="inline mr-1" />
            PDF attachments preferred
          </p>
        </motion.div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            Have questions? Contact{" "}
            <a
              href="mailto:support@deshguide.com"
              className="text-cyan-400 hover:underline"
            >
              support@deshguide.com
            </a>
          </p>
          <p className="mt-2">Online application form coming soon!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnerSignup;
