/* import FooterColumns from "./components/FooterColumns";
import FooterCopyright from "./components/FooterCopyright";

const Footer = () => {
  return (
    <div className="max-container" data-aos="flip-up">
      <footer className="bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a] text-gray-300 px-6 py-10">
        <FooterColumns />
      </footer>
      <FooterCopyright />
    </div>
  );
};

export default Footer; */

import FooterColumns from "./components/FooterColumns";
import FooterCopyright from "./components/FooterCopyright";

const Footer = () => {
  return (
    <div className="max-container mt-16 px-4">
      <footer className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] rounded-xl shadow-xl border border-gray-800 glass-effect px-6 py-12 text-gray-300">
        <div className="space-y-10">
          <FooterColumns />
        </div>
      </footer>

      <div className="mt-6 text-sm text-center text-gray-500 border-t border-gray-700 pt-4 glow-text">
        <FooterCopyright />
      </div>
    </div>
  );
};

export default Footer;
