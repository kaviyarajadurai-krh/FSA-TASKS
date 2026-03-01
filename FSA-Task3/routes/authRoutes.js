const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// LOGIN ROUTE
router.post("/login", authController.loginUser);

module.exports = router;
