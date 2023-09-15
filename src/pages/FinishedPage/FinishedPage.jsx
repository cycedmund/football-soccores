import { useEffect, useState } from "react";
import { finisheddata } from "../../data/finished-fixtures/finished";
import { Link } from "react-router-dom";
import SecNavbar from "../../components/Navbar/SecNavbar";

const FinishedPage = () => {
  const [finished, setFinished] = useState([finisheddata]);

  // useEffect(() => {
  //   const fetchFinishedFixtures = async () => {
  //     const url =
  //     // "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2023&from=2023-08-10&to=2023-09-15";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "7b08966adamsh59c126ab85a1048p162786jsn12d7f9e32f8c",
  //         "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchFinishedFixtures();
  // }, []);
  const fixtures = finished[0];
  // console.log(fixtures);

  return (
    <>
      <SecNavbar />
      <div className="grid grid-cols-1 text-white font-ox">
        {fixtures.response.map((fixture) => {
          return (
            <Link
              to={`/finished/${fixture.fixture.id}`}
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
                  <p className="w-[95%] pl-3 flex items-center">
                    {fixture.league.country.toUpperCase()}:{" "}
                    {fixture.league.name}
                    <img
                      className="w-[5%]"
                      src={fixture.league.logo}
                      alt={fixture.league.name}
                    />
                  </p>
                </header>

                <div className="w-full flex p-1">
                  <div className="w-[10%] flex flex-col justify-center items-center text-white">
                    {fixture.fixture.status.short}
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
    </>
  );
};

export default FinishedPage;
