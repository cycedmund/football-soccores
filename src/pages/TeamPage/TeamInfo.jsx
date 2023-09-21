import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loading from "../../components/Loading/Loading";
import { isValidTeamID } from "../../utils/IDcheck/isValidTeamID";
import { doFetchTeam } from "../../utils/footballapi/teamAPI/fetchTeamAPI";

const TeamInfo = () => {
  const [playersInfo, setPlayersInfo] = useState(null); //supposed to be null
  const { teamID } = useParams();
  const idToNum = parseInt(teamID);

  useEffect(() => {
    const fetchTeamData = async (idToNum) => {
      const teamData = await doFetchTeam(idToNum);
      setPlayersInfo(teamData);
    };
    fetchTeamData(idToNum);
  }, [idToNum]);

  if (!playersInfo) {
    return <Loading />;
  }

  if (playersInfo) {
    const checkInvalidID = isValidTeamID(playersInfo.response, teamID);
    if (!checkInvalidID) {
      return <ErrorPage />;
    }
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
