import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import ErrorPage from "../../../pages/ErrorPage/ErrorPage";
import Loading from "../../Loading/Loading";
import MainInfo from "../FixtureInfoComponents/MainMatchDetails/MainInfo";
import MatchTimer from "../../MatchTimer/MatchTimer";
import FooterInfo from "../FixtureInfoComponents/FooterMatchDetails/FooterInfo";
import useLineupToggle from "../../../hooks/useLineupToggle";
import { isValidFixtureID } from "../../../utils/IDcheck/isValidFixtureID";
import { doFetchEachFixture } from "../../../utils/footballapi/eachFixtureAPI/fetchEachFixture";

const Header = ({ fixture }) => (
  <header className="w-full bg-slate-800 flex mb-5 py-1">
    <img
      className="mx-auto ml-5"
      src={fixture.league.logo}
      alt={fixture.league.name}
      width={40}
    />
    <p className="w-[95%] pl-2 flex items-center text-yellow-600 text-xl">
      {fixture.league.name}
    </p>
  </header>
);

const Team = ({ team }) => (
  <div className="w-[35%]">
    <img className="mx-auto" src={team.logo} width={100} alt={team.name} />
    <p className="text-center text-mymed">{team.name}</p>
  </div>
);

const Score = ({ fixture }) => (
  <p
    className={`w-[30%] flex items-center justify-center text-mybig text-red-700 ${
      (fixture.fixture.status.short === "NS" ||
        fixture.fixture.status.short === "FT") &&
      `text-white`
    }`}
  >
    {fixture.goals.home} - {fixture.goals.away}
  </p>
);

const FixtureInfoPage = () => {
  const [matchEvents, setMatchEvents] = useState(null);
  const { matchID, matchStatus } = useParams();
  const numMatchId = parseInt(matchID);
  const { isLineupShown, handleLineupShown } = useLineupToggle(
    matchStatus,
    matchID
  );

  useEffect(() => {
    const fetchEachFixtureData = async (numMatchId) => {
      const eachFixtureData = await doFetchEachFixture(numMatchId);
      setMatchEvents(eachFixtureData);
    };
    fetchEachFixtureData(numMatchId);
  }, [numMatchId]);

  if (!matchEvents) {
    return <Loading />;
  }

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

  const results = matchEvents.response.filter((match) => {
    return match.fixture.id === numMatchId;
  });
  const fixture = results[0];

  return (
    <div className="bg-slate-900 text-white font-ox">
      <article className="items-center">
        <Header fixture={fixture} />

        <section className="w-full flex p-1">
          <Team team={fixture.teams.home} />
          <Score fixture={fixture} />
          <Team team={fixture.teams.away} />
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
            <MatchTimer
              date={fixture.fixture.date}
              status={fixture.fixture.status.long}
            />
          </div>
        )}
      </article>

      <MainInfo fixture={fixture} />

      <FooterInfo
        fixture={fixture}
        isLineupShown={isLineupShown}
        handleLineupShown={handleLineupShown}
      />
      <Outlet context={[matchEvents]} />
    </div>
  );
};

export default FixtureInfoPage;
