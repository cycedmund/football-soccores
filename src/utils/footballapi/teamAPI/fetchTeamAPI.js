export const doFetchTeam = async (id) => {
  const urlTeam = `https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7b08966adamsh59c126ab85a1048p162786jsn12d7f9e32f8c",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(urlTeam, options);

    if (!response.ok) {
      throw new Error("Failed to fetch standings");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
