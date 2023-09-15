const doPostFavTeam = async (name, teamid, logo) => {
  const TOKEN =
    "patebhmai8LBWUFrm.a2898bcc697ba7bce4ac83299db5b0a7274eee2d2d6cb78e0002a7c1f4d61c28";
  const BASE_URL = "https://api.airtable.com/v0/appCxSnjT1j5ynhh7";
  const TABLE = "FavouriteTeam";

  const data = {
    fields: {
      name,
      teamid,
      logo,
    },
  };

  try {
    const response = await fetch(`${BASE_URL}/${TABLE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
};

export default doPostFavTeam;
