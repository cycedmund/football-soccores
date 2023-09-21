import groupFixturesByDate from "./groupFixturesByDate";

const filterFixturesByDate = (fixtures, startDate, endDate) => {
  const group = groupFixturesByDate(fixtures);
  const filterGroup = Object.entries(group).filter(([date]) => {
    if (!startDate || !endDate) return true;
    const currentDate = new Date(date);
    return (
      currentDate >= new Date(startDate) && currentDate <= new Date(endDate)
    );
  });
  return filterGroup;
};

export default filterFixturesByDate;
