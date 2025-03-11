const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

// API Bilgileri
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;
const BASE_URL =
  process.env.BASE_URL ||
  "https://od-api-sandbox.oxforddictionaries.com/api/v2";

// API Desteklenen Diller Endpoint
router.get("/languages", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/languages`, {
      headers: {
        app_id: APP_ID,
        app_key: APP_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(
      "Oxford API Hatası:",
      error.response ? error.response.data : error.message
    );

    res.status(500).json({
      error: "API isteği başarısız!",
      details: error.response ? error.response.data : error.message,
    });
  }
});

module.exports = router;
