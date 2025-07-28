import { Link } from "react-router";
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
