import { useOutletContext } from "react-router-dom";
import LineupRow from "./LineupRow";
import { FaPeopleGroup } from "react-icons/fa6";

const MainLineupTable = () => {
  const [matchEvents] = useOutletContext();

  //API startXI vs API players
  const findMatchingPlayers = (index, playerId) => {
    const allPlayers = matchEvents.response[0].players[index].players;
    const checkLineupId = playerId;
    return allPlayers.find((name) => {
      const checkAllPlayersId = name.player.id;
      return checkLineupId === checkAllPlayersId;
    });
  };

  return (
    <>
      {matchEvents.response[0].lineups.length === 0 ? (
        <>
          <h1 className="bg-slate-800 p-1 text-white text-l text-center">
            Match Lineups
          </h1>
          <main className="text-center text-gray-700 py-5">
            <FaPeopleGroup className="text-mybig mx-auto" />
            <p>No Lineup Data</p>
          </main>
        </>
      ) : (
        <>
          <h1 className="bg-slate-800 p-1 text-white text-l text-center">
            Match Lineups
          </h1>
          <section className="overflow-x-auto">
            <div className="flex">
              <table className="table mr-5 text-center">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th className="text-left">Name</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {matchEvents.response[0].lineups[0].startXI.map((player) => {
                    const matchingPlayer = findMatchingPlayers(
                      0,
                      player.player.id
                    );
                    return (
                      <LineupRow
                        key={player.player.id}
                        name={
                          matchingPlayer
                            ? matchingPlayer.player.name
                            : player.player.name
                        }
                        pos={player.player.pos}
                        num={player.player.number}
                        team={matchEvents.response[0].teams.home}
                        img={
                          matchingPlayer ? matchingPlayer.player.photo : null
                        }
                      />
                    );
                  })}
                </tbody>
              </table>

              <table className="table text-center ml-5">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th className="text-left">Name</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {matchEvents.response[0].lineups[1].startXI.map((player) => {
                    const matchingPlayer = findMatchingPlayers(
                      1,
                      player.player.id
                    );
                    return (
                      <LineupRow
                        key={player.player.id}
                        name={
                          matchingPlayer
                            ? matchingPlayer.player.name
                            : player.player.name
                        }
                        pos={player.player.pos}
                        num={player.player.number}
                        team={matchEvents.response[0].teams.away}
                        img={
                          matchingPlayer ? matchingPlayer.player.photo : null
                        }
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default MainLineupTable;
