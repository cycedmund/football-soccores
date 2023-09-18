import { Link } from "react-router-dom";

const StandingPage = ({ standings }) => {
  return standings.length === 0 ? (
    <div className="flex h-5/6 items-center justify-center">
      <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="overflow-x-auto bg-gray-900 text-white">
      <table className="table text-lg">
        <thead>
          <tr className="text-center text-lg">
            <th>#</th>
            <th>Team</th>
            <th></th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>G</th>
            <th>GD</th>
            <th>PTS</th>
            <th>FORM</th>
          </tr>
        </thead>
        <tbody>
          {standings.response[0].league.standings[0].map((club) => (
            <tr key={club.team.id} className="text-center bg-gray-800">
              <td
                className={`badge badge-lg mt-5 ${
                  club.rank <= 4 ? `badge-primary` : `badge-ghost`
                }`}
              >
                {club.rank}
              </td>
              <td>
                <Link to={`/teams/${club.team.id}`}>
                  <img
                    className="mx-auto hover"
                    src={club.team.logo}
                    alt={club.team.name}
                    width={50}
                  />
                </Link>
              </td>
              <td className="text-left hover">{club.team.name}</td>
              <td>{club.all.played}</td>
              <td>{club.all.win}</td>
              <td>{club.all.draw}</td>
              <td>{club.all.lose}</td>
              <td>
                {club.all.goals.for}:{club.all.goals.against}
              </td>
              <td>{club.goalsDiff}</td>
              <td>{club.points}</td>
              <td>
                {club.form
                  .slice(0, 5)
                  .split("")
                  .map((result, index) => (
                    <kbd
                      className={`kbd kbd-sm p-1 ${
                        result === "W"
                          ? "bg-green-800"
                          : result === "L"
                          ? "bg-red-800"
                          : "bg-gray-800"
                      }`}
                      key={index}
                    >
                      {result}
                    </kbd>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingPage;
