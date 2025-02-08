const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const conn = require("./db/dbConnection.js");

dotenv.config();
// MongoDB'ye bağlan
conn();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello ilos");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend API Bağlantısı Başarılı!" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
