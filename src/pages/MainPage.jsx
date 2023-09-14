import { Link } from "react-router-dom";

const MainPage = ({ fixtures }) => {
  return (
    <div className="grid grid-cols-1 text-white font-ox">
      {fixtures.response.map((fixture) => {
        return (
          <Link to={`/fixture/${fixture.fixture.id}`} key={fixture.fixture.id}>
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
                <p className="w-[95%] pl-3 flex items-center">
                  {fixture.league.country.toUpperCase()}: {fixture.league.name}
                </p>
              </header>

              {/* <div className="text-center">{fixture.fixture.status.short}</div> */}
              <div className="w-full flex p-1">
                <div className="w-[10%] flex flex-col justify-center items-center text-red-600">
                  {fixture.fixture.status.elapsed}`
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

                    <p className="w-[20%] text-center">{fixture.goals.home}</p>
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

                    <p className="w-[20%] text-center">{fixture.goals.away}</p>
                  </section>
                </article>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MainPage;
