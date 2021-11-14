//* Imports
const body_parser = require("body-parser");
const router = require("./router/routes");
const connectDB = require("./config/db");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
require("colors")

// Starting connection in DB
connectDB();

//*  Contants
const app = express();
dotenv.config({ path: "./backend/config/config.env" });
const PORT = process.env.PORT || 8000;


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
  console.log(`Server up and running on PORT ${PORT} `.bgCyan.black);
});
