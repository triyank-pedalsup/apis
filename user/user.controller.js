const userService = require("./user.service.js");

const createUser = async (req, res) => {
  try {
    const { name, email, phoneNo } = req.body;
    console.log("req.body", req.body);
    if (typeof phoneNo !== 'number') {
        throw new Error("Invalid phone number format");
      }      
    const user = await userService.createUser(name, email, phoneNo);
    res.status(201).json({ message: "User created successfully", data: user });
  } catch (error) {
    console.log("error here", error);
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

const getAllData = async (req, res) => {
  try {
    const users = await userService.getAllData();
    res.status(200).json({ message: "User data fetched successfully", data: users });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user data", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User updated successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error: error.message });
  }
};

module.exports = {
  createUser,
  getAllData,
  deleteUser,
  updateUser,
};
