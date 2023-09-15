import { Link } from "react-router-dom";
import { FiStar } from "react-icons/fi";

const TeamCard = ({ team, handleAddFavTeam, isFavourited }) => {
  return (
    <div className="card text-white">
      <div className="card">
        <figure>
          <img src={team.logo} alt={team.name} width={100} />
        </figure>
        <h2 className="card-title text-base mx-auto m-3">{team.name}</h2>
        <div className="card-actions justify-center">
          <Link to={`/teams/${team.id}`} className="btn btn-primary btn-xs">
            Squad
          </Link>
          <FiStar
            className={`text-2xl ${
              isFavourited ? "fill-yellow-500 text-yellow-500" : ""
            }`}
            onClick={() => {
              handleAddFavTeam(team.name, team.id, team.logo);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
