const mongoose = require("mongoose");

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: "Username is required",
      maxLength: 30,
      minLength: 8,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: "Password is required",
    },
  },
  { collection: "user" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
