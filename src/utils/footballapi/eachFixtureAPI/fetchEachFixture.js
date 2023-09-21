export const doFetchEachFixture = async (id) => {
  const urlFixture = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}&league=39`;
  // const urlFixture = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7b08966adamsh59c126ab85a1048p162786jsn12d7f9e32f8c",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(urlFixture, options);

    if (!response.ok) {
      throw new Error("Failed to fetch live fixtures");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
