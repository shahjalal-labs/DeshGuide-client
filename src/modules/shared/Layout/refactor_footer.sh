#!/bin/bash

# Create the refactored folder structure
mkdir -p Footer_refactored/{components,constants,hooks}

# Main Footer component
cat > Footer_refactored/Footer.jsx << 'EOF'
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
EOF

# FooterColumns component
cat > Footer_refactored/components/FooterColumns.jsx << 'EOF'
import { Link } from "react-router-dom";
import { footerLinks } from "../constants/footerLinks";

const FooterColumns = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {footerLinks.map((column) => (
        <div key={column.title}>
          <h6 className="footer-title text-cyan-400 mb-2">{column.title}</h6>
          <ul className="space-y-1">
            {column.links.map((link) => (
              <li
                key={link.name}
                className="transition hover:translate-x-1 hover:text-cyan-400 duration-200"
              >
                {link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {link.icon && <span>{link.icon}</span>}
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.path} className="block w-full">
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterColumns;
EOF

# FooterCopyright component
cat > Footer_refactored/components/FooterCopyright.jsx << 'EOF'
import SocialIcons from './SocialIcons';

const FooterCopyright = () => {
  return (
    <footer className="border-t border-gray-700 bg-[#111111] text-gray-400 px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          className="fill-cyan-400 animate-pulse"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847l-2.433.809z" />
        </svg>
        <p className="text-sm">
          <span className="text-cyan-300 font-semibold">DeshGuide</span> —
          Your Trusted Travel Partner
        </p>
      </div>
      <SocialIcons />
    </footer>
  );
};

export default FooterCopyright;
EOF

# SocialIcons component
cat > Footer_refactored/components/SocialIcons.jsx << 'EOF'
import { socialIcons } from '../constants/socialIcons';

const SocialIcons = () => {
  return (
    <div className="flex gap-4 text-cyan-300">
      {socialIcons.map((icon) => (
        <a 
          key={icon.id} 
          href={icon.url} 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-200"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current hover:scale-110 transition duration-300"
          >
            <path d={icon.path} />
          </svg>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
EOF

# Footer links constants
cat > Footer_refactored/constants/footerLinks.js << 'EOF'
export const footerLinks = [
  {
    title: "Let's Connect",
    links: [
      {
        name: "GitHub",
        path: "https://github.com/shahjalal-labs/DeshGuide-client",
        icon: "👨‍💻",
        external: true
      },
      {
        name: "Portfolio",
        path: "http://shahjalal-labs.surge.sh",
        icon: "🎨",
        external: true
      },
      {
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/shahjalal-labs/",
        icon: "💼",
        external: true
      },
      {
        name: "Twitter",
        path: "https://twitter.com/shahjalal_labs",
        icon: "🐦",
        external: true
      },
      {
        name: "Facebook",
        path: "https://www.facebook.com/shahjalal.labs",
        icon: "📘",
        external: true
      }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about-us" },
      { name: "Contact Us", path: "/contact-us" },
      { name: "Project Info", path: "/project-info" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of use", path: "/terms-of-use" },
      { name: "Privacy policy", path: "/privacy-policy" },
      { name: "Cookie policy", path: "/cookie-policy" }
    ]
  }
];
EOF

# Social icons constants
cat > Footer_refactored/constants/socialIcons.js << 'EOF'
export const socialIcons = [
  {
    id: 1,
    name: "Twitter",
    url: "https://twitter.com/shahjalal_labs",
    path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
  },
  {
    id: 2,
    name: "YouTube",
    url: "#",
    path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
  },
  {
    id: 3,
    name: "Facebook",
    url: "https://www.facebook.com/shahjalal.labs",
    path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
  }
];
EOF

# useFooterAnimation hook
cat > Footer_refactored/hooks/useFooterAnimation.js << 'EOF'
import { useEffect } from 'react';
import AOS from 'aos';

const useFooterAnimation = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
    AOS.refresh();
  }, []);
};

export default useFooterAnimation;
EOF

# Add and commit changes
git add Footer_refactored/
git commit -m "refactor: added improved Footer version with better architecture"

echo "✅ Footer refactoring complete! New version created in Footer_refactored/"
echo "🚀 All files have been committed with message: 'refactor: added improved Footer version with better architecture'"
