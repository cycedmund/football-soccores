export const isValidFixtureID = (dataWithID, IdToMatch) => {
  const isValidFixtureID = dataWithID.some(
    (data) => data.fixture.id.toString() === IdToMatch
  );

  return isValidFixtureID;
};
