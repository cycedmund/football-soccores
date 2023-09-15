const FavouritePage = ({ favTeam, handleDeleteFavTeam }) => {
  return (
    <div className="grid grid-cols-2 gap-4 my-10">
      {favTeam.map((team) => {
        return (
          <div
            className="card w-96 bg-slate-700 shadow-xl pt-5"
            key={team.teamid}
          >
            <figure>
              <img src={team.logo} alt={team.name} />
            </figure>
            <div className="card-body">
              <div className="badge badge-secondary mx-auto">Favourited</div>
              <h2 className="card-title mx-auto">{team.name}</h2>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDeleteFavTeam(team.id)}
                  className="badge badge-outline"
                >
                  Delete
                </button>
                <div className="badge badge-outline">Edit</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FavouritePage;
