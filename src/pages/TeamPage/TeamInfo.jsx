import { squadData } from "../../data/squad/dummy-squad";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const TeamInfo = () => {
  const [playersInfo, setPlayersInfo] = useState(squadData); //supposed to be null
  const { teamID } = useParams();
  const idToNum = parseInt(teamID);

  // useEffect(() => {
  //   const fetchSquadData = async () => {
  //     // const url = `https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${idToNum}`;
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "7b08966adamsh59c126ab85a1048p162786jsn12d7f9e32f8c",
  //         "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  //       },
  //     };
  //     try {
  //       const response = await fetch(url, options);
  //       const data = await response.json();
  //       console.log("raw", data);
  //       setPlayersInfo(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchSquadData();
  // }, [idToNum]);

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
