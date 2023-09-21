import filterFixturesByDate from "./filterFixturesByDate";

const filterFixturesByFavTeam = (fixtures, startDate, endDate, favTeam) => {
  const filterGroup = filterFixturesByDate(fixtures, startDate, endDate);
  return filterGroup
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
};

export default filterFixturesByFavTeam;
