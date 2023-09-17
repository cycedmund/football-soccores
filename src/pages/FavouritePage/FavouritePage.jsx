import { Link } from "react-router-dom";

const FavouritePage = ({ favTeam, handleDeleteFavTeam }) => {
  return (
    <div className="flex justify-center items-center bg-slate-900">
      <main className="grid grid-cols-2 gap-4 py-10 ">
        {favTeam.map((team) => {
          return (
            <div
              className="card w-96 bg-slate-700 shadow-lg pt-5"
              key={team.teamid}
            >
              <figure>
                <Link to="/standings">
                  <img src={team.logo} alt={team.name} />
                </Link>
              </figure>
              <div className="card-body">
                <div className="badge badge-secondary mx-auto">Favourited</div>
                <h2 className="card-title mx-auto">{team.name}</h2>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDeleteFavTeam(team.id)}
                    className="badge badge-outline badge-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default FavouritePage;
