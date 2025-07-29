import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Signout from "../../Auth/components/Signout";
// import Avatar from "./Avatar";

const DropDown = ({ children }) => {
  const { user } = useAuth();

  const links = [
    {
      path: "#",
      name: `${user?.displayName}`,
    },
    {
      path: "#",
      name: `${user?.email}`,
    },
    {
      path: "/auth/forgot-pass",
      name: "Change Password",
    },
  ];
  return (
    <div className="dropdown  w-fit dropdown-end ">
      <div tabIndex={0} role="button" className="bt m-1">
        {children}
        {/* <Avatar /> */}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 min-w-[225px] py-4 px-[1px] shadow-sm "
      >
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
        <Signout>
          <button className="ml-3 cursor-pointer">Sign Out</button>
        </Signout>
      </ul>
    </div>
  );
};

export default DropDown;
