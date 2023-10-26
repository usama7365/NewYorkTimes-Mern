const mongoose = require("mongoose");
const axios = require('axios');


exports.getTopStoriesController = async (req, res) => {
  try {
    const apiKey = 'G7AHROmyfL8uSCrBCl5zEOkCemKDMU46';
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`);
    res.json(response.data.results);
    console.log("hello there");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
