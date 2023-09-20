import { useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainNavbar from "./components/Navbar/MainNavbar";
import Footer from "./components/Footer/Footer";
import LivePage from "./pages/LivePage/LivePage";
import FixtureInfoPage from "./components/FixtureInfo/FixtureInfoPage/FixtureInfoPage";
import StandingPage from "./pages/StandingPage/StandingPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import TeamsPage from "./pages/TeamPage/TeamsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TeamInfo from "./pages/TeamPage/TeamInfo";
import { dataStandings } from "./data/standings/mock-standings";
import doPostFavTeam from "./utils/crudapi/createapi";
import doDeleteFavTeam from "./utils/crudapi/deleteapi";
import doFetchFavTeam from "./utils/crudapi/readapi";
import FinishedPage from "./pages/FinishedPage/FinishedPage";
import ScheduledPage from "./pages/ScheduledPage/ScheduledPage";
import MainLineupTable from "./components/FixtureInfo/FixtureInfoPage/LineupTable/MainLineupTable";
import { doFetchStandings } from "./utils/footballapi/standingsAPI/fetchStandings";
import { doFetchNonLiveFixtures } from "./utils/footballapi/otherFixturesAPI/fetchNonLiveFixtures";
import { mockOtherFixtures } from "./data/nonlivefixtures/nonlivefixtures-mock";

function App() {
  // const [otherFixtures, setOtherFixtures] = useState(null);
  const [otherFixtures, setOtherFixtures] = useState(mockOtherFixtures);
  // const [standings, setStandings] = useState([]);
  const [standings, setStandings] = useState(dataStandings);
  const [status, setStatus] = useState("idle");
  const [searchResults, setSearchResults] = useState([]);
  const [favTeam, setFavTeam] = useState([]);
  const [isToggleChecked, setIsToggleChecked] = useState(true);
  const navigate = useNavigate();

  //? ========= fetch live data =========

  useEffect(() => {
    setStatus("success");
  }, []);

  // useEffect(() => {
  //   const fetchBothData = async () => {
  //     try {
  //       setStatus("loading");
  //       const [nonLiveFixturesData, standingsData] = await Promise.all([
  //         doFetchNonLiveFixtures(),
  //         doFetchStandings(),
  //       ]);
  //       setOtherFixtures(nonLiveFixturesData);
  //       setStandings(standingsData);
  //       setStatus("success");
  //     } catch (error) {
  //       console.error(error);
  //       setStatus("error");
  //     }
  //   };
  //   fetchBothData();
  // }, []);

  // useEffect(() => {
  //   const fetchNonLiveFixtures = async () => {
  //     const nonLiveFixturesData = await doFetchNonLiveFixtures();
  //     setOtherFixtures(nonLiveFixturesData);
  //     console.log(nonLiveFixturesData);
  //   };
  //   fetchNonLiveFixtures();
  // }, []);

  // useEffect(() => {
  //   const fetchStandingsData = async () => {
  //     const standingsData = await doFetchStandings();
  //     setStandings(standingsData);
  //     console.log(standingsData);
  //   };

  //   fetchStandingsData();
  // }, []);

  //? ========= fetch live data =========

  const handleToggleChange = () => {
    setIsToggleChecked(!isToggleChecked);
  };

  const handleSearch = (searchInput) => {
    const results = standings.response[0].league.standings[0].filter((team) =>
      team.team.name.toLowerCase().includes(searchInput.toLowerCase())
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
    if (addFavInProgress.current) return;
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

  return (
    <div className="w-full-md:w-[700px] lg:w-[880px] h-screen m-auto">
      <MainNavbar
        searchResults={searchResults}
        handleSearch={handleSearch}
        standings={standings}
      />

      {status === "loading" && (
        <div className="flex h-[80%] items-center justify-center">
          <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
        </div>
      )}

      {status === "error" && <ErrorPage />}

      {
        status === "success" && (
          <Routes>
            <Route path="/" element={<LivePage />} />
            <Route
              path="/finished"
              element={
                <FinishedPage
                  otherFixtures={otherFixtures}
                  favTeam={favTeam}
                  isToggleChecked={isToggleChecked}
                  handleToggleChange={handleToggleChange}
                />
              }
            />
            <Route
              path="/scheduled"
              element={
                <ScheduledPage
                  otherFixtures={otherFixtures}
                  favTeam={favTeam}
                  isToggleChecked={isToggleChecked}
                  handleToggleChange={handleToggleChange}
                />
              }
            />
            <Route path="/:matchStatus/:matchID" element={<FixtureInfoPage />}>
              <Route
                path="/:matchStatus/:matchID/lineups"
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
                  favTeam={favTeam}
                />
              }
            />
            <Route
              path="/teams/:teamID"
              element={<TeamInfo standings={standings} />}
            />
            <Route
              path="/favourites"
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
      <Footer />
    </div>
  );
}

export default App;
