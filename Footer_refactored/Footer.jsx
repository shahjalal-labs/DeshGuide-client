import FooterColumns from './components/FooterColumns';
import FooterCopyright from './components/FooterCopyright';
import useFooterAnimation from './hooks/useFooterAnimation';

const Footer = () => {
  useFooterAnimation();
  
  return (
    <div className="max-container">
      <footer className="bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a] text-gray-300 px-6 py-10">
        <FooterColumns />
      </footer>
      <FooterCopyright />
    </div>
  );
};

export default Footer;
