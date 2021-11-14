const express = require("express");
const { sign_up, login } = require("../controllers/login_signup");
const { activities, addActivity } = require("../controllers/activities.js");

const router = express.Router();

router.post("/register", sign_up);

router.post("/login", login);

router.post("/activities", activities);

router.post("/add-activity", addActivity);

module.exports = router;
