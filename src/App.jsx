import { useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainNavbar from "./components/Navbar/MainNavbar";
import LivePage from "./pages/LivePages/LivePage";
import LiveInfoPage from "./pages/LivePages/LiveInfoPage";
import StandingPage from "./pages/StandingPage/StandingPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import TeamsPage from "./pages/TeamPage/TeamsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TeamInfo from "./pages/TeamPage/TeamInfo";
import { data } from "./data/live-fixtures/dummy-live-data";
import { dataStandings } from "./data/standings/dummy-standings";
import doPostFavTeam from "./utils/crudapi/createapi";
import doDeleteFavTeam from "./utils/crudapi/deleteapi";
import doFetchFavTeam from "./utils/crudapi/readapi";
import FinishedPage from "./pages/FinishedPage/FinishedPage";
import FinishedInfoPage from "./pages/FinishedPage/FinishedInfoPage";
import MainLineupTable from "./pages/FinishedPage/LineupTable/MainLineupTable";

function App() {
  // const [fixtures, setFixtures] = useState([]);
  // const [standings, setStandings] = useState([]);
  const [fixtures, setFixtures] = useState(data);
  const [standings, setStandings] = useState(dataStandings);
  const [status, setStatus] = useState("idle");
  const [searchResults, setSearchResults] = useState([]);
  const [favTeam, setFavTeam] = useState([]);
  const navigate = useNavigate();

  //? ========= fetch live data =========

  useEffect(() => {
    setStatus("success");
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const urlLiveScores =
  //       "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all";
  //     const urlStandings =
  //       "https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=39";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "7b08966adamsh59c126ab85a1048p162786jsn12d7f9e32f8c",
  //         "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       setStatus("loading");
  //       const responses = await Promise.all([
  //         fetch(urlLiveScores, options),
  //         fetch(urlStandings, options),
  //       ]);

  //       if (!responses.every((response) => response.ok)) {
  //         throw new Error("Network response was not OK");
  //       }
  //       const data = await Promise.all(responses.map((res) => res.json()));
  //       const [dataLiveScores, dataStandings] = data;
  //       const combinedData = {
  //         liveScores: dataLiveScores,
  //         standings: dataStandings,
  //       };
  //       setFixtures(combinedData.liveScores);
  //       setStandings(combinedData.standings);
  //       setStatus("success");
  //     } catch (error) {
  //       setStatus("error");
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  //? ========= fetch live data =========

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

  useEffect(() => {
    const fetchFavTeamData = async () => {
      const favTeamData = await doFetchFavTeam();
      setFavTeam(favTeamData);
    };
    fetchFavTeamData();
  }, []);

  const addFavInProgress = useRef(false);

  const handleAddFavTeam = async (name, teamid, logo) => {
    if (addFavInProgress.current) {
      return <progress className="progress w-56"></progress>;
    }

    addFavInProgress.current = true;

    try {
      if (favTeam.some((team) => team.teamid === teamid)) {
        const deleteFavTeam = favTeam.find((team) => team.teamid === teamid);
        handleDeleteFavTeam(deleteFavTeam.id);
      } else {
        const jsonData = await doPostFavTeam(name, teamid, logo);
        setFavTeam([...favTeam, { ...jsonData.fields, id: jsonData.id }]);
        addFavInProgress.current = true;
      }
    } catch (error) {
      console.error(error);
    } finally {
      addFavInProgress.current = false;
    }
  };

  const handleDeleteFavTeam = async (id) => {
    await doDeleteFavTeam(id);
    setFavTeam(
      favTeam.filter((team) => {
        return team.id !== id;
      })
    );
  };

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
    <div className="w-full-md:w-[700px] lg:w-[850px] h-screen m-auto">
      <MainNavbar
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

      {status === "loading" && (
        <div className="flex h-5/6 items-center justify-center">
          <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
        </div>
      )}

      {status === "error" && <ErrorPage />}

      {/* {
        fixtures.length !== 0 && ( */}
      {
        status === "success" && (
          <Routes>
            {/* change to data={fixtures} */}
            <Route path="/" element={<LivePage fixtures={fixtures} />} />
            <Route path="/finished" element={<FinishedPage />} />
            {/* see if can merge main into finished */}
            <Route
              path="/live/:matchID"
              element={<LiveInfoPage fixtures={fixtures} />}
            />
            <Route path="/finished/:matchID" element={<FinishedInfoPage />}>
              <Route
                path="/finished/:matchID/lineups"
                element={<MainLineupTable />}
              />
            </Route>
            <Route
              path="/standings"
              element={<StandingPage standings={standings} />}
            />
            <Route
              path="/teams"
              element={
                <TeamsPage
                  standings={standings}
                  handleAddFavTeam={handleAddFavTeam}
                  status={status}
                  favTeam={favTeam}
                />
              }
            />
            <Route path="/teams/:teamID" element={<TeamInfo />} />
            <Route
              path="/favourite"
              element={
                <FavouritePage
                  favTeam={favTeam}
                  handleDeleteFavTeam={handleDeleteFavTeam}
                />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )
        // )}
      }
    </div>
  );
}

export default App;
