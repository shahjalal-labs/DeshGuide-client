random imageapi https://avatar.iran.liara.run/public => it's take time to load
https://avatar.iran.liara.run/public
random api image need to change image number like, 39 to 40, 0, 1=>
https://xsgames.co/randomusers/assets/avatars/male/39.jpg
design philosophy
DeshGuide follows a night-themed, glow-pulse infused, and developer-optimized design philosophy. The UI is built to feel futuristic, animated, and intuitively navigable, using technologies like Tailwind CSS + DaisyUI, Framer Motion, AOS (Animate on Scroll), and custom glow effects. The experience aims to balance aesthetic polish with practical UX — ensuring information is accessible, layouts are responsive, and all interactions feel alive with smooth transitions and hover feedback. The project uses React + TanStack Query with a fully modular architecture, and prioritizes privacy-respecting, CLI-first workflows (Neovim, Tmux, Hyprland). Pages and components are structured for scalability, reusability, and clean separation of concerns, while the UI conveys a confident, hacker-style vibe inspired by modern terminal UIs, blending tech appeal with user clarity. Every visual element has intention: from pulse-hover buttons to blurred glowing cards — nothing feels static or dull.

Use advance hover animation and blur color.

existing css

.flex-center {
@apply flex items-center justify-center;
}

.pulse-glow {
animation: pulse-glow 2s infinite;
box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

.glow-border {
@apply border border-indigo-500 rounded-lg shadow-lg;
box-shadow: 0 0 20px rgba(99, 102, 241, 0.6);
}

/_ Add this to your CSS or Tailwind layer _/
.glow-text {
text-shadow:
0 0 4px #6366f1,
0 0 8px #6366f1;
}

@keyframes jhilimili {
0% {
box-shadow: 0 0 5px #7f5af0;
}
50% {
box-shadow: 0 0 10px #7f5af0;
}
100% {
box-shadow: 0 0 5px #7f5af0;
}
}

.jhilimili-glow {
animation: jhilimili 1.5s infinite ease-in-out;
}

/_ tailwind.css or a component style file _/
.glow-effect {
box-shadow:
0 0 10px rgba(34, 211, 238, 0.7),
0 0 20px rgba(34, 211, 238, 0.5);
}
.hover\:glow-effect:hover {
box-shadow:
0 0 15px rgba(255, 255, 255, 0.8),
0 0 25px rgba(255, 255, 255, 0.3);
}

/_ Enhanced glow pulse _/
@keyframes pulse-glow {
0%,
100% {
box-shadow: 0 0 10px rgba(99, 102, 241, 0.6);
}
50% {
box-shadow: 0 0 20px rgba(99, 102, 241, 0.9);
}
}

/_ Backdrop blur support _/
@supports (backdrop-filter: blur(10px)) {
.backdrop-blur-sm {
backdrop-filter: blur(8px);
}
}
