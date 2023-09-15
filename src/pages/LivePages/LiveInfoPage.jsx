import { useParams } from "react-router-dom";
import MainInfo from "../../components/FixtureInfo/MainInfo";

const LiveInfoPage = ({ fixtures }) => {
  const { matchID } = useParams();
  //filter the api response, filter out each fixture id to see if match the param
  //if yes, then give me the result
  const results = fixtures.response.filter((match) => {
    return match.fixture.id === parseInt(matchID);
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

          <p className="w-[30%] flex items-center justify-center text-mybig text-red-700">
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

        {fixture.fixture.status.short === "HT" ? (
          <div className="text-center text-red-600">
            {fixture.fixture.status.short}
          </div>
        ) : (
          <div className="text-center text-red-600">
            {fixture.fixture.status.elapsed}`
          </div>
        )}
      </article>

      <MainInfo fixture={fixture} />

      <div className="grid grid-cols-1 text-center">
        {fixture.score.fulltime.home ? (
          <div className="p-2">
            <h1 className="bg-slate-800 p-1 text-white text-l">Score</h1>
            Full Time
            <br />
            {fixture.score.fulltime.home} : {fixture.score.fulltime.away}
          </div>
        ) : null}

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
        <dt className="bg-slate-800 p-1 text-white text-l">
          Match Information
        </dt>

        <dd className="p-2">Stadium - {fixture.fixture.venue.name}</dd>
        <dd className="p-2">Country - {fixture.league.country}</dd>
        <dd className="p-2">{fixture.league.round}</dd>
      </dl>
    </div>
  );
};

export default LiveInfoPage;
