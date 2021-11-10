const express = require("express");
const { sign_up } = require("../controllers/login_signup");

const router = express.Router();

router.post("/register", sign_up);

module.exports = router;
