export const isValidID = (dataWithID, IdToMatch) => {
  const isValidID = dataWithID.some(
    (data) => data.fixture.id === parseInt(IdToMatch)
  );

  return isValidID;
};
