const express = require('express');
const router = express.Router();    
const userController = require("./user.controller.js"); 

router.post("/createUser", userController.createUser); 
router.get("/getAllData", userController.getAllData);  
router.delete("/deleteUser/:id", userController.deleteUser);
router.put("/updateUser/:id", userController.updateUser);

module.exports = router;