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
