import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaTable, FaStar } from "react-icons/fa";
import { GiSoccerKick } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";

const MainNavbar = ({ handleSearch, standings }) => {
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchSuggestion = (result) => {
    setSearchInput("");
    navigate(`/teams/${result.team.id}`);
  };

  const onClickSearch = () => {
    handleSearch(searchInput);
    setSearchInput("");
  };

  return (
    <nav className="navbar bg-base-100 font-ox" data-theme="luxury">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/standings">Standings</NavLink>
            </li>
            <li>
              <NavLink to="/teams">Teams</NavLink>
            </li>
            <li>
              <NavLink to="/favourites">Favourites</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-white text-2xl">
          <GiSoccerKick className="text-5xl text-emerald-600" />
          <div>
            SOC<span className="text-red-600">CORES</span>
          </div>
        </NavLink>
      </div>
      <div className="hidden lg:flex navbar-center">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <NavLink to="/standings">
              <FaTable />
              Standings
            </NavLink>
          </li>
          <li>
            <NavLink to="/teams">
              <RiTeamFill />
              Teams
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourites">
              <FaStar />
              Favourites
            </NavLink>
          </li>
        </ul>
      </div>
      {location.pathname === "/teams" && (
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search…"
              className="input input-bordered input-sm"
            />
            <button
              className="btn btn-square btn-sm text-xs"
              onClick={onClickSearch}
            >
              <FaSearch />
            </button>
          </div>
          {searchInput.length > 0 && (
            <div className="dropdown dropdown-open dropdown-left text-yellow-500 left-[35%]">
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 text-left shadow bg-slate-800 w-44 bg-opacity-90"
              >
                {standings.response[0].league.standings[0]
                  .filter((team) =>
                    team.team.name
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  )
                  .sort((a, b) => a.team.name.localeCompare(b.team.name))
                  .map((result) => (
                    <li
                      key={result.team.id}
                      className="cursor-pointer focus:bg-yellow-400"
                      onClick={() => handleSearchSuggestion(result)}
                    >
                      {result.team.name}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
