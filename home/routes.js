import "dotenv/config"
import fetch from "node-fetch";

async function retriveData(query) {
  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.API_KEY}`,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const data = await fetch(url, options);
    const json = await data.json();
    return json;
  } catch (e) {
    console.log(e);
    return {};
  }
}

function SearchRoutes(app) {
  app.get("/api/search/:query", async (req, res) => {
    const { query } = req.params;
    const data = await retriveData(query);
    res.send(data);
  });
}

export default SearchRoutes;
