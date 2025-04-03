let mongoose = require("mongoose");

const users = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNo: { type: Number, required: true, unique: true },
});

const user = mongoose.model("user", users);

module.exports = user;