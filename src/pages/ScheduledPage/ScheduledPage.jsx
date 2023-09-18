import { Link } from "react-router-dom";
import SecNavbar from "../../components/Navbar/SecNavbar";

const ScheduledPage = ({ otherFixtures }) => {
  return (
    <>
      <SecNavbar />
      {otherFixtures === null ? (
        <div className="flex h-5/6 items-center justify-center">
          <span className="mx-auto p-10 loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 text-white font-ox">
          {otherFixtures.response
            .filter((fixture) => fixture.fixture.status.short === "NS")
            .sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date))
            .map((fixture) => {
              const date = new Date(fixture.fixture.date);
              const day = date.getDate().toString().padStart(2, "0");
              const month = date.toLocaleString("en-US", { month: "short" });
              const year = date.getFullYear().toString().slice(-2);
              const hours = date.getHours().toString().padStart(2, "0");
              const minutes = date.getMinutes().toString().padStart(2, "0");
              return (
                <Link
                  to={`/scheduled/${fixture.fixture.id}`}
                  key={fixture.fixture.id}
                >
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
                      <div className="w-[10%] flex flex-col justify-center items-center text-center text-orange-800">
                        {`${day}-${month}-${year}`}
                        <br />
                        {`${hours}${minutes}H`}
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
        </div>
      )}
    </>
  );
};

export default ScheduledPage;
