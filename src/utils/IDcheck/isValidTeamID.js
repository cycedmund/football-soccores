export const isValidTeamID = (dataWithID, IdToMatch) => {
  const isValidTeamID = dataWithID.some(
    (data) => data.team.id.toString() === IdToMatch
  );

  return isValidTeamID;
};
