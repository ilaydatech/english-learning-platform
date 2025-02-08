const mongoose = require("mongoose");

const conn = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "ilaydasumer",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB success");
    })
    .catch((err) => {
      console.log(`DB connec error: ${err}`);
    });
};

module.exports = conn;

