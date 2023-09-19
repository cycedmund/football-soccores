import { Link } from "react-router-dom";

const FavouritePage = ({ favTeam, handleDeleteFavTeam }) => {
  const sortedFavTeam = [...favTeam].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return (
    <div className="flex justify-center items-center bg-slate-900">
      <main className="grid grid-cols-2 gap-4 py-10 ">
        {sortedFavTeam.map((team) => {
          return (
            <section
              className="card w-96 border-4 border-yellow-600/50 pt-5"
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
        })}
      </main>
    </div>
  );
};

export default FavouritePage;
