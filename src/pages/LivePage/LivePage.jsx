import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainFixtureDetails from "../../components/MainFixturePageInfo/MainFixtureDetails";
import MainFixtureHeader from "../../components/MainFixturePageInfo/MainFixtureHeader";
import Loading from "../../components/Loading/Loading";
import SecNavbar from "../../components/Navbar/SecNavbar";
import { doFetchLiveFixtures } from "../../utils/footballapi/liveFixturesAPI/fetchLiveFixtures";
import { GiSoccerKick } from "react-icons/gi";

const LivePage = () => {
  const [liveFixtures, setLiveFixtures] = useState(null);

  // useEffect(() => {
  //   const fetchLiveFixturesData = async () => {
  //     const liveFixturesData = await doFetchLiveFixtures();
  //     setLiveFixtures(liveFixturesData);
  //   };

  //   fetchLiveFixturesData();
  // }, []);

  //* ========= refresh data =========
  // useEffect(() => {
  //   const refresh = setInterval(refreshLivePage, 300000);
  //   return () => clearInterval(refresh);
  // }, []);

  // const refreshLivePage = async () => {
  //   try {
  //     const result = await doFetchLiveFixtures();
  //     setLiveFixtures(result);
  //   } catch (error) {
  //     console.error("Error fetching data", error);
  //   }
  // };
  //* ========= refresh data =========

  return (
    <>
      <SecNavbar />
      {liveFixtures === null ? (
        <Loading />
      ) : liveFixtures.response.length === 0 ? (
        <main className="flex h-[74%] items-center justify-center text-center bg-slate-900 border-t-2 border-gray-800">
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
                  <MainFixtureHeader fixture={fixture} />
                  <div className="w-full flex p-1">
                    <div className="w-[10%] flex flex-col justify-center items-center text-red-600">
                      {fixture.fixture.status.short === "HT" ||
                      fixture.fixture.status.short === "FT"
                        ? `${fixture.fixture.status.short}`
                        : `${fixture.fixture.status.elapsed}\``}
                    </div>
                    <MainFixtureDetails fixture={fixture} />
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
