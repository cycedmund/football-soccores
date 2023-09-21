import TeamCard from "./TeamCard";
import Loading from "../../components/Loading/Loading";

const TeamsPage = ({ standings, handleAddFavTeam, favTeam }) => {
  const sortedTeams = [...standings.response[0].league.standings[0]];
  sortedTeams.sort((a, b) => a.team.name.localeCompare(b.team.name));

  return (
    <>
      {sortedTeams.length === 0 ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 gap-10 py-10 bg-slate-900">
          {sortedTeams.map((club) => {
            const isFavourited = favTeam.some(
              (team) => team.teamid === club.team.id
            );
            return (
              <TeamCard
                key={club.team.id}
                team={club.team}
                handleAddFavTeam={handleAddFavTeam}
                isFavourited={isFavourited}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default TeamsPage;
