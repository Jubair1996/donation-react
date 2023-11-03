import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div > 

      <nav className="flex justify-between items-center my-4">
        <Logo></Logo>
        <ul className="flex justify-center items-center gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
