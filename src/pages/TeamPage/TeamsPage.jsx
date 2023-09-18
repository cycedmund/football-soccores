import TeamCard from "./TeamCard";

const TeamsPage = ({ standings, handleAddFavTeam, favTeam }) => {
  return (
    <>
      {standings.length === 0 ? (
        <div className="flex h-5/6 items-center justify-center">
          <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-10 py-10 bg-slate-900">
          {standings.response[0].league.standings[0].map((club) => {
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
