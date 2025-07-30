/* import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaRocket,
  FaRegHandshake,
  FaRegSmile,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt className="text-3xl text-sky-400" />,
    title: "Verified & Trusted",
    description:
      "Every tour guide is manually verified to ensure safety, trust, and local authenticity.",
  },
  {
    icon: <FaRocket className="text-3xl text-purple-400" />,
    title: "Fast & Flexible",
    description:
      "Instant booking, live updates, and a wide range of destinations to fit your travel style.",
  },
  {
    icon: <FaRegHandshake className="text-3xl text-pink-400" />,
    title: "Local Partnerships",
    description:
      "We collaborate with local businesses and guides to boost the regional economy.",
  },
  {
    icon: <FaRegSmile className="text-3xl text-indigo-400" />,
    title: "Satisfaction First",
    description:
      "Transparent pricing, real reviews, and human support ensure a smooth experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        🌟 Why Choose DeshGuide?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {reasons.map((reason, index) => (
          <div data-aos="zoom-out-left"              key={index}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#111827] border border-purple-700 hover:border-sky-500 p-6 text-center shadow-[0_0_20px_#7c3aed33] hover:scale-[1.03] transition-all duration-300"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm">{reason.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs; */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaShieldAlt,
  FaRocket,
  FaRegHandshake,
  FaRegSmile,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt className="text-4xl text-cyan-400" />,
    title: "Verified & Trusted",
    description:
      "Every tour guide is manually verified to ensure safety, trust, and local authenticity.",
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-600/20",
    stats: "99.8% Safety Rating",
    feature: "Background Verified Guides",
  },
  {
    icon: <FaRocket className="text-4xl text-purple-400" />,
    title: "Fast & Flexible",
    description:
      "Instant booking, live updates, and a wide range of destinations to fit your travel style.",
    color: "purple",
    gradient: "from-purple-500/20 to-pink-600/20",
    stats: "Under 2 Min Booking",
    feature: "Real-time Updates",
  },
  {
    icon: <FaRegHandshake className="text-4xl text-pink-400" />,
    title: "Local Partnerships",
    description:
      "We collaborate with local businesses and guides to boost the regional economy.",
    color: "pink",
    gradient: "from-pink-500/20 to-rose-600/20",
    stats: "500+ Local Partners",
    feature: "Community Driven",
  },
  {
    icon: <FaRegSmile className="text-4xl text-indigo-400" />,
    title: "Satisfaction First",
    description:
      "Transparent pricing, real reviews, and human support ensure a smooth experience.",
    color: "indigo",
    gradient: "from-indigo-500/20 to-violet-600/20",
    stats: "4.9/5 User Rating",
    feature: "24/7 Human Support",
  },
];

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0f1a] text-white py-24 px-4 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-cyan-900/10"></div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-600/50 mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <FaStar className="text-yellow-400 text-sm" />
          <span className="text-gray-300 text-sm font-medium">
            Why Travelers Choose Us
          </span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
          🌟 Why Choose DeshGuide?
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Experience Bangladesh like never before with our cutting-edge platform
        </motion.p>

        <div className="w-32 h-1 mx-auto mt-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full glow-effect"></div>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="group relative perspective-1000"
          >
            {/* Main Card */}
            <div
              className={`
              relative h-full rounded-3xl p-8 text-center backdrop-blur-sm
              bg-gradient-to-br ${reason.gradient}
              border border-gray-700/50 overflow-hidden
              transition-all duration-500 ease-out cursor-pointer
              ${
                hoveredIndex === index
                  ? `scale-105 rotate-y-5 border-${reason.color}-400 shadow-[0_0_50px_rgba(99,102,241,0.4)]`
                  : "hover:scale-102"
              }
              jhilimili-glow group-hover:border-${reason.color}-400
            `}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-20 h-20 border border-gray-600 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-gray-600 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-gray-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              {/* Glowing Orb Background */}
              <motion.div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-${reason.color}-500/30 to-transparent blur-2xl`}
                animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Stats Badge */}
              <div className="absolute top-4 right-4 z-10">
                <motion.div
                  className={`bg-${reason.color}-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-${reason.color}-400/50`}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <span
                    className={`text-${reason.color}-300 text-xs font-bold`}
                  >
                    {reason.stats}
                  </span>
                </motion.div>
              </div>

              {/* Icon Container */}
              <motion.div
                className="relative z-10 mb-6 flex-center w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-600/50 group-hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                  boxShadow: `0 0 30px rgba(99, 102, 241, 0.6)`,
                }}
                transition={{ duration: 0.6 }}
                animate={
                  hoveredIndex === index
                    ? {
                        boxShadow: `0 0 25px rgba(99, 102, 241, 0.8)`,
                        scale: 1.05,
                      }
                    : {}
                }
              >
                {reason.icon}

                {/* Pulsing Ring */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 border-${reason.color}-400 opacity-0`}
                  animate={
                    hoveredIndex === index
                      ? {
                          opacity: [0, 1, 0],
                          scale: [1, 1.2, 1.4],
                        }
                      : {}
                  }
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <h3
                  className={`text-2xl font-bold text-white mb-2 glow-text group-hover:text-${reason.color}-300 transition-colors duration-300`}
                >
                  {reason.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-4">
                  {reason.description}
                </p>

                {/* Feature Tag */}
                <motion.div
                  className="flex items-center justify-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-600/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle
                    className={`text-${reason.color}-400 text-sm`}
                  />
                  <span className="text-gray-300 text-xs font-medium">
                    {reason.feature}
                  </span>
                </motion.div>
              </div>

              {/* Hover Arrow */}
              <motion.div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ x: -10 }}
                animate={hoveredIndex === index ? { x: 0 } : { x: -10 }}
              >
                <FaArrowRight className={`text-${reason.color}-400 text-lg`} />
              </motion.div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
            </div>

            {/* 3D Shadow */}
            <div
              className={`
              absolute inset-0 rounded-3xl bg-gradient-to-br ${reason.gradient} 
              opacity-30 blur-xl transform translate-y-4 -z-10
              transition-all duration-500 group-hover:translate-y-8 group-hover:opacity-50
            `}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
