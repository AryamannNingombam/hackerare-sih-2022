const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.get("/get-user", controller.GetUser);
router.get("/get-user-details/:_id", controller.GetUserDetails);

module.exports = router;
