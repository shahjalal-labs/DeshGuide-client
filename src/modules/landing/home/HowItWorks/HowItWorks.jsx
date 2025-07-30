/* import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaSearchLocation,
  FaCalendarCheck,
  FaSmileBeam,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearchLocation className="text-3xl text-sky-400" />,
    title: "Explore Packages",
    description:
      "Browse handpicked tours across Bangladesh with detailed insights and local charm.",
  },
  {
    icon: <FaUserCheck className="text-3xl text-purple-400" />,
    title: "Select a Guide",
    description:
      "Choose from verified, traveler-rated guides based on your preferences and needs.",
  },
  {
    icon: <FaCalendarCheck className="text-3xl text-indigo-400" />,
    title: "Book Instantly",
    description:
      "Secure your guide and package with instant booking using our seamless platform.",
  },
  {
    icon: <FaSmileBeam className="text-3xl text-pink-400" />,
    title: "Enjoy Your Trip",
    description:
      "Meet your guide, follow your itinerary, and experience a worry-free journey!",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        🚀 How DeshGuide Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step, i) => (
          <div data-aos="zoom-in-right" key={i}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#111827] border border-purple-700 hover:border-sky-500 p-6 text-center shadow-[0_0_20px_#7c3aed33] hover:scale-[1.03] transition-all duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks; */

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  FaUserCheck,
  FaSearchLocation,
  FaCalendarCheck,
  FaSmileBeam,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearchLocation className="text-4xl text-cyan-400" />,
    title: "Explore Packages",
    description:
      "Browse handpicked tours across Bangladesh with detailed insights and local charm.",
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-600/20",
    borderGlow: "cyan-400",
    number: "01",
  },
  {
    icon: <FaUserCheck className="text-4xl text-purple-400" />,
    title: "Select a Guide",
    description:
      "Choose from verified, traveler-rated guides based on your preferences and needs.",
    color: "purple",
    gradient: "from-purple-500/20 to-pink-600/20",
    borderGlow: "purple-400",
    number: "02",
  },
  {
    icon: <FaCalendarCheck className="text-4xl text-indigo-400" />,
    title: "Book Instantly",
    description:
      "Secure your guide and package with instant booking using our seamless platform.",
    color: "indigo",
    gradient: "from-indigo-500/20 to-violet-600/20",
    borderGlow: "indigo-400",
    number: "03",
  },
  {
    icon: <FaSmileBeam className="text-4xl text-pink-400" />,
    title: "Enjoy Your Trip",
    description:
      "Meet your guide, follow your itinerary, and experience a worry-free journey!",
    color: "pink",
    gradient: "from-pink-500/20 to-rose-600/20",
    borderGlow: "pink-400",
    number: "04",
  },
];

const floatingIcons = [
  { icon: FaStar, color: "text-yellow-400" },
  { icon: FaArrowRight, color: "text-cyan-400" },
  { icon: FaStar, color: "text-purple-400" },
  { icon: FaArrowRight, color: "text-pink-400" },
  { icon: FaStar, color: "text-indigo-400" },
  { icon: FaArrowRight, color: "text-cyan-400" },
];

const HowItWorks = () => {
  return (
    <section className="relative bg-[#0a0f1a] text-white py-24 px-4 overflow-hidden max-sm:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-cyan-900/10"></div>

      {/* Floating Icons Marquee */}
      <div className="absolute top-10 left-0 right-0 opacity-20">
        <Marquee speed={30} gradient={false}>
          {floatingIcons.map((item, i) => (
            <div key={i} className="mx-8" data-aos="fade-down-left">
              <item.icon className={`text-2xl ${item.color} animate-pulse`} />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
          🚀 How DeshGuide Works
        </h2>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full glow-effect"></div>
      </motion.div>

      {/* Main Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16 relative z-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Card Container */}
            <div
              className={`
              relative h-full rounded-3xl p-8 text-center
              bg-gradient-to-br ${step.gradient}
              backdrop-blur-sm border border-gray-700/50
              transition-all duration-500 ease-out
              hover:scale-105 hover:rotate-1
              hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]
              jhilimili-glow
              group-hover:border-${step.borderGlow}
              cursor-pointer
            `}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600 flex items-center justify-center text-sm font-bold text-cyan-400 glow-text">
                {step.number}
              </div>

              {/* Animated Background Glow */}
              <div
                className={`
                absolute inset-0 rounded-3xl opacity-0 
                bg-gradient-to-br from-${step.color}-500/10 to-transparent
                group-hover:opacity-100 transition-opacity duration-500
                blur-xl
              `}
              ></div>

              {/* Icon Container */}
              <motion.div
                className="relative z-10 mb-6 flex-center w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-600/50 group-hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {step.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 glow-text group-hover:text-cyan-300 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <motion.div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <FaArrowRight className="text-cyan-400 text-lg" />
              </motion.div>
            </div>

            {/* Connection Line (for larger screens) */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-600 to-transparent transform -translate-y-1/2 z-20">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full glow-effect animate-pulse"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom Marquee with Process Flow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 "
      >
        <Marquee speed={50} gradient={true} gradientColor={[10, 15, 26]}>
          <div className="flex items-center space-x-8 py-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 mx-6"
                data-aos="fade-up-right"
              >
                <div className="flex items-center space-x-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-600/30">
                  <div className="text-lg">{step.icon}</div>
                  <span className="text-sm font-medium text-gray-300">
                    {step.title}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <FaArrowRight className="text-cyan-400 text-sm animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </Marquee>
      </motion.div>

      {/* Bottom Floating Icons */}
      <div className="absolute bottom-10 left-0 right-0 opacity-10">
        <Marquee speed={40} direction="right" gradient={false}>
          {floatingIcons.reverse().map((item, i) => (
            <div key={i} className="mx-12">
              <item.icon className={`text-3xl ${item.color} animate-bounce`} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default HowItWorks;
