import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { GiSoccerField } from "react-icons/gi";
import MainInfo from "../FixtureInfoComponents/MainInfo";
// import MatchTimer from "../../MatchTimer/MatchTimer";
import ErrorPage from "../../../pages/ErrorPage/ErrorPage";
import { isValidFixtureID } from "../../../utils/IDcheck/isValidFixtureID";
import { doFetchEachFixture } from "../../../utils/footballapi/eachFixtureAPI/fetchEachFixture";
import { arsdata } from "../../../data/finished-fixtures/detailsArs";
import useLineupToggle from "../../../hooks/useLineupToggle";

const FixtureInfoPage = () => {
  // const [matchEvents, setMatchEvents] = useState(null);
  const [matchEvents, setMatchEvents] = useState(arsdata);
  const { matchID, matchStatus } = useParams();
  const numMatchId = parseInt(matchID);
  const { isLineupShown, handleLineupShown } = useLineupToggle(
    matchStatus,
    matchID
  );

  // useEffect(() => {
  //   const fetchEachFixtureData = async (numMatchId) => {
  //     const eachFixtureData = await doFetchEachFixture(numMatchId);
  //     setMatchEvents(eachFixtureData);
  //   };
  //   fetchEachFixtureData(numMatchId);
  // }, [numMatchId]);

  if (
    matchStatus !== "live" &&
    matchStatus !== "finished" &&
    matchStatus !== "scheduled"
  ) {
    return <ErrorPage />;
  }

  if (matchEvents) {
    const checkInvalidID = isValidFixtureID(matchEvents.response, matchID);
    if (!checkInvalidID) {
      return <ErrorPage />;
    }
  }

  if (!matchEvents) {
    return (
      <div className="flex h-[80%] items-center justify-center">
        <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const results = matchEvents.response.filter((match) => {
    return match.fixture.id === numMatchId;
    //matchID from params is string, data from json is number
  });

  const fixture = results[0];

  return (
    <div className="bg-slate-900 text-white font-ox">
      <article className="items-center">
        <header className="w-full bg-slate-800 flex mb-5 p-2">
          <img
            className="mx-auto ml-5"
            src={fixture.league.logo}
            alt={fixture.league.name}
            width={50}
          />
          <p className="w-[95%] pl-2 flex items-center text-yellow-600 text-xl">
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

          <p
            className={`w-[30%] flex items-center justify-center text-mybig text-red-700 ${
              (fixture.fixture.status.short === "NS" ||
                fixture.fixture.status.short === "FT") &&
              `text-white`
            }`}
          >
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
        ) : fixture.fixture.status.short === "NS" ? (
          <div className="text-center text-white">
            {fixture.fixture.status.short}
          </div>
        ) : fixture.fixture.status.short === "HT" ? (
          <div className="text-center text-red-600">
            {fixture.fixture.status.short}
          </div>
        ) : (
          <div className="text-center text-red-600">
            {fixture.fixture.status.elapsed}`
            {/* <MatchTimer date={fixture.fixture.date} /> */}
          </div>
        )}
      </article>

      <MainInfo fixture={fixture} />

      <section className="grid grid-cols-1 text-center">
        <header className="flex items-center justify-center w-full bg-slate-800 space-x-10 py-1">
          <h2>Details</h2>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-white text-base pr-1">
                Lineups
              </span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                checked={isLineupShown}
                onChange={handleLineupShown}
              />
            </label>
          </div>
        </header>
        <p className="p-2">
          <GiSoccerField className="mx-auto text-mybig text-green-600" />{" "}
          {`(${fixture.fixture.venue.name})`}
        </p>
        <p className="p-2">
          <img
            src={fixture.league.flag}
            alt={fixture.league.country}
            width={50}
            className="mx-auto mb-3"
          />
          {`(${fixture.league.country})`}
        </p>
        <p className="p-2">{fixture.league.round}</p>
      </section>
      <Outlet context={[matchEvents]} />
    </div>
  );
};

export default FixtureInfoPage;
