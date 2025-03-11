const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const conn = require("./db/dbConnection.js");
const bcrypt = require("bcrypt");
// const User = require("./models/userModel.js");
const userRoute = require("./routers/userRoute.js");
const oxfordRoute = require("./routers/oxfordRoute.js"); // Oxford API route eklendi


dotenv.config();
// MongoDB'ye bağlan
conn();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173", // React frontend URL
    credentials: true, // Tarayıcı ile cookie/token paylaşımı için
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded( { extended: true }));


app.get("/", (req, res) => {
  res.send("Hello ilos");
});


app.use("/api", oxfordRoute);

app.use("/", userRoute);


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
