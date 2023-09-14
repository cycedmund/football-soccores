import { Link } from "react-router-dom";
import { FiStar } from "react-icons/fi";

const TeamsPage = ({ standings, handleAddTeam }) => {
  return (
    <>
      {standings.length === 0 ? (
        <div className="flex h-5/6 items-center justify-center">
          <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-10 my-10">
          {standings.response[0].league.standings[0].map((club) => (
            <div className="card text-white" key={club.team.id}>
              <div className="card">
                <figure>
                  <img src={club.team.logo} alt={club.team.name} width={100} />
                </figure>
                <h2 className="card-title text-base mx-auto m-3">
                  {club.team.name}
                </h2>
                <div className="card-actions justify-center">
                  <Link
                    to={`/teams/${club.team.id}`}
                    className="btn btn-primary btn-xs"
                  >
                    Squad
                  </Link>
                  <FiStar
                    onClick={() => {
                      handleAddTeam(
                        club.team.name,
                        club.team.id,
                        club.team.logo
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TeamsPage;
