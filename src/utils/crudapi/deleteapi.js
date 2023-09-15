const doDeleteFavTeam = async (id) => {
  const TOKEN =
    "patebhmai8LBWUFrm.a2898bcc697ba7bce4ac83299db5b0a7274eee2d2d6cb78e0002a7c1f4d61c28";
  const BASE_URL = "https://api.airtable.com/v0/appCxSnjT1j5ynhh7";
  const TABLE = "FavouriteTeam";

  const response = await fetch(`${BASE_URL}/${TABLE}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  await response.json();
};

export default doDeleteFavTeam;
