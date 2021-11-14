//  To add custom data
// const data = require("../data");
// require("colors")
// require("dotenv").config({path: "./backend/config/config.env"});
// const mongoose = require("mongoose");

// const connectDB = async ()=>{
//   try{
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`Mongo DB Connected Successfully: ${conn.connection.host} `.bgCyan.black);
//   }catch(err){
//     console.log(`${err}`.red);
//     process.exit(1);
//   }
// }

// connectDB()

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    activity: {
      type: String,
      required: "Title is required",
    },
    description: {
      type: String,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { collection: "activity" }
);

const Activity = mongoose.model("Activity", UserSchema);

module.exports = Activity;

// data.forEach(async function (d) {
//   const act = await new Activity({
//     activity: d.activity,
//     description: d.description,
//   });
//   await act.save();
// });
