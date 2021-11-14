require("colors")
require("dotenv").config({path: "./backend/config/config.env"});
const mongoose = require("mongoose");

const connectDB = async ()=>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo DB Connected Successfully: ${conn.connection.host} `.bgCyan.black);
  }catch(err){
    console.log(`${err}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;