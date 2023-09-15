const doFetchFavTeam = async () => {
  const TOKEN =
    "patebhmai8LBWUFrm.a2898bcc697ba7bce4ac83299db5b0a7274eee2d2d6cb78e0002a7c1f4d61c28";
  const BASE_URL = "https://api.airtable.com/v0/appCxSnjT1j5ynhh7";
  const TABLE = "FavouriteTeam";

  const response = await fetch(`${BASE_URL}/${TABLE}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  const jsonData = await response.json();
  const favTeamData = jsonData.records.map((data) => ({
    ...data.fields,
    id: data.id,
  }));

  return favTeamData;
};

export default doFetchFavTeam;
