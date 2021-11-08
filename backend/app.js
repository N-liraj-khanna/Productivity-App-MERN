// Imports
const express = require("express");
const dotenv = require('dotenv')

// Contants
const app = express();
dotenv.config({path: "config.env"})
const PORT = process.env.PORT || 5000;

app.use("/", (req,res)=>{
  res.send("Hi");
});


// General Configuration
app.listen(PORT, () => {
  console.log("Server up and running on PORT " + PORT);
});
