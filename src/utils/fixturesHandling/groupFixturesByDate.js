const groupFixturesByDate = (fixtures) => {
  const group = {};

  fixtures?.forEach((fixture) => {
    const date = new Date(fixture.fixture.date);
    const dateString = date.toLocaleDateString("en-SG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    if (!group[dateString]) {
      group[dateString] = [];
    }
    group[dateString].push(fixture);
  });

  return group;
};

export default groupFixturesByDate;
