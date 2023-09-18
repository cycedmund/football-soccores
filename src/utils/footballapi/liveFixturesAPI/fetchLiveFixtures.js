export const doFetchLiveFixtures = async () => {
  // const urlLiveScores =
  //   "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all&league=39";
  const urlLiveScores =
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7b08966adamsh59c126ab85a1048p162786jsn12d7f9e32f8c",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(urlLiveScores, options);

    if (!response.ok) {
      throw new Error("Failed to fetch live fixtures");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

// useEffect(() => {
//   const fetchData = async () => {
//     const urlLiveScores =
// "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all";
//     const urlStandings =
//       "https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=39";
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key":
//           "7b08966adamsh59c126ab85a1048p162786jsn12d7f9e32f8c",
//         "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//       },
//     };

//     try {
//       setStatus("loading");
//       const responses = await Promise.all([
//         fetch(urlLiveScores, options),
//         fetch(urlStandings, options),
//       ]);

//       if (!responses.every((response) => response.ok)) {
//         throw new Error("Network response was not OK");
//       }
//       const data = await Promise.all(responses.map((res) => res.json()));
//       const [dataLiveScores, dataStandings] = data;
//       const combinedData = {
//         liveScores: dataLiveScores,
//         standings: dataStandings,
//       };
//       setFixtures(combinedData.liveScores);
//       setStandings(combinedData.standings);
//       setStatus("success");
//     } catch (error) {
//       setStatus("error");
//       console.error(error);
//     }
//   };
//   fetchData();
// }, []);
