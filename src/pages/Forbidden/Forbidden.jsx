import { Link } from "react-router";
import { motion } from "framer-motion";
import UseHelmet from "../../hooks/useHelmet";

const Forbidden = () => {
  UseHelmet("Access Denied");

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-gray-900 to-gray-950 flex-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full glow-border p-8 md:p-12 rounded-xl bg-gray-800/50 backdrop-blur-sm"
      >
        <div className="text-center space-y-6">
          {/* Glowing 403 Badge */}
          <div className="inline-block relative">
            <span className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 glow-text">
              403
            </span>
            <div className="absolute -inset-4 rounded-full bg-indigo-500/10 blur-xl"></div>
          </div>

          {/* Animated Title */}
          <motion.h1
            animate={{
              textShadow: [
                "0 0 8px rgba(99, 102, 241, 0.7)",
                "0 0 12px rgba(99, 102, 241, 0.9)",
                "0 0 8px rgba(99, 102, 241, 0.7)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-3xl md:text-4xl font-bold text-gray-100"
          >
            ACCESS RESTRICTED
          </motion.h1>

          {/* Glowing Divider */}
          <div className="relative py-4">
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-500 rounded-full pulse-glow"></div>
          </div>

          {/* Pulsing Message */}
          <motion.p
            className="text-lg text-gray-300"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            You don't have the required permissions to view this content.
          </motion.p>

          {/* Hover-glow Button */}
          <div className="pt-6">
            <Link
              to="/"
              className="relative inline-block px-8 py-3 font-medium rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:glow-effect transition-all duration-300 group"
            >
              <span className="relative z-10">Return to Safety</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -inset-1 rounded-full bg-indigo-500/30 blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Terminal-style ASCII Art */}
          <div className="mt-10 text-xs text-gray-500 font-mono text-center select-none">
            <p className="mb-1">[ERROR] PERMISSION_DENIED: 0x00000403</p>
            <p className="text-indigo-400">$ sudo elevate_credentials</p>
            <p className="text-gray-600">// Contact admin@deshguide.com</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Forbidden;
