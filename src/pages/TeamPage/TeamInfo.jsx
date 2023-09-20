import { squadData } from "../../data/squad/mock-squad";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { isValidTeamID } from "../../utils/IDcheck/isValidTeamID";
import ErrorPage from "../ErrorPage/ErrorPage";
import { doFetchTeam } from "../../utils/footballapi/teamAPI/fetchTeamAPI";

const TeamInfo = () => {
  const [playersInfo, setPlayersInfo] = useState(null); //supposed to be null
  const { teamID } = useParams();
  const idToNum = parseInt(teamID);

  // useEffect(() => {
  //   const fetchTeamData = async (idToNum) => {
  //     const teamData = await doFetchTeam(idToNum);
  //     setPlayersInfo(teamData);
  //   };
  //   fetchTeamData(idToNum);
  // }, [idToNum]);

  if (playersInfo) {
    const checkInvalidID = isValidTeamID(playersInfo.response, teamID);
    if (!checkInvalidID) {
      return <ErrorPage />;
    }
  }

  if (!playersInfo) {
    return (
      <div className="flex h-5/6 items-center justify-center">
        <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {playersInfo &&
        playersInfo.response[0].players.map((player) => (
          <div
            className="card lg:card-side bg-base-100 shadow-xl"
            key={player.id}
          >
            <figure>
              <img src={player.photo} alt={player.name} />
            </figure>
            <dl className="card-body">
              <dt className="card-title">{player.name}</dt>
              <dd>Number: {player.number}</dd>
              <dd>Age: {player.age}</dd>
              <dd>Position: {player.position}</dd>
            </dl>
          </div>
        ))}
    </div>
  );
};

export default TeamInfo;
