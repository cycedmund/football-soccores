import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loading from "../../components/Loading/Loading";
import { isValidTeamID } from "../../utils/IDcheck/isValidTeamID";
import { doFetchTeam } from "../../utils/footballapi/teamAPI/fetchTeamAPI";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";
import { FaPersonCane } from "react-icons/fa6";

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
    <div className="grid grid-cols-2 gap-3 bg-slate-900 p-3 font-ox">
      {playersInfo &&
        playersInfo.response[0].players.map((player) => (
          <div
            className="card lg:card-side bg-base-100 shadow-xl"
            key={player.id}
          >
            <figure className="pl-3">
              <img src={player.photo} alt={player.name} />
            </figure>
            <dl className="card-body">
              <dt className="card-title text-yellow-700">{player.name}</dt>
              <dd>
                <span className="flex">
                  <AiOutlineFieldNumber className="text-2xl text-red-500" />
                  <span className="pl-2 text-emerald-600 text-xl">
                    {player.number}
                  </span>
                </span>
              </dd>
              <dd>
                <span className="flex">
                  <FaPersonCane className="text-2xl text-indigo-500" />
                  <span className="pl-2 text-lime-600 text-xl">
                    <span className="text-gray-500 text-base">Age: </span>{" "}
                    {player.age}
                  </span>
                </span>
              </dd>
              <dd>
                <span className="flex">
                  <GiPositionMarker className="text-2xl text-orange-500" />
                  <span className="pl-2 text-sky-600 text-xl">
                    <span className="text-gray-500 text-base">Pos: </span>
                    {player.position}
                  </span>
                </span>
              </dd>
            </dl>
          </div>
        ))}
    </div>
  );
};

export default TeamInfo;
