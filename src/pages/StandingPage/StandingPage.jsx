import Loading from "../../components/Loading/Loading";
import StandingTableHeader from "./tableComponents/StandingTableHeader";
import StandingTableRow from "./tableComponents/StandingTableRow";

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
    <Loading />
  ) : (
    <div className="overflow-x-auto bg-gray-900 text-white">
      <table className="table text-lg">
        <thead>
          <tr className="text-center text-lg">
            {tableHeaders.map((header, index) => {
              return (
                <StandingTableHeader
                  key={index}
                  header={header.header}
                  data={header.data}
                />
              );
            })}
          </tr>
        </thead>
        <tbody>
          {standings.response[0].league.standings[0].map((club) => (
            <StandingTableRow key={club.team.id} club={club} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingPage;
