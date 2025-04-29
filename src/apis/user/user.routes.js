const express = require('express');
const router = express.Router();
const userController = require("./user.controller.js");
const { jwtMiddleware } = require("../middleware/jwt.middleware.js");

router.post("/newUser" , userController.createUserController);
router.get("/getAllData", jwtMiddleware, userController.getAllDataController);
router.delete("/deleteUser/:id",userController.deleteUserController);
router.put("/update/:id",userController.updateUserController);

// You can uncomment or add more routes below when ready
// router.post("/login", userController.checkUser);
// router.get("/profile", jwtMiddleware, userController.checkProfile);
// router.delete("/deleteUser/:id", userController.deleteUser);
// router.put("/updateUser/:id", userController.updateUser);

module.exports = router;
