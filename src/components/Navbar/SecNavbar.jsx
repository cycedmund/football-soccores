import { NavLink } from "react-router-dom";

const SecNavbar = () => {
  return (
    <div className="flex menu menu-horizontal items-center text-gray-600 font-bold bg-gray-900">
      <ul className="flex space-x-20 text-base">
        <li>
          <NavLink to="/">LIVE</NavLink>
        </li>
        <li>
          <NavLink to="/finished">FINISHED</NavLink>
        </li>
        <li>
          <NavLink to="/scheduled">SCHEDULED</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SecNavbar;
