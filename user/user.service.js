const User = require("./user.model.js");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: "Error creating user: " + error.message });
  }
};


exports.getAllData = async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error fetching user data: " + error.message });
    }
  };
  
exports.deleteUser = async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(res.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user data: " + error.message });
    }
};

exports.updateUser = async (req,res) => {
    try {
        const user = await User.findByIdAndUpdate(res.params.id,res.body,{new:true});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user data: " + error.message });
    }
};
