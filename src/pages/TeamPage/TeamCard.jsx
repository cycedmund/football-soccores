import { Link } from "react-router-dom";
import { FiStar } from "react-icons/fi";

const TeamCard = ({ team, handleAddFavTeam, isFavourited }) => {
  return (
    <main className="card text-white">
      <div className="card">
        <figure>
          <img src={team.logo} alt={team.name} width={90} />
        </figure>
        <h2 className="card-title text-lg mx-auto m-3">{team.name}</h2>
        <div className="card-actions justify-center">
          <Link to={`/teams/${team.id}`} className="btn btn-primary btn-xs">
            Squad
          </Link>
          <FiStar
            className={`text-2xl cursor-pointer ${
              isFavourited ? "fill-yellow-500 text-yellow-500" : ""
            }`}
            onClick={() => {
              handleAddFavTeam(team.name, team.id, team.logo);
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default TeamCard;
