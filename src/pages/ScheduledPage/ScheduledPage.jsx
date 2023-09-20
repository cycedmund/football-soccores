import { Link } from "react-router-dom";
import SecNavbar from "../../components/Navbar/SecNavbar";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";

const ScheduledPage = ({ otherFixtures }) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

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
      if (!value.startDate || !value.endDate) return true;
      const currentDate = new Date(date);
      return (
        currentDate >= new Date(value.startDate) &&
        currentDate <= new Date(value.endDate)
      );
    }
  );
  console.log("1", filteredFixtures);
  console.log("2", groupFixturesByDate);

  return (
    <>
      {/* <SecNavbar className="relative" />
      <div className="absolute top-[85px] right-52 w-[19%]">
        <Datepicker
          i18n={"en-sg"}
          primaryColor={"blue"}
          value={value}
          onChange={handleValueChange}
        />
      </div> */}
      <SecNavbar />
      <Datepicker
        i18n={"en-sg"}
        primaryColor={"blue"}
        value={value}
        onChange={handleValueChange}
      />
      {otherFixtures === null ? (
        <div className="flex h-[80%] items-center justify-center">
          <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 text-white font-ox">
          {filteredFixtures.map(([date, fixtures]) => (
            <main key={date}>
              <h2
                className="bg-slate-700 p-1 pl-2 
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
                          <section className="flex p-1">
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

                            <p className="w-[20%] text-center">
                              {fixture.goals.home}
                            </p>
                          </section>

                          <section className="flex p-1">
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

                            <p className="w-[20%] text-center">
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
          ))}
        </div>
      )}
    </>
  );
};

export default ScheduledPage;
