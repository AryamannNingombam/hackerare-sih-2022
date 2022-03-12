const express = require("express");
const controller = require("../controllers/sih.controller");
const CheckJWT = require("../middleware/jwt.middleware");
const router = express.Router();

router.get("/get-all", controller.GetAllSIH);
router.post("/make", CheckJWT, controller.AddSIH);
router.get("/get-details/:_id", controller.GetSIHDetails);
module.exports = router;
