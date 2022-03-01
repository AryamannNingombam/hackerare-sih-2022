const express = require("express");
const controller = require("../controllers/auth.controller");

const router = express.Router();

//all post requests;
router.post("/sign-in", controller.SignIn);
router.post("/sign-up", controller.SignUp);

//all put requests;

//all delete requests;

module.exports = router;
