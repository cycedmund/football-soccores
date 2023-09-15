import TeamCard from "./TeamCard";

const TeamsPage = ({ standings, handleAddFavTeam, status, favTeam }) => {
  return (
    <>
      {status === "loading" && (
        <div className="flex h-5/6 items-center justify-center">
          <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
        </div>
      )}

      {status === "error" && <h2>Something went wrong...</h2>}

      {/* {status === "success" && ( */}
      {standings.length === 0 ? (
        <div className="flex h-5/6 items-center justify-center">
          <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-10 my-10">
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
