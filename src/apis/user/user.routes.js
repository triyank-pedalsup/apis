const express = require('express');
const router = express.Router();
const userController = require("./user.controller.js"); 
const {jwtMiddleware} = require("../middleware/jwt.middleware.js");

router.post("/createUser", userController.createUser); 
router.get("/getAllData", jwtMiddleware, userController.getAllData); 
router.get("/profile",jwtMiddleware, userController.checkProfile);
router.delete("/deleteUser/:id", userController.deleteUser);
router.put("/updateUser/:id", userController.updateUser);
router.post("/login", userController.checkUser);

module.exports = router;
