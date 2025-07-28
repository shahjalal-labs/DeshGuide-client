import { motion } from "framer-motion";
import { CLIENT_DATA } from "../constants/projectInfo";

const ClientInfoSection = () => (
  <motion.section
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="bg-[#1e1b2d]/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 glow-border hover:glow-effect transition-all duration-300 mb-12"
  >
    <h2 className="text-3xl font-bold mb-6 text-indigo-300 flex items-center">
      <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-3 jhilimili-glow"></span>
      🌟 DeshGuide-client
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {CLIENT_DATA.map((item, index) => (
        <div
          key={index}
          className="bg-[#2a2738]/50 p-4 rounded-lg border border-indigo-500/20"
        >
          <h3 className="font-semibold text-indigo-300 mb-1">
            {item.label}
          </h3>
          {item.type === "url" ? (
            <a
              href={item.value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300 hover:text-sky-200 break-all"
            >
              {item.value}
            </a>
          ) : (
            <p className="text-gray-300">{item.value}</p>
          )}
        </div>
      ))}
    </div>
  </motion.section>
);

export default ClientInfoSection;
