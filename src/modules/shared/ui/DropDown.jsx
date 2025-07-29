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
// import { Link } from "react-router";
// import { useState } from "react";
// import useAuth from "../../../hooks/useAuth";
// import Signout from "../../Auth/components/Signout";
// // import Avatar from "./Avatar";
//
// const DropDown = ({ children }) => {
//   const { user } = useAuth();
//   const [isOpen, setIsOpen] = useState(false);
//
//   const links = [
//     {
//       path: "#",
//       name: `${user?.displayName}`,
//       icon: "👤",
//       disabled: true,
//     },
//     {
//       path: "#",
//       name: `${user?.email}`,
//       icon: "✉️",
//       disabled: true,
//     },
//     {
//       path: "/auth/forgot-pass",
//       name: "Change Password",
//       icon: "🔑",
//       disabled: false,
//     },
//   ];
//
//   return (
//     <div className="dropdown w-fit dropdown-end relative">
//       <div
//         tabIndex={0}
//         role="button"
//         className="btn m-1 bg-slate-900/80 border-indigo-500/30 hover:border-indigo-400
//                    hover:bg-slate-800/90 hover:glow-effect transition-all duration-300
//                    backdrop-blur-sm glow-border"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="pulse-glow rounded-full p-1">{children}</div>
//       </div>
//
//       <ul
//         tabIndex={0}
//         className={`dropdown-content menu bg-slate-900/95 backdrop-blur-sm rounded-xl
//                    z-50 min-w-[280px] py-6 px-3 shadow-2xl border border-indigo-500/20
//                    transition-all duration-300 transform origin-top-right
//                    ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
//                    glow-effect`}
//         style={{
//           background:
//             "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)",
//           boxShadow: `
//             0 0 30px rgba(99, 102, 241, 0.3),
//             0 20px 40px rgba(0, 0, 0, 0.4),
//             inset 0 1px 0 rgba(255, 255, 255, 0.1)
//           `,
//         }}
//       >
//         {/* User Info Section */}
//         <div className="mb-4 pb-4 border-b border-indigo-500/20">
//           <div className="text-center">
//             <div
//               className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br
//                            from-indigo-500 to-purple-600 flex-center jhilimili-glow"
//             >
//               <span className="text-white font-bold text-lg">
//                 {user?.displayName?.charAt(0) || "U"}
//               </span>
//             </div>
//             <p className="text-indigo-300 glow-text font-medium text-sm">
//               Welcome back!
//             </p>
//           </div>
//         </div>
//
//         {/* Menu Items */}
//         {links.map((link, index) => (
//           <li key={`${link.path}-${index}`} className="mb-2">
//             <Link
//               to={link.path}
//               className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
//                          ${
//                            link.disabled
//                              ? "text-slate-400 cursor-default bg-slate-800/30"
//                              : "text-slate-200 hover:text-white hover:bg-indigo-600/20 hover:glow-effect hover:border-indigo-400/30 border border-transparent"
//                          }
//                          group relative overflow-hidden`}
//               onClick={link.disabled ? (e) => e.preventDefault() : undefined}
//             >
//               <span className="text-lg">{link.icon}</span>
//               <span
//                 className={`font-medium ${!link.disabled && "group-hover:glow-text"}`}
//               >
//                 {link.name}
//               </span>
//
//               {/* Hover overlay effect */}
//               {!link.disabled && (
//                 <div
//                   className="absolute inset-0 bg-gradient-to-r from-indigo-600/0
//                                via-indigo-600/10 to-indigo-600/0 translate-x-[-100%]
//                                group-hover:translate-x-[100%] transition-transform duration-700"
//                 />
//               )}
//             </Link>
//           </li>
//         ))}
//
//         {/* Divider */}
//         <div className="my-4 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
//
//         {/* Sign Out Section */}
//         <li className="mt-2">
//           <Signout>
//             <button
//               className="flex items-center gap-3 w-full px-4 py-3 rounded-lg
//                              text-red-400 hover:text-red-300 hover:bg-red-500/10
//                              hover:glow-effect transition-all duration-300 group
//                              border border-transparent hover:border-red-400/30
//                              relative overflow-hidden"
//             >
//               <span className="text-lg">🚪</span>
//               <span className="font-medium group-hover:glow-text">
//                 Sign Out
//               </span>
//
//               {/* Hover overlay effect */}
//               <div
//                 className="absolute inset-0 bg-gradient-to-r from-red-600/0
//                              via-red-600/10 to-red-600/0 translate-x-[-100%]
//                              group-hover:translate-x-[100%] transition-transform duration-700"
//               />
//             </button>
//           </Signout>
//         </li>
//
//         {/* Footer accent */}
//         <div className="mt-4 pt-3 border-t border-indigo-500/20">
//           <div className="flex justify-center">
//             <div
//               className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500
//                            rounded-full pulse-glow"
//             />
//           </div>
//         </div>
//       </ul>
//     </div>
//   );
// };
//
// export default DropDown;
//
// import { Link } from "react-router";
// import useAuth from "../../../hooks/useAuth";
// import Signout from "../../Auth/components/Signout";
// // import Avatar from "./Avatar";
//
// const DropDown = ({ children }) => {
//   const { user } = useAuth();
//
//   const links = [
//     {
//       path: "#",
//       name: `${user?.displayName}`,
//     },
//     {
//       path: "#",
//       name: `${user?.email}`,
//     },
//     {
//       path: "/auth/forgot-pass",
//       name: "Change Password",
//     },
//   ];
//   return (
//     <div className="dropdown  w-fit dropdown-end ">
//       <div tabIndex={0} role="button" className="bt m-1">
//         {children}
//         {/* <Avatar /> */}
//       </div>
//       <ul
//         tabIndex={0}
//         className="dropdown-content menu bg-base-100 rounded-box z-1 min-w-[225px] py-4 px-[1px] shadow-sm "
//       >
//         {links.map((link) => (
//           <li key={link.path}>
//             <Link to={link.path}>{link.name}</Link>
//           </li>
//         ))}
//         <Signout>
//           <button className="ml-3 cursor-pointer">Sign Out</button>
//         </Signout>
//       </ul>
//     </div>
//   );
// };
//
// export default DropDown;
