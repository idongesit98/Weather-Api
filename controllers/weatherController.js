const axios = require("axios");
const client = require("../config/redisClient");

const getWeather = async (req, res) => {
  const { location } = req.params;
  const apiKey = process.env.API_KEY;

  if (!location) {
    return res.status(400).send("Location is required");
  }

  try {
    //Try to get data from redis
    const weatherData = await client.get(location);

    if (weatherData) {
        console.log('Data retrieved from Redis cache')
      return res.json(JSON.parse(weatherData));
    }
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
    const { data } = await axios.get(apiUrl);
    console.log("Data retrieved from Visual Crossing API");

    //cache the weather data for an hour(3600 seconds)
    await client.setEx(location, 3600, JSON.stringify(data));
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching weather data", error: error.message });
  }
};

module.exports = getWeather;
