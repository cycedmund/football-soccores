import { NavLink } from "react-router-dom";

const SecNavbar = () => {
  return (
    <div className="navbar bg-base-100" data-theme="night">
      <ul className="flex space-x-20">
        <li>
          <NavLink to="/" className="btn normal-case text-base">
            Live
          </NavLink>
        </li>
        <li>
          <NavLink to="/finished" className="btn normal-case text-base">
            Finished
          </NavLink>
        </li>
        <li>
          <NavLink to="/scheduled" className="btn normal-case text-base">
            Scheduled
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SecNavbar;
