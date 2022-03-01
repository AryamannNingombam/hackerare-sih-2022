const express = require("express");
const controller = require("../controllers/sih.controller");
const router = express.Router();

router.get("/get-all", controller.GetAllSIH);
router.post("/add", controller.AddSIH);
router.get("/get-details", controller.GetSIHDetails);
module.exports = router;
