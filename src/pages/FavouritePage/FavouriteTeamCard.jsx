import { Link } from "react-router-dom";

const FavouriteTeamCard = ({ team, handleDeleteFavTeam }) => {
  return (
    <section className="card w-96 border-4 border-slate-500/50 pt-5">
      <figure>
        <Link to="/finished">
          <img src={team.logo} alt={team.name} width={130} />
        </Link>
      </figure>
      <div className="card-body">
        <div className="badge badge-secondary mx-auto">Favourited</div>
        <h2 className="card-title mx-auto text-white">{team.name}</h2>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleDeleteFavTeam(team.id)}
            className="badge badge-outline badge-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default FavouriteTeamCard;
