const express = require("express");
const router = express.Router();
const CheckJWT = require("../middleware/jwt.middleware");
const controller = require("../controllers/user.controller");

router.get("/get-user", CheckJWT, controller.GetUser);
router.get("/get-user-details/:_id", controller.GetUserDetails);

module.exports = router;
