import { Link } from "react-router";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";
import Signout from "../../Auth/components/Signout";

const DropDown = ({ children }) => {
  const { user } = useAuth();

  const links = [
    {
      path: "#",
      name: `${user?.displayName}`,
      icon: "👤",
    },
    {
      path: "#",
      name: `${user?.email}`,
      icon: "✉️",
    },
    {
      path: "/auth/forgot-pass",
      name: "Change Password",
      icon: "🔒",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.05,
      background: "rgba(99, 102, 241, 0.15)",
      boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)",
    },
  };

  return (
    <div className="dropdown dropdown-end w-fit">
      <motion.div
        tabIndex={0}
        role="button"
        className="btn btn-ghost hover:bg-transparent"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>

      <motion.ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100/80 backdrop-blur-sm border border-indigo-500/20 rounded-box z-[999] min-w-[250px] p-2 shadow-xl glow-border"
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="px-4 py-3 border-b border-indigo-500/20">
          <h3 className="text-sm font-medium glow-text">User Menu</h3>
        </div>

        {links.map((link, i) => (
          <motion.li
            key={link.path}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="group"
          >
            <Link
              to={link.path}
              className="flex items-center gap-3 px-4 py-3 transition-all duration-200 hover:bg-indigo-500/10 rounded-lg"
            >
              <span className="text-lg">{link.icon}</span>
              <span className="text-sm group-hover:glow-text">{link.name}</span>
            </Link>
          </motion.li>
        ))}

        <motion.div
          className="px-4 py-3 border-t border-indigo-500/20"
          variants={itemVariants}
          custom={links.length}
        >
          <Signout>
            <motion.button
              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:text-red-300 rounded-lg transition-all duration-200 hover:bg-red-500/10"
              whileHover={{
                boxShadow: "0 0 10px rgba(239, 68, 68, 0.5)",
                scale: 1.02,
              }}
            >
              <span className="text-lg">🚪</span>
              <span className="hover:glow-text">Sign Out</span>
            </motion.button>
          </Signout>
        </motion.div>
      </motion.ul>
    </div>
  );
};

export default DropDown;
