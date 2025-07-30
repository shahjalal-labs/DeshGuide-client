/* import { motion } from "framer-motion";
import Spinner from "../../shared/Layout/Spinner";
import useAdminStats from "../../../hooks/useAdminStats"; // ✅ use exact path

const AdminHome = () => {
  const { data, isPending, isError, error } = useAdminStats();

  if (isPending)
    return (
      <div className="text-center mt-10">
        <Spinner />
      </div>
    );

  if (isError)
    return (
      <div className="text-center mt-10 text-red-400">
        ❌ Failed to load stats: {error?.message}
      </div>
    );

  const {
    totalPayment,
    totalTourGuides,
    totalPackages,
    totalClients,
    totalStories,
  } = data || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-3 gap-6 p-6 rounded-lg bg-gradient-to-br from-[#0e112a] to-[#1a1f3b] shadow-xl text-white"
      data-aos="fade-up"
    >
      {[
        { label: "💰 Total Payment", value: `$${totalPayment}` },
        { label: "🧭 Tour Guides", value: totalTourGuides },
        { label: "🌍 Packages", value: totalPackages },
        { label: "👥 Clients", value: totalClients },
        { label: "📖 Stories", value: totalStories },
      ].map((stat, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="rounded-xl p-6 border border-cyan-600 shadow-cyan-800 bg-[#141a35] text-center transition duration-300 pulse-glow hover:shadow-lg"
        >
          <p className="text-sm text-gray-400">{stat.label}</p>
          <p className="text-3xl font-bold text-cyan-300 mt-2">{stat.value}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AdminHome; */

import { motion } from "framer-motion";
import Spinner from "../../shared/Layout/Spinner";
import useAdminStats from "../../../hooks/useAdminStats";

const statCardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
    },
  }),
};

const AdminHome = () => {
  const { data, isPending, isError, error } = useAdminStats();

  if (isPending)
    return (
      <div className="text-center mt-10">
        <Spinner />
      </div>
    );

  if (isError)
    return (
      <div className="text-center mt-10 text-red-400">
        ❌ Failed to load stats: {error?.message}
      </div>
    );

  const {
    totalPayment,
    totalTourGuides,
    totalPackages,
    totalClients,
    totalStories,
  } = data || {};

  const stats = [
    {
      title: "💰 Total Payment",
      value: `$${totalPayment}`,
      desc: "Total revenue earned",
    },
    {
      title: "🧭 Tour Guides",
      value: totalTourGuides,
      desc: "Approved tour guides",
    },
    {
      title: "🌍 Packages",
      value: totalPackages,
      desc: "Available travel packages",
    },
    { title: "👥 Clients", value: totalClients, desc: "Registered users" },
    { title: "📖 Stories", value: totalStories, desc: "Travel stories posted" },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4 md:px-10 py-8 space-y-4"
      >
        <h1 className="text-2xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_#0ff]">
          🔥 Admin Control Center
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Welcome to your command hub! This dashboard gives you real-time
          insights into the DeshGuide ecosystem — from{" "}
          <span className="text-cyan-400 font-medium">total earnings</span> and
          <span className="text-blue-400 font-medium">
            {" "}
            registered clients
          </span>{" "}
          to
          <span className="text-purple-400 font-medium">
            {" "}
            published packages
          </span>{" "}
          and
          <span className="text-pink-400 font-medium"> travel stories</span>.
          Everything is powered by your leadership and vision.
        </p>
        <p className="text-sm text-gray-500 italic">
          Keep monitoring. Keep scaling. DeshGuide thrives under your watch.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-10 bg-gradient-to-br from-[#0d0f23] via-[#11152d] to-[#161a36] rounded-lg shadow-2xl"
        data-aos="fade-up"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={statCardVariants}
            initial="initial"
            animate="animate"
            custom={i}
            whileHover={{ scale: 1.04 }}
            className="stat border border-cyan-600/40 bg-[#13172e] rounded-2xl shadow-lg glow-border pulse-glow transition-all duration-300 hover:shadow-cyan-500/40 hover:border-cyan-400"
          >
            <div className="stat-title text-gray-400 text-sm">{stat.title}</div>
            <div className="stat-value text-cyan-300 text-3xl font-extrabold mt-2">
              {stat.value}
            </div>
            <div className="stat-desc text-gray-500 text-xs mt-1">
              {stat.desc}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AdminHome;
