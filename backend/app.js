const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const conn = require("./db/dbConnection.js");
const bcrypt = require("bcrypt");
// const User = require("./models/userModel.js");
const router = require("./routers/userRoute.js");

dotenv.config();
// MongoDB'ye bağlan
conn();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.get("/", (req, res) => {
  res.send("Hello ilos");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend API Bağlantısı Başarılı!" });
});

app.use("/users", router);


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
