import { Outlet } from "react-router";
import Navbar from "./Navbar";
// import NavbarDrawer from "./NavbarDrawer";
import Footer from "./Footer_refactored/Footer";

const RootLayout = () => {
  return (
    <div className="">
      <div
        className="sticky top-0 z-50   
              text-white shadow-xl border border-[#1f1f1f]
              bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]
              backdrop-blur-md"
      >
        <Navbar />
      </div>
      {/* <NavbarDrawer /> */}
      <div className="min-h-[60vh] max-container">
        <Outlet />
      </div>
      <div className="bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a]">
        {/* <CommonFooter /> */}
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
