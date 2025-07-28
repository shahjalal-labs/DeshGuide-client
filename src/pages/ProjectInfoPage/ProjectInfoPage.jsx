import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import useScrollToTop from "../../hooks/useScrollToTop";

const ProjectInfoPage = () => {
  useScrollToTop();

  const clientData = [
    {
      label: "GitHub URL",
      value: "https://github.com/shahjalal-labs/DeshGuide-client",
      type: "url",
    },
    {
      label: "Live Site",
      value: "http://shahjalal-mern.surge.sh",
      type: "url",
    },
    {
      label: "Directory",
      value:
        "/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client",
      type: "text",
    },
    { label: "Username", value: "sj", type: "text" },
    {
      label: "Created On",
      value: "21/07/2025 10:48 অপরাহ্ণ সোম GMT+6",
      type: "text",
    },
    { label: "Location", value: "Sharifpur, Gazipur, Dhaka", type: "text" },
  ];

  const serverData = [
    {
      label: "GitHub URL",
      value: "https://github.com/shahjalal-labs/DeshGuide-server",
      type: "url",
    },
    {
      label: "Live Site",
      value: "https://deshguide-server.vercel.app/",
      type: "url",
    },
    {
      label: "Directory",
      value:
        "/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server",
      type: "text",
    },
    {
      label: "Created On",
      value: "19/07/2025 08:27 অপরাহ্ণ শনি GMT+6",
      type: "text",
    },
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/shahjalal-labs/",
    },
    { platform: "Facebook", url: "https://www.facebook.com/shahjalal.labs" },
    { platform: "Twitter", url: "https://x.com/shahjalal_labs" },
  ];

  const credentials = [
    {
      role: "Admin",
      email: "admin@example.com",
      password: "admin@example.com",
    },
    {
      role: "Tourist",
      email: "tourist@example.com",
      password: "tourist@example.com",
    },
    {
      role: "Tour Guide",
      email: "tourguide@example.com",
      password: "tourguide@example.com",
    },
  ];

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
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute -inset-4 bg-indigo-900/30 rounded-xl blur-xl opacity-75 -z-10"></div>
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-indigo-500 glow-text">
            Project Information
          </h1>
          <p className="text-lg text-indigo-300/80 pulse-glow">
            Technical details and developer information
          </p>
        </div>

        {/* Client Section */}
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
            {clientData.map((item, index) => (
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

        {/* Server Section */}
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
            {serverData.map((item, index) => (
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
                  <th className="p-3 text-left border-b border-indigo-500/30">
                    Role
                  </th>
                  <th className="p-3 text-left border-b border-indigo-500/30">
                    Email
                  </th>
                  <th className="p-3 text-left border-b border-indigo-500/30">
                    Password
                  </th>
                </tr>
              </thead>
              <tbody>
                {credentials.map((cred, index) => (
                  <tr
                    key={index}
                    className="border-b border-indigo-500/30 hover:bg-indigo-900/20"
                  >
                    <td className="p-3">{cred.role}</td>
                    <td className="p-3 font-mono text-amber-300">
                      {cred.email}
                    </td>
                    <td className="p-3 font-mono text-amber-300">
                      {cred.password}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Developer Section with Centered Items */}
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
            {/* Centered Image Container */}
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

            {/* Centered Content */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-semibold mb-4 text-sky-300 text-center md:text-left">
                Social Links
              </h3>
              <div className="space-y-3 w-full max-w-md">
                {socialLinks.map((link, index) => (
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
                    <span className="font-medium flex-grow">
                      {link.platform}
                    </span>
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
      </div>
    </motion.div>
  );
};

export default ProjectInfoPage;
