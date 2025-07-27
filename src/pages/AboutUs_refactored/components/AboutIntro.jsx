import { motion } from "framer-motion";

const AboutIntro = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="max-w-5xl mx-auto text-center"
  >
    <h1 className="text-4xl md:text-5xl font-bold glow-border pb-4">
      About DeshGuide & The Developer
    </h1>
    <p className="text-lg text-gray-300">
      Night-themed. Hacker-vibed. Built for clarity, speed, and immersive UX.
    </p>
  </motion.div>
);

export default AboutIntro;
