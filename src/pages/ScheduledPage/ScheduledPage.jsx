import { Link } from "react-router-dom";
import SecNavbar from "../../components/Navbar/SecNavbar";
import useDatePicker from "../../hooks/useDatePicker";

const ScheduledPage = ({
  otherFixtures,
  favTeam,
  isToggleChecked,
  handleToggleChange,
}) => {
  const { dateInput, handleDateInputChange } = useDatePicker();

  const groupFixturesByDate = {};

  if (otherFixtures !== null) {
    const scheduledFixtures = otherFixtures.response
      .filter((fixture) => fixture.fixture.status.short === "NS")
      .sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date));

    scheduledFixtures.forEach((fixture) => {
      const date = new Date(fixture.fixture.date);
      const dateString = date.toLocaleDateString("en-SG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      if (!groupFixturesByDate[dateString]) {
        groupFixturesByDate[dateString] = [];
      }
      groupFixturesByDate[dateString].push(fixture);
    });
  }

  const filteredFixtures = Object.entries(groupFixturesByDate).filter(
    ([date]) => {
      if (!dateInput.startDate || !dateInput.endDate) return true;
      const currentDate = new Date(date);
      return (
        currentDate >= new Date(dateInput.startDate) &&
        currentDate <= new Date(dateInput.endDate)
      );
    }
  );

  const favTeamFixtures = filteredFixtures
    .map(([date, fixtures]) => {
      const fixturesOfFavTeam = fixtures.filter((fixture) => {
        return favTeam.some(
          (team) =>
            team.name === fixture.teams.home.name ||
            team.name === fixture.teams.away.name
        );
      });
      return [date, fixturesOfFavTeam];
    })
    .filter(([, fixtures]) => fixtures.length > 0);

  return (
    <>
      <SecNavbar
        className="relative"
        isToggleChecked={isToggleChecked}
        handleToggleChange={handleToggleChange}
        dateInput={dateInput}
        handleDateInputChange={handleDateInputChange}
      />
      {otherFixtures === null ? (
        <div className="flex h-[80%] items-center justify-center">
          <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 text-white font-ox">
          {(isToggleChecked ? favTeamFixtures : filteredFixtures).map(
            ([date, fixtures]) => (
              <main key={date}>
                <h2
                  className="bg-slate-700 py-2 pl-2 
              text-white 
              text-left
              text-lg 
              w-full"
                >
                  {date}
                </h2>
                {fixtures.map((fixture) => {
                  const date = new Date(fixture.fixture.date);
                  const time = date.toLocaleTimeString("en-SG", {
                    hour: "2-digit",
                    minute: "2-digit",
                  });
                  return (
                    <Link
                      to={`/scheduled/${fixture.fixture.id}`}
                      key={fixture.fixture.id}
                    >
                      <div className="bg-slate-900">
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
                          <div className="w-[10%] flex flex-col justify-center items-center text-center">
                            {time}
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

                              <p className="w-[20%] text-center">-</p>
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

                              <p className="w-[20%] text-center">-</p>
                            </section>
                          </article>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </main>
            )
          )}
        </div>
      )}
    </>
  );
};

export default ScheduledPage;
