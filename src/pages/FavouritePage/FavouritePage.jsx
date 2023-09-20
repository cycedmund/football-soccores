import { Link } from "react-router-dom";
import { FiStar } from "react-icons/fi";

const FavouritePage = ({ favTeam, handleDeleteFavTeam }) => {
  if (favTeam.length === 0) {
    return (
      <main className="flex h-[73%] items-center justify-center text-center">
        <section className="flex flex-col items-center">
          <FiStar className="text-6xl mx-auto" />
          <div className="mt-4">NO FAVOURITE TEAM FOUND</div>
        </section>
      </main>
    );
  }

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
                <Link to="/finished">
                  <img src={team.logo} alt={team.name} width={150} />
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
