const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String,  required: true},
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;
