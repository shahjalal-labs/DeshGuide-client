import { motion } from "motion/react";
import { Link } from "react-router";
import { topToBottom } from "../../../animation/motion";
import useAuth from "../../../hooks/useAuth";
import Brand from "../ui/Brand";
import Avatar from "../ui/Avatar";
import { desktopNavLinks, mobileNavLinks } from "./navbarLinksConstant";
import DropDown from "../ui/DropDown";
import InversionToggle from "../ui/InversionToggle";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <motion.nav {...topToBottom} className="navbar max-container ">
      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="dropdown dropdown-bottom lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost border border-[#222] hover:bg-[#111] hover:shadow-[0_0_12px_#00FF9C] transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#00FF9C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 z-[999] shadow-xl rounded-xl border border-[#333] bg-[#0f172a]/90 text-white backdrop-blur-md space-y-1 min-w-[180px]"
          >
            {mobileNavLinks()}
          </ul>
        </div>

        {/* Logo */}
        <Brand />
      </div>
      {/* Center Section (Desktop Only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 font-medium tracking-wide">
          {desktopNavLinks().map((link, idx) => (
            <li
              key={idx}
              className="transition-all duration-200 hover:scale-105"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>{" "}
      {/* Right Section */}
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <DropDown>
              <Avatar />
            </DropDown>
            {/* <InversionToggle /> */}
          </div>
        ) : (
          <Link
            to="/auth/signin"
            className="px-4 py-2 rounded-lg bg-[#00BFFF] text-black font-semibold hover:scale-105 hover:shadow-[0_0_12px_#00BFFF] transition-all duration-200"
          >
            Sign In
          </Link>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
