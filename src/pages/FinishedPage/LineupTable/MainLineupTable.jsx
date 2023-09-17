import { useOutletContext } from "react-router-dom";
import HomeRow from "./HomeRow";
import AwayRow from "./AwayRow";

const MainLineupTable = () => {
  const [matchEvents] = useOutletContext();
  const homeTeam = matchEvents.response[0].lineups[0].startXI;
  const awayTeam = matchEvents.response[0].lineups[1].startXI;

  const findMatching = (index, playerId) => {
    const allPlayers = matchEvents.response[0].players[index].players;
    const checkLineupId = playerId;
    return allPlayers.find((name) => {
      const checkAllPlayersId = name.player.id;
      return checkLineupId === checkAllPlayersId;
    });
  };

  return (
    <>
      <h1 className="bg-slate-800 p-1 text-white text-l text-center">
        Lineups
      </h1>
      <div className="overflow-x-auto">
        <div className="flex">
          <table className="table mr-5 text-left">
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {homeTeam.map((player) => {
                const matchingPlayer = findMatching(0, player.player.id);
                return (
                  <HomeRow
                    key={player.player.id}
                    name={
                      matchingPlayer
                        ? matchingPlayer.player.name
                        : player.player.name
                    }
                    pos={player.player.pos}
                    num={player.player.number}
                    team={matchEvents.response[0].teams.home}
                    img={matchingPlayer ? matchingPlayer.player.photo : null}
                  />
                );
              })}
            </tbody>
          </table>

          <table className="table text-left ml-5">
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {awayTeam.map((player) => {
                const matchingPlayer = findMatching(1, player.player.id);
                return (
                  <AwayRow
                    key={player.player.id}
                    name={
                      matchingPlayer
                        ? matchingPlayer.player.name
                        : player.player.name
                    }
                    pos={player.player.pos}
                    num={player.player.number}
                    team={matchEvents.response[0].teams.away}
                    img={matchingPlayer ? matchingPlayer.player.photo : null}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MainLineupTable;
