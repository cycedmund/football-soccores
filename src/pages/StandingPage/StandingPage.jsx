import { Link } from "react-router-dom";

const tableHeaders = [
  { header: "#", data: "Rank" },
  { header: "TEAM", data: "Team" },
  { header: "", data: "" },
  { header: "MP", data: "Matches Played" },
  { header: "W", data: "Matches Won" },
  { header: "D", data: "Matches Drawn" },
  { header: "L", data: "Matches Loss" },
  { header: "G", data: "Goals Scored : Conceded" },
  { header: "GD", data: "Goal Difference" },
  { header: "PTS", data: "Points" },
  { header: "FORM", data: "Last 5 Results" },
];

const StandingPage = ({ standings }) => {
  return standings.response.length === 0 ? (
    <div className="flex h-[80%] items-center justify-center">
      <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="overflow-x-auto bg-gray-900 text-white">
      <table className="table text-lg">
        <thead>
          <tr className="text-center text-lg">
            {tableHeaders.map((header, index) => {
              return (
                <th key={index}>
                  <span
                    className="tooltip tooltip-bottom tooltip-primary cursor-default"
                    data-tip={header.data}
                  >
                    <span>{header.header}</span>
                  </span>
                </th>
              );
            })}
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
                    className="mx-auto"
                    src={club.team.logo}
                    alt={club.team.name}
                    width={50}
                  />
                </Link>
              </td>
              <td className="text-left">{club.team.name}</td>
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
                    <header
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
                    </header>
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

{
  /* <thead>
<tr className="text-center text-lg">
  <th>#</th>
  <th>Team</th>
  <th></th>
  <th
    className="tooltip tooltip-bottom tooltip-primary"
    data-tip="Matches Played"
  >
    <span>MP</span>
  </th>
  <th
    className="tooltip tooltip-bottom tooltip-primary"
    data-tip="Matches Won"
  >
    <span>W</span>
  </th>
  <th
    className="tooltip tooltip-bottom tooltip-primary"
    data-tip="Matches Drawn"
  >
    <span>D</span>
  </th>
  <th
    className="tooltip tooltip-bottom tooltip-primary"
    data-tip="Matches Loss"
  >
    <span>L</span>
  </th>
  <th
    className="tooltip tooltip-bottom tooltip-primary"
    data-tip="Goals Scored : Goals Conceded"
  >
    <span>G</span>
  </th>
  <th
    className="tooltip tooltip-bottom tooltip-primary"
    data-tip="Goal Difference"
  >
    <span>GD</span>
  </th>
  <th
    className="tooltip tooltip-bottom tooltip-primary"
    data-tip="Points Accumulated"
  >
    <span>PTS</span>
  </th>
  <th
    className="tooltip tooltip-bottom tooltip-primary"
    data-tip="Last 5 Matches Results"
  >
    <span>FORM</span>
  </th>
</tr>
</thead> */
}
