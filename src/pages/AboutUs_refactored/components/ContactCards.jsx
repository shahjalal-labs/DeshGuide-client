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
