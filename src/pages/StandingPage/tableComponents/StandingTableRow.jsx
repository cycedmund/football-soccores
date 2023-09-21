import { Link } from "react-router-dom";

const ClubForm = ({ club }) => {
  return club.form
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
    ));
};

const StandingTableRow = ({ club }) => {
  return (
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
        <ClubForm club={club} />
      </td>
    </tr>
  );
};

export default StandingTableRow;
