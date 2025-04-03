const User = require("./user.model.js");

exports.createUser = async (name, email, phoneNo) => {
    try {
        const user = new User({ name, email, phoneNo });
        await user.save();
        return user;
    } catch (error) {
        throw new Error("Error creating user: " + error.message);
    }
};

exports.getAllData = async () => {
    try {
        return await User.find();
    } catch (error) {
        throw new Error("Error fetching user data: " + error.message);
    }
};

exports.deleteUser = async (id) => {
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) throw new Error("User not found");
        return user;
    } catch (error) {
        throw new Error("Error deleting user: " + error.message);
    }
};

exports.updateUser = async (id, data) => {
    try {
        const user = await User.findByIdAndUpdate(id, data, { new: true });
        if (!user) throw new Error("User not found");
        return user;
    } catch (error) {
        throw new Error("Error updating user: " + error.message);
    }
};
