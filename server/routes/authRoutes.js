const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const verifyToken = require("../middleware/verifyToken");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/getUser", verifyToken,authController.getUser);


module.exports = router;