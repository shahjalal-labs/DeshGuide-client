import { motion } from "framer-motion";
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

export default AdminHome;
