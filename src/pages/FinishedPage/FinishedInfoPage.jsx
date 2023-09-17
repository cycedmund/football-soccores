import MainInfo from "../../components/FixtureInfo/MainInfo";
import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { arsdata } from "../../data/finished-fixtures/detailsArs";
import { isValidID } from "../../utils/IDcheck/isValidID";
import ErrorPage from "../ErrorPage/ErrorPage";

const FinishedInfoPage = () => {
  const [matchEvents, setMatchEvents] = useState(arsdata); //should be null
  const { matchID } = useParams();
  const numMatchId = parseInt(matchID);

  const checkInvalidID = isValidID(matchEvents.response, matchID);
  if (!checkInvalidID) {
    return <ErrorPage />;
  }

  // useEffect(() => {
  //   const fetchEvent = async () => {
  //     const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${numMatchId}`;
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
  //       const result = await response.json();
  //       console.log(result);
  //       setMatchEvents(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchEvent();
  // }, [numMatchId]);

  if (!matchEvents) {
    return (
      <div className="flex h-5/6 items-center justify-center">
        <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const results = matchEvents.response.filter((match) => {
    return match.fixture.id === numMatchId;
    //matchID from params is string, data from json is number
  });

  //return an array of 1 item
  const fixture = results[0];
  // console.log("data", fixture);

  return (
    <div className="bg-slate-900 text-white font-ox">
      <article className="items-center">
        <header className="w-full bg-slate-800 flex mb-5 p-2">
          <img
            className="mx-auto w-[5%] ml-5"
            src={fixture.league.logo}
            alt={fixture.league.name}
          />
          <p className="w-[95%] pl-5 flex items-center">
            {fixture.league.name}
          </p>
        </header>

        <section className="w-full flex p-1">
          <div className="w-[35%]">
            <img
              className="mx-auto"
              src={fixture.teams.home.logo}
              width={100}
              alt={fixture.teams.home.name}
            />
            <p className="text-center text-mymed">{fixture.teams.home.name}</p>
          </div>

          <p className="w-[30%] flex items-center justify-center text-mybig">
            {fixture.goals.home} - {fixture.goals.away}
          </p>

          <div className="w-[35%]">
            <img
              className="mx-auto"
              src={fixture.teams.away.logo}
              width={100}
              alt={fixture.teams.away.name}
            />
            <div className="text-center text-mymed">
              {fixture.teams.away.name}
            </div>
          </div>
        </section>
        <div className="text-center">{fixture.fixture.status.long}</div>
        {fixture.fixture.status.short === "FT" ? (
          <div className="text-center text-white">
            {fixture.fixture.status.short}
          </div>
        ) : (
          <div className="text-center text-red-600">
            {fixture.fixture.status.elapsed}`
          </div>
        )}
      </article>
      {/* above can be one component --> maybe can merge with the LivePage */}
      <MainInfo fixture={fixture} />

      <div className="grid grid-cols-1 text-center">
        {fixture.score.extratime.home ? (
          <div className="p-2">
            <h1 className="bg-slate-800 p-1 text-white text-l">Score</h1>
            Extra Time
            <br />
            {fixture.score.extratime.home} : {fixture.score.extratime.away}
          </div>
        ) : null}

        {fixture.score.penalty.home ? (
          <div className="p-2">
            <h1 className="bg-slate-800 p-1 text-white text-l">Score</h1>
            Penalties
            <br />
            {fixture.score.penalty.home} : {fixture.score.penalty.away}
          </div>
        ) : null}
      </div>
      <dl className="grid grid-cols-1 text-center">
        <Link to={`/finished/${matchID}/lineups`}>
          <dt className="bg-slate-800 p-1 text-white text-l">Details</dt>
        </Link>
        <dd className="p-2">Stadium - {fixture.fixture.venue.name}</dd>
        <dd className="p-2">Country - {fixture.league.country}</dd>
        <dd className="p-2">{fixture.league.round}</dd>
      </dl>
      <Outlet context={[matchEvents]} />
    </div>
  );
};

export default FinishedInfoPage;
