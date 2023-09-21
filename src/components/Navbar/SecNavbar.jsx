import { NavLink, useLocation } from "react-router-dom";
import { FiStar } from "react-icons/fi";
import Datepicker from "react-tailwindcss-datepicker";

const SecNavbar = ({
  isToggleChecked,
  handleToggleChange,
  dateInput,
  handleDateInputChange,
}) => {
  const location = useLocation();

  return (
    <div className="flex menu menu-horizontal items-center text-gray-600 font-bold bg-gray-900">
      <ul className="flex w-[55%] space-x-14 text-base">
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
      {(location.pathname === "/finished" ||
        location.pathname === "/scheduled") && (
        <div className="flex w-[45%] justify-end items-center">
          <Datepicker
            i18n={"en-sg"}
            primaryColor={"blue"}
            value={dateInput}
            onChange={handleDateInputChange}
          />
          <div className="form-control pl-5">
            <label className="label cursor-pointer">
              <span className="label-text pr-2">
                <span
                  className="flex items-center tooltip tooltip-bottom tooltip-info cursor-default"
                  data-tip="Fav Team(s) Matches"
                >
                  <FiStar
                    className={`text-2xl ${
                      isToggleChecked ? "fill-yellow-500 text-yellow-500" : ""
                    }`}
                  />
                </span>
              </span>
              <input
                type="checkbox"
                className={`toggle ${isToggleChecked ? "bg-yellow-500" : ""}`}
                checked={isToggleChecked}
                onChange={handleToggleChange}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecNavbar;
