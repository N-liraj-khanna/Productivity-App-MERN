// Imorts
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
// Jandy functions
const hashPassword = async function (password) {
  const saltRounds = 10;
  const hashPwd = await bcrypt.hash(password, saltRounds);
  return hashPwd;
};

// Exports
exports.sign_up = async (req, res) => {
  const password = req.body.password;
  const username = req.body.username;
  const email = req.body.email;
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  try {
    if (password.length < 8) {
      const passwordError = new Error(
        "Password length should be 8 characters!"
      );
      passwordError.code = 401;
      throw passwordError;
    } else if (username.length < 8 || username.length > 30) {
      const usernameError = new Error(
        "Username length should be 8 characters!"
      );
      usernameError.code = 401;
      throw usernameError;
    }else if (username.indexOf(' ') >= 0) {
      const usernameError = new Error(
        "Invalid Username!"
      );
      usernameError.code = 401;
      throw usernameError;
    } else if (!re.test(String(email).toLowerCase())) {
      const emailError = new Error("Please enter a valid email address");
      emailError.code = 401;
      throw emailError;
    }
    const newUser = await new UserModel({
      username: username,
      email: email,
      password: await hashPassword(password),
    });
    await newUser.save();
    console.log(`User Created Successfully`.green);
    return res.status(200).json({ status: "ok" });
  } catch (err) {
    console.log(`${err.message}`.red);
    return res
      .status(err.code || 500)
      .json({ message: err.message, status: err.code || 500 });
  }
};

exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    if (password.length < 8) {
      const passwordError = new Error(
        "Password length should be 8 characters!"
      );
      passwordError.code = 401;
      throw passwordError;
    }
    const userData = await UserModel.findOne({
      $or: [
        {
          email: username,
        },
        {
          username: username,
        },
      ],
    });
    if (userData) {
      const comparePassword = await bcrypt.compare(password, userData.password);
      if (!comparePassword) {
        console.log(`Username/Email does not match`.red);
        res
          .status(401)
          .json({
            message: "Username/Email does not match",
            status: 401,
            user: false,
          });
      } else {
        const token = jwt.sign(
          {
            username: userData.username,
            email: userData.email,
          },
          process.env.JWT_SECRET_KEY
        );

        res.status(200).json({
          status: "ok",
          message: "Verified Successfully",
          user: token,
        });
      }
    } else {
      return res
        .status(401)
        .json({
          message: "Username or Email address not found",
          status: 401,
          user: false,
        });
    }
  } catch (err) {
    console.log(`${err.message}`.red);
    return res
      .status(401)
      .json({ message: err.message, status: 401, user: false });
  }
};

