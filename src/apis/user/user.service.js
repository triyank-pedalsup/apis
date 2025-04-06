const User = require("./user.model.js");

exports.createUser = async (name, email, phoneNo, password) => {
  const user = new User({ name, email, phoneNo, password });
  const savedUser = await user.save();
  return savedUser;
  };

exports.checkUser = async(email)=>{
  const user = await User.findOne({email});
  return user;
}

exports.getAllData = async () => {
  const user = await User.find();
  return user;
};

exports.checkProfile = async(userId) => {
  const user = await User.findById(userId);
  return user;
};

exports.deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

exports.updateUser = async (id, data) => {
  const user = await User.findByIdAndUpdate(id, data, { new: true });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};