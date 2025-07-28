import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import useScrollToTop from "../../hooks/useScrollToTop";
import ClientInfoSection from "./components/ClientInfoSection";
import ServerInfoSection from "./components/ServerInfoSection";
import DeveloperInfoSection from "./components/DeveloperInfoSection";

const ProjectInfoPage = () => {
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1a103d] py-12 px-4 sm:px-6 lg:px-8 text-gray-200"
    >
      <Helmet>
        <title>Project Information | DeshGuide</title>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute -inset-4 bg-indigo-900/30 rounded-xl blur-xl opacity-75 -z-10"></div>
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-indigo-500 glow-text">
            Project Information
          </h1>
          <p className="text-lg text-indigo-300/80 pulse-glow">
            Technical details and developer information
          </p>
        </div>

        <ClientInfoSection />
        <ServerInfoSection />
        <DeveloperInfoSection />
      </div>
    </motion.div>
  );
};

export default ProjectInfoPage;
