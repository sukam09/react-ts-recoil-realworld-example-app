import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";

import {} from "../../state";

const LogoutHeader = () => {
  return (
    <>
      <li className="nav-item">
        <NavLink
          to="/login"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Sign in
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/register"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Sign up
        </NavLink>
      </li>
    </>
  );
};

export default LogoutHeader;
