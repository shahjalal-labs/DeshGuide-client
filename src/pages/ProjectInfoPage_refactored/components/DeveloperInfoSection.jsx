import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "../constants/projectInfo";

const DeveloperInfoSection = () => (
  <motion.section
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="bg-[#1e1b2d]/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 glow-border hover:glow-effect transition-all duration-300"
  >
    <h2 className="text-3xl font-bold mb-6 text-indigo-300 flex items-center justify-center">
      <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-3 jhilimili-glow"></span>
      👨‍💻 Developer Information
    </h2>

    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1 flex justify-center">
        <div className="relative overflow-hidden rounded-full w-64 h-64 border-2 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(165,180,252,0.5)] transition-all duration-500">
          <img
            src="https://i.ibb.co/sdkqSVHm/profile.jpg"
            alt="Developer Profile"
            className="w-full h-full object-cover rounded-full transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-indigo-300/50 pointer-events-none transition-all duration-300"></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center md:items-start">
        <h3 className="text-2xl font-semibold mb-4 text-sky-300 text-center md:text-left">
          Social Links
        </h3>
        <div className="space-y-3 w-full max-w-md">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-[#2a2738]/50 rounded-lg border border-indigo-500/20 hover:bg-indigo-900/30 transition-colors w-full"
            >
              <span className="mr-3">
                {index === 0 ? "🔗" : index === 1 ? "👍" : "🐦"}
              </span>
              <span className="font-medium flex-grow">{link.platform}</span>
              <span className="text-indigo-400">→</span>
            </a>
          ))}
        </div>

        <div className="mt-8 w-full max-w-md">
          <h3 className="text-2xl font-semibold mb-4 text-purple-300 text-center md:text-left">
            Portfolio
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://github.com/shahjalal-labs/shahjalal-portfolio-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#2a2738]/50 rounded-lg border border-indigo-500/20 hover:bg-indigo-900/30 transition-colors flex items-center"
            >
              <span className="mr-3">💻</span>
              <span>GitHub Portfolio</span>
            </a>
            <a
              href="http://shahjalal-labs.surge.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#2a2738]/50 rounded-lg border border-indigo-500/20 hover:bg-indigo-900/30 transition-colors flex items-center"
            >
              <span className="mr-3">🌐</span>
              <span>Live Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default DeveloperInfoSection;
