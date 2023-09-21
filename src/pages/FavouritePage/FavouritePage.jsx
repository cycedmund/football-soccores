import Loading from "../../components/Loading/Loading";
import { FiStar } from "react-icons/fi";
import FavouriteTeamCard from "./FavouriteTeamCard";

const FavouritePage = ({ favTeam, handleDeleteFavTeam }) => {
  if (favTeam === null) {
    return <Loading />;
  } else if (favTeam.length === 0) {
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
            <FavouriteTeamCard
              key={team.teamid}
              team={team}
              handleDeleteFavTeam={handleDeleteFavTeam}
            />
          );
        })}
      </main>
    </div>
  );
};

export default FavouritePage;
