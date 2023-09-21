import { useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LivePage from "./pages/LivePage/LivePage";
import FinishedPage from "./pages/FinishedPage/FinishedPage";
import StandingPage from "./pages/StandingPage/StandingPage";
import ScheduledPage from "./pages/ScheduledPage/ScheduledPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import TeamsPage from "./pages/TeamPage/TeamsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TeamInfo from "./pages/TeamPage/TeamInfo";
import FixtureInfoPage from "./components/DetailedFixtureInfo/FixtureInfoPage/FixtureInfoPage";
import MainNavbar from "./components/Navbar/MainNavbar";
import MainLineupTable from "./components/DetailedFixtureInfo/FixtureInfoComponents/FooterMatchDetails/LineupTable/MainLineupTable";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import doPostFavTeam from "./utils/crudapi/createapi";
import doDeleteFavTeam from "./utils/crudapi/deleteapi";
import doFetchFavTeam from "./utils/crudapi/readapi";
import { doFetchStandings } from "./utils/footballapi/standingsAPI/fetchStandings";
import { doFetchNonLiveFixtures } from "./utils/footballapi/otherFixturesAPI/fetchNonLiveFixtures";
import { toast, Toaster } from "react-hot-toast";

function App() {
  const [otherFixtures, setOtherFixtures] = useState(null);
  const [standings, setStandings] = useState([]);
  const [status, setStatus] = useState("idle");
  const [favTeam, setFavTeam] = useState(null);
  const [isToggleChecked, setIsToggleChecked] = useState(true);
  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchFavTeamData = async () => {
      const favTeamData = await doFetchFavTeam();
      setFavTeam(favTeamData);
    };
    fetchFavTeamData();
  }, []);

  const handleToggleChange = () => {
    setIsToggleChecked(!isToggleChecked);
  };

  //? ========== Searchbox ==========

  const handleSearch = (searchInput) => {
    const results = standings.response[0].league.standings[0].filter((team) =>
      team.team.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (results.length !== 1 && searchInput) {
      toast.error(
        "Invalid search input.\n\nPlease either indicate full team name or use the suggestions."
      );
    } else if (results.length === 1) {
      navigate(`/teams/${results[0].team.id}`);
    }
  };

  //? ========== Searchbox ==========

  //* ========== CRUD ==========
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

  //* ========== CRUD =========

  return (
    <div className="w-full-md:w-[700px] lg:w-[880px] h-screen m-auto">
      <Toaster
        toastOptions={{
          duration: 2000,
          style: { background: "#334155", color: "#fff" },
        }}
      />
      <MainNavbar handleSearch={handleSearch} standings={standings} />

      {status === "loading" && <Loading />}

      {status === "error" && <ErrorPage />}

      {status === "success" && (
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
      )}
      <Footer />
    </div>
  );
}

export default App;
