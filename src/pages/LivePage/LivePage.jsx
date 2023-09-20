import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SecNavbar from "../../components/Navbar/SecNavbar";
import { doFetchLiveFixtures } from "../../utils/footballapi/liveFixturesAPI/fetchLiveFixtures";
import { data } from "../../data/live-fixtures/mock-live-data";
import { GiSoccerKick } from "react-icons/gi";

const LivePage = () => {
  // const [liveFixtures, setLiveFixtures] = useState(null);
  const [liveFixtures, setLiveFixtures] = useState(data);

  // useEffect(() => {
  //   const fetchLiveFixturesData = async () => {
  //     const liveFixturesData = await doFetchLiveFixtures();
  //     setLiveFixtures(liveFixturesData);
  //     console.log(liveFixturesData);
  //   };

  //   fetchLiveFixturesData();
  // }, []);

  //* ========= refresh data =========
  // const refreshData = async () => {
  //   // const result = await fetchLiveFixturesData();
  //   setFixtures(result);
  //   console.log(result);
  //   console.log("Data refreshed");
  // };

  // useEffect(() => {
  //   const refreshInterval = setInterval(refreshData, 300000);
  //   return () => clearInterval(refreshInterval);
  // }, []);

  // const refresh = () => refreshData();

  //* ========= refresh data =========

  return (
    <>
      <SecNavbar />
      {liveFixtures === null ? (
        <main className="flex h-[94%] items-center justify-center">
          <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
        </main>
      ) : liveFixtures.response.length === 0 ? (
        <main className="flex h-[73%] items-center justify-center text-center">
          <section className="flex flex-col items-center">
            <GiSoccerKick className="text-6xl mx-auto" />
            <div className="mt-4">NO LIVE MATCHES AT THE MOMENT</div>
          </section>
        </main>
      ) : (
        <main className="grid grid-cols-1 text-white font-ox">
          {liveFixtures.response.map((fixture) => {
            return (
              <Link to={`/live/${fixture.fixture.id}`} key={fixture.fixture.id}>
                <div className="bg-slate-900 items-center">
                  <header
                    className="bg-slate-800 p-1 
              text-white 
              text-center 
              w-full flex"
                  >
                    <img
                      className="mx-auto w-[5%]"
                      src={fixture.league.flag}
                      alt={fixture.league.country}
                    />
                    <p className="w-[95%] pl-3 flex items-center text-yellow-600">
                      {fixture.league.country.toUpperCase()}:{" "}
                      {fixture.league.name}
                    </p>
                  </header>

                  <div className="w-full flex p-1">
                    <div className="w-[10%] flex flex-col justify-center items-center text-red-600">
                      {fixture.fixture.status.short === "HT" ||
                      fixture.fixture.status.short === "FT"
                        ? `${fixture.fixture.status.short}`
                        : `${fixture.fixture.status.elapsed}\``}
                    </div>

                    <article className="w-[90%]">
                      <section className="flex p-1 items-center">
                        <figure className="w-[10%]">
                          <img
                            className="mx-auto"
                            src={fixture.teams.home.logo}
                            width={30}
                            alt={fixture.teams.home.name}
                          />
                        </figure>

                        <p className="w-[70%] text-left">
                          {fixture.teams.home.name}
                        </p>

                        <p className="w-[20%] text-center text-red-700 text-lg">
                          {fixture.goals.home}
                        </p>
                      </section>

                      <section className="flex p-1 items-center">
                        <figure className="w-[10%]">
                          <img
                            className="mx-auto"
                            src={fixture.teams.away.logo}
                            width={30}
                            alt={fixture.teams.away.name}
                          />
                        </figure>

                        <p className="w-[70%] text-left">
                          {fixture.teams.away.name}
                        </p>

                        <p className="w-[20%] text-center text-red-700 text-lg">
                          {fixture.goals.away}
                        </p>
                      </section>
                    </article>
                  </div>
                </div>
              </Link>
            );
          })}
        </main>
      )}
    </>
  );
};

export default LivePage;
