const MainFixtureDetails = ({ fixture }) => {
  return (
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

        <p className="w-[70%] text-left">{fixture.teams.home.name}</p>

        <p
          className={`w-[20%] text-center ${
            fixture.fixture.status.short === "FT" ||
            fixture.fixture.status.short === "NS"
              ? ""
              : "text-red-700"
          } `}
        >
          {fixture.goals.home === null ? "-" : fixture.goals.home}
        </p>
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

        <p className="w-[70%] text-left">{fixture.teams.away.name}</p>

        <p
          className={`w-[20%] text-center ${
            fixture.fixture.status.short === "FT" ||
            fixture.fixture.status.short === "NS"
              ? ""
              : "text-red-700"
          } `}
        >
          {fixture.goals.away === null ? "-" : fixture.goals.away}
        </p>
      </section>
    </article>
  );
};

export default MainFixtureDetails;
