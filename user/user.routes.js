const express = require('express');
const router = express.Router();    

const {getAllData, createUser,deleteUser,updateUser} = require("./user.service.js");

router.post("/createUser", createUser); 
router.get("/getAllData", getAllData);  
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

module.exports = router;