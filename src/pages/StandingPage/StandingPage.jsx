import { Link } from "react-router-dom";

const StandingPage = ({ standings }) => {
  return standings.length === 0 ? (
    <div className="flex h-5/6 items-center justify-center">
      <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="overflow-x-auto bg-gray-900 text-white">
      <table className="table text-base">
        {/* head */}
        <thead>
          <tr className="text-center">
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
              <td className="badge badge-outline badge-md mt-5">{club.rank}</td>
              <td>
                <Link to={`/teams/${club.team.id}`}>
                  <img
                    className="mx-auto hover"
                    src={club.team.logo}
                    alt={club.team.name}
                    width={40}
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
              <td>{club.form}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingPage;
