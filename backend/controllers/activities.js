require("colors");
const jwt = require("jsonwebtoken");
const Activity = require("../models/activity.model");
const User = require("../models/user.model");

const getUser = async (email) => {
  return await User.findOne({ email });
};

exports.addActivity = async (req, res) => {
  try {
    const decoded = jwt.verify(
      req.headers["x-access-token"],
      process.env.JWT_SECRET_KEY
    );
    const userData = await getUser(decoded.email);
    const activityData = await new Activity({
      activity: req.body.data.activity,
      description: req.body.data.description,
      user: userData,
    });
    await activityData.save();
    console.log("Activity Added Successfully!".green);
    return res.json({ status: "ok", data: await Activity.find({user: userData._id}) });
  } catch (e) {
    console.log(`${err.message}`.red);
    return res.status(401).json({ status: "error", error: "invalid token" });
  }
};

exports.activities = async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const email = decoded.email;
    const userData = await getUser(email);
    const activitiesData = await Activity.find({user: userData._id});
    return res.json({ data: activitiesData });
  } catch (err) {
    console.log(`${err.message}`.red);
    res.status(401).json({ status: "error", error: "invalid token" });
  }
};
