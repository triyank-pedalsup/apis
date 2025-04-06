let mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const users = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNo: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
});

users.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

users.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const user = mongoose.model("user", users);

module.exports = user;