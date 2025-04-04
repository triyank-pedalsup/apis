const User = require("./user.model.js");

exports.createUser = async (name, email, phoneNo) => {
    const user = new User({name, email, phoneNo});
    const savedUser = await user.save();
    return savedUser;
};

exports.getAllData = async () => {
    const users = await User.find();
    return users;
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
