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
