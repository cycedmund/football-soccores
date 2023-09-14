export const fetchFixtures = async () => {
  const url = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7b08966adamsh59c126ab85a1048p162786jsn12d7f9e32f8c",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
};
