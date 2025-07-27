
#!/bin/bash

mkdir -p src/pages/AboutUs_refactored/components
mkdir -p src/pages/AboutUs_refactored/constants

cat > src/pages/AboutUs_refactored/AboutUs.jsx << 'EOF'
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
EOF

cat > src/pages/AboutUs_refactored/components/AboutIntro.jsx << 'EOF'
import { motion } from "framer-motion";

const AboutIntro = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="max-w-5xl mx-auto text-center"
  >
    <h1 className="text-4xl md:text-5xl font-bold glow-border pb-4">
      About DeshGuide & The Developer
    </h1>
    <p className="text-lg text-gray-300">
      Night-themed. Hacker-vibed. Built for clarity, speed, and immersive UX.
    </p>
  </motion.div>
);

export default AboutIntro;
EOF

cat > src/pages/AboutUs_refactored/components/DesignPhilosophy.jsx << 'EOF'
const DesignPhilosophy = () => (
  <div data-aos="fade-up" className="mt-16 space-y-6 max-w-5xl mx-auto">
    <h2 className="text-3xl font-semibold pulse-glow">🎨 Design Philosophy</h2>
    <p className="text-gray-400">
      DeshGuide follows a <span className="text-blue-400">glow-pulse infused</span>,
      terminal-inspired aesthetic powered by
      <span className="text-purple-400"> Tailwind CSS + DaisyUI</span>,
      <span className="text-green-400"> Framer Motion</span>, and
      <span className="text-pink-400"> AOS animations</span>.
    </p>
    <p className="text-gray-400">
      Inspired by modern terminal UIs and built for
      <span className="text-yellow-400"> CLI-first developers</span>,
      DeshGuide delivers a <span className="text-cyan-400">futuristic</span>,
      responsive, and expressive UI — ensuring performance and aesthetics work hand in hand.
    </p>
    <p className="text-gray-400">
      From blurred glowing cards to smooth hover feedbacks — nothing feels static or dull.
    </p>
  </div>
);

export default DesignPhilosophy;
EOF

cat > src/pages/AboutUs_refactored/components/AboutDeveloper.jsx << 'EOF'
const AboutDeveloper = () => (
  <div data-aos="fade-up" className="mt-16 space-y-8 max-w-5xl mx-auto">
    <div className="flex flex-col items-center">
      <img
        src="/assets/Banner.jpg"
        alt="mdshahjalal5"
        className="rounded-2xl shadow-xl border-4 border-blue-500 w-64 mb-4"
      />
      <h2 className="text-3xl font-bold text-white">
        👋 Assalamu Alaikum, I'm Md. Shahjalal
      </h2>
      <p className="text-lg text-gray-400 max-w-3xl text-center mt-2">
        Experienced <span className="text-lime-400 font-medium">MERN Stack Developer</span> focused on building scalable,
        maintainable, and high-performance web apps using clean architecture and modern best practices.
      </p>
      <div className="mt-4 text-sm text-gray-400">
        Hyprland • Neovim • Zsh • Tmux • Terminal-first Linux workflow
      </div>
    </div>
  </div>
);

export default AboutDeveloper;
EOF

cat > src/pages/AboutUs_refactored/components/ContactCards.jsx << 'EOF'
import { contactInfo } from "../constants/about.constants";

const ContactCards = () => (
  <div
    data-aos="zoom-in"
    className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm"
  >
    {contactInfo.map(({ label, value, link }) => (
      <div
        key={label}
        className="bg-[#1e293b] p-6 rounded-xl glow-border hover:scale-105 transition-all duration-300"
      >
        <h3 className="text-xl font-semibold">{label}</h3>
        {link ? (
          <a
            href={link}
            className="text-sky-400 hover:underline block mt-2 break-words"
            target="_blank"
            rel="noreferrer"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-300 mt-2 break-words">{value}</p>
        )}
      </div>
    ))}
  </div>
);

export default ContactCards;
EOF

cat > src/pages/AboutUs_refactored/components/LiveProjects.jsx << 'EOF'
import { liveProjects } from "../constants/about.constants";

const LiveProjects = () => (
  <div data-aos="fade-up" className="mt-24 max-w-6xl mx-auto">
    <h2 className="text-3xl font-semibold text-center mb-12 pulse-glow">
      🚀 Live Projects
    </h2>
    <div className="grid gap-8 md:grid-cols-2">
      {liveProjects.map(({ title, desc, link, repo }) => (
        <div
          key={title}
          className="bg-[#1e293b] p-6 rounded-2xl glow-border hover:scale-[1.02] transition-all duration-300 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{desc}</p>
          <div className="flex gap-4 text-sm">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:underline"
            >
              🔗 Live
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:underline"
            >
              🛠 Code
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LiveProjects;
EOF

cat > src/pages/AboutUs_refactored/components/FooterNote.jsx << 'EOF'
const FooterNote = () => (
  <div className="mt-20 text-center text-gray-500 text-sm">
    <p>
      &copy; {new Date().getFullYear()} DeshGuide by Md. Shahjalal — Built
      with 💻 MERN, ⚙️ Neovim, ✨ Framer Motion
    </p>
  </div>
);

export default FooterNote;
EOF

cat > src/pages/AboutUs_refactored/constants/about.constants.js << 'EOF'
export const contactInfo = [
  { label: "📧 Email", value: "muhommodshahjalal@gmail.com" },
  { label: "📱 Phone", value: "01540325659" },
  {
    label: "💼 LinkedIn",
    value: "linkedin.com/in/shahjalal-mern/",
    link: "https://www.linkedin.com/in/shahjalal-mern/",
  },
  {
    label: "🐙 GitHub",
    value: "github.com/shahjalal-labs",
    link: "https://github.com/shahjalal-labs",
  },
];

export const liveProjects = [
  {
    title: "🌐 shahjalal-portfolio-v2",
    desc: "Modern animated portfolio showcasing skills, workflow, and aesthetics.",
    link: "http://shahjalal-mern.surge.sh",
    repo: "https://github.com/shahjalal-labs/shahjalal-portfolio-v2",
  },
  {
    title: "🍲 FlavorBook",
    desc: "Recipe sharing, chef marketplace, and food blog — all in one.",
    link: "https://flavor-book.surge.sh",
    repo: "https://github.com/shahjalal-labs/flavor-book-client",
  },
  {
    title: "🎓 EduVerse",
    desc: "Group assignment & peer evaluation platform for students and teachers.",
    link: "https://edu-verse.surge.sh",
    repo: "https://github.com/shahjalal-labs/eduverse-client",
  },
  {
    title: "📦 WorkElevate",
    desc: "Smart job portal for BD — fast, sleek, and employer-focused.",
    link: "https://workelevate.surge.sh",
    repo: "https://github.com/shahjalal-labs/WorkElebate/tree/main/client-WorkElebate",
  },
  {
    title: "🧭 Gontobbo (Ongoing)",
    desc: "Automated parcel infrastructure with real-time tracking.",
    link: "https://workelevate.surge.sh",
    repo: "https://github.com/yourname/codeverse",
  },
];
EOF

cat > src/pages/AboutUs_refactored/index.js << 'EOF'
export { default } from "./AboutUs";
EOF

git add src/pages/AboutUs_refactored
git commit -m "refactor: added improved AboutUs version"
EOF
