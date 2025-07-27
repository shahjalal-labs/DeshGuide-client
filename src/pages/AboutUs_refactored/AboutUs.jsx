import { motion } from "framer-motion";
import AboutIntro from "./components/AboutIntro";
import DesignPhilosophy from "./components/DesignPhilosophy";
import AboutDeveloper from "./components/AboutDeveloper";
import ContactCards from "./components/ContactCards";
import LiveProjects from "./components/LiveProjects";
import FooterNote from "./components/FooterNote";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 md:px-20 py-10">
      <AboutIntro />
      <DesignPhilosophy />
      <AboutDeveloper />
      <ContactCards />
      <LiveProjects />
      <FooterNote />
    </div>
  );
};

export default AboutUs;
