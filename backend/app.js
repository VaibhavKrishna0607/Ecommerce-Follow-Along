const express = require("express");
const app = express();
const user = require("./controller/userController");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middleware/error");

app.use(errorHandler);

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.use(cors());

app.use("/api/v2/user", user);

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config.env",
  });
}

app.get("/", (_req, res) => {
  return res.send("Welcome to backend");
});

module.exports = app;


