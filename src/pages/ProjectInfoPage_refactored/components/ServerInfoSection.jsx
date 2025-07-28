import { motion } from "framer-motion";
import { SERVER_DATA, CREDENTIALS } from "../constants/projectInfo";

const ServerInfoSection = () => (
  <motion.section
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="bg-[#1e1b2d]/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 glow-border hover:glow-effect transition-all duration-300 mb-12"
  >
    <h2 className="text-3xl font-bold mb-6 text-indigo-300 flex items-center">
      <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-3 jhilimili-glow"></span>
      🌟 DeshGuide-server
    </h2>

    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {SERVER_DATA.map((item, index) => (
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

    <h3 className="text-2xl font-bold mb-4 text-amber-300">
      Test Credentials
    </h3>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-indigo-900/50">
            <th className="p-3 text-left border-b border-indigo-500/30">Role</th>
            <th className="p-3 text-left border-b border-indigo-500/30">Email</th>
            <th className="p-3 text-left border-b border-indigo-500/30">Password</th>
          </tr>
        </thead>
        <tbody>
          {CREDENTIALS.map((cred, index) => (
            <tr
              key={index}
              className="border-b border-indigo-500/30 hover:bg-indigo-900/20"
            >
              <td className="p-3">{cred.role}</td>
              <td className="p-3 font-mono text-amber-300">{cred.email}</td>
              <td className="p-3 font-mono text-amber-300">{cred.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.section>
);

export default ServerInfoSection;
