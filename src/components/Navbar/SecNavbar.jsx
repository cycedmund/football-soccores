import { NavLink, useLocation } from "react-router-dom";
import { FiStar } from "react-icons/fi";

const SecNavbar = ({ isToggleChecked, handleToggleChange }) => {
  const location = useLocation();

  return (
    <div className="flex menu menu-horizontal items-center text-gray-600 font-bold bg-gray-900">
      <ul className="flex w-[60%] space-x-20 text-base">
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
      <div className="flex w-[40%] justify-end">
        {(location.pathname === "/finished" ||
          location.pathname === "/scheduled") && (
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text pr-2">
                <FiStar
                  className={`text-2xl ${
                    isToggleChecked ? "fill-yellow-500 text-yellow-500" : ""
                  }`}
                />
              </span>
              <input
                type="checkbox"
                className="toggle"
                checked={isToggleChecked}
                onChange={handleToggleChange}
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecNavbar;
