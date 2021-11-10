//* Imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const body_parser = require("body-parser");
const router = require("./router/routes");

//*  Contants
const app = express();
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 5000;

//* Middlewares
app.use(body_parser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/api", router);

//* Routes
app.get("/", (req, res) => {
  res.send("Welcome to Productivity App! Be productive!!");
});

//* General Configuration
app.disable("x-powered-by");

app.listen(PORT, () => {
  console.log("Server up and running on PORT " + PORT);
});
