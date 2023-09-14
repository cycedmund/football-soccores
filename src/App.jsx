import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { fetchFixtures } from "./data/live-fixtures/fetch-live-data";
// import { fetchStandings } from "./data/standings/fetch-standings-data";
// import { fetchSquad } from "./data/squad/fetch-squad";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage";
import FixturePage from "./pages/FixturePages/FixturePage";
import StandingPage from "./pages/StandingPage/StandingPage";
import TeamsPage from "./pages/TeamPage/TeamsPage";
import TeamInfo from "./pages/TeamPage/TeamInfo";
import { data } from "./data/live-fixtures/dummy-live-data";
import { dataStandings } from "./data/standings/dummy-standings";
import { useNavigate } from "react-router-dom";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
// import { squadData } from "./data/squad/dummy-squad";

function App() {
  const [fixtures, setFixtures] = useState([data]);
  const [standings, setStandings] = useState([dataStandings]);
  const [status, setStatus] = useState("idle");
  const [searchResults, setSearchResults] = useState([]);
  const [favTeam, setFavTeam] = useState([]);

  const navigate = useNavigate();

  const handleSearch = (searchInput) => {
    const results = standings[0].response[0].league.standings[0].filter(
      (team) => team.team.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (results.length === 1) {
      setSearchResults(results);
      navigate(`/teams/${results[0].team.id}`);
    }

    setSearchResults([]);
  };

  const handleAddTeam = async (name, teamid, logo) => {
    const data = {
      fields: {
        name,
        teamid,
        logo,
      },
    };

    const TOKEN =
      "patebhmai8LBWUFrm.a2898bcc697ba7bce4ac83299db5b0a7274eee2d2d6cb78e0002a7c1f4d61c28";
    const BASE_URL = "https://api.airtable.com/v0/appCxSnjT1j5ynhh7";
    const TABLE = "FavouriteTeam";

    const response = await fetch(`${BASE_URL}/${TABLE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    setFavTeam([...favTeam, jsonData]);
  };

  //? ========= fetch live data =========

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const urlLiveScores =
  //       // "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all";
  //     const urlStandings =
  //       // "https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=39";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "7b08966adamsh59c126ab85a1048p162786jsn12d7f9e32f8c",
  //         "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       setStatus("loading")
  //       const responses = await Promise.all([
  //         fetch(urlLiveScores, options),
  //         fetch(urlStandings, options),
  //       ]);
  //       if (!responses.ok) {
  //                 throw new Error("Network response was not OK");
  //               }
  //       const data = await Promise.all(responses.map((res) => res.json()));
  //       const [dataLiveScores, dataStandings] = data;
  //       const combinedData = {
  //         liveScores: dataLiveScores,
  //         standings: dataStandings,
  //       };
  //       setStatus("success")
  //       setFixtures(combinedData.liveScores);
  //       setStandings(combinedData.standings);
  //     } catch (error) {
  //       setStatus("error")
  //       console.error(error);
  //     } finally {
  //       setStatus("idle")
  //     }
  //   };
  //   // fetchData();
  // }, []);

  if (status === "loading") {
    return (
      <div className="flex h-5/6 items-center justify-center">
        <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (status === "error") {
    return <h2>Something went wrong...</h2>;
  }
  //? ========= fetch live data =========

  //* ========= refresh data =========
  // const refreshData = async () => {
  //   // const result = await fetchFixtures();
  //   setFixtures(data);
  //   console.log(data);
  //   console.log("Data refreshed");
  // };

  // useEffect(() => {
  //   // Refresh data every 5 minutes (adjust as needed)
  //   const refreshInterval = setInterval(refreshData, 300000);

  //   return () => clearInterval(refreshInterval); // Clear the interval on component unmount
  // }, []); // Only run this effect once on component mount

  // const refresh = () => refreshData();

  //* ========= refresh data =========
  //temp reload
  const refresh = () => window.location.reload();

  return (
    <div className="w-full-md:w-[700px] lg:w-[800px] h-screen m-auto">
      <Navbar
        searchResults={searchResults}
        handleSearch={handleSearch}
        standings={standings}
      />

      <button
        onClick={refresh}
        className="btn btn-sm fixed bottom-3 right-2 z-40"
      >
        Refresh
      </button>

      {/* {status === "loading" && (
      <div className="flex h-5/6 items-center justify-center">
        <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
      </div>
    )}

    {status === "error" && <h2>Something went wrong...</h2>} */}
      {/* {status === "success" && (} */}

      {fixtures.length === 0 ? (
        <div className="flex h-5/6 items-center justify-center">
          <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <Routes>
          {/* change to data={fixtures} */}
          <Route path="/" element={<MainPage fixtures={fixtures[0]} />} />
          <Route
            path="/fixture/:matchID"
            element={<FixturePage fixtures={fixtures[0]} />}
          />
          <Route
            path="/standings"
            element={<StandingPage standings={standings[0]} />}
          />
          <Route
            path="/teams"
            // squad={squadData}
            element={
              <TeamsPage
                standings={standings[0]}
                handleAddTeam={handleAddTeam}
              />
            }
          />
          <Route path="/teams/:teamID" element={<TeamInfo />} />
          <Route
            path="/favourite"
            element={<FavouritePage handleAddTeam={handleAddTeam} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
