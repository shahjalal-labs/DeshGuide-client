import { motion } from "motion/react";
import { bottomToTop } from "../animation/motion";
import TypewriterText from "./TypeWriterEffect";

const PageIntro = ({ h1 = "Welcome to tha page ____", p = "" }) => {
  return (
    <div className="mt-10">
      <motion.div className="text-center mb-10" {...bottomToTop}>
        <h1 className="text-xl sm:text-3xl font-bold text-cyan-400 mb-4 text-center">
          <TypewriterText words={[h1]} />
        </h1>
        <p className="text-gray-400 mx-auto lg:w-1/2 w-3/4 text-center">{p}</p>
      </motion.div>
    </div>
  );
};

export default PageIntro;
