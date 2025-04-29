// const userService = require("./user.service.js");
// const {generateToken} = require("../middleware/jwt.middleware.js");

// const createUser = async (req, res) => {
//   try {
//     const { name, email, phoneNo, password } = req.body;
//     const data = await userService.createUser(name, email, phoneNo, password);

//     const payLoad = {
//       id:data._id,
//       email:data.email,
//     }

//     const token = generateToken(payLoad);
    
//     res.status(201).json({ message: "User created successfully", data, token });
//   } catch (error) {
//     console.log("error here", error);
//     res.status(500).json({ message: "Error creating user", error: error.message });
//   }
// };  

// const checkUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password are required" });
//     }

//     const user = await userService.checkUser(email);
//     if (!user) {
//       return res.status(401).json({ message: "Invalid email" });
//     }

//     const isPasswordValid = await user.comparePassword(password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     const payload = {
//       id: user._id,
//       email: user.email,
//     };
//     const token = generateToken(payload);

//     res.status(200).json({
//       message: "User logged in successfully",
//       data: { id: user._id, email: user.email},
//       token,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error", error: error.message });
//   }
// };

// const getAllData = async (req, res) => {
//   try {
//     const users = await userService.getAllData();
//     res.status(200).json({ message: "User data fetched successfully", data: users });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching user data", error: error.message });
//   }
// };

// const checkProfile = async (req, res) => {
//   try {
//     const userData = req.user;
//     console.log("userData", userData);

//     const userId = userData.id;
//     const user = await userService.checkProfile(userId);

//     res.status(200).json({message: "User profile fetched successfully", data: user });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching profile", error: error.message });
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     const user = await userService.deleteUser(req.params.id);
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.status(200).json({ message: "User deleted successfully", data: user });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting user", error: error.message });
//   }
// };

// const updateUser = async (req, res) => {
//   try {
//     const user = await userService.updateUser(req.params.id, req.body);
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.status(200).json({ message: "User updated successfully", data: user });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating user", error: error.message });
//   }
// };

// module.exports = {
//   createUser,
//   getAllData,
//   deleteUser,
//   updateUser,
//   checkUser,
//   checkProfile,
// };


const { generateToken } = require('../middleware/jwt.middleware.js');
const { createUser, getAllData, deleteUser, updateUser } = require('./user.service.ts');

const createUserController = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await createUser(userData);

    const payload = {
      id: req.params.id,
      email: req.email,
    }

    const token = generateToken(payload);

    res.status(201).json({ message: "User created successfully", data: newUser, token: token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

const getAllDataController = async(req,res) => {
  try {
    const newUser = await getAllData();
    res.status(200).json({ message: "User created successfully", data: newUser });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}

const deleteUserController = async(req,res) => {
  try {
    const id = parseInt(req.params.id);
    const newUser = await deleteUser(id);
    res.status(200).json({ message: "User deleted successfully", data: newUser });
  } catch (error) {
    res.status(404).json({ message: "user not found", error: error.message });
  }
}

const updateUserController = async(req,res) => {
    try {
      const id = parseInt(req.params.id);
      const newUser = await updateUser(id,req.body);
      res.status(200).json({ message: "User updated  successfully", data: newUser });
    } catch (error) {
      res.status(500).json({message:"error updating user", error: error.message});
    }
}

module.exports = {
  createUserController,
  getAllDataController,
  deleteUserController,
  updateUserController,
};