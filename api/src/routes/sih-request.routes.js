const express = require("express");
const controller = require("../controllers/sih-request.controller");
const router = express.Router();

router.post("/accept/:_id", controller.ApproveSIH);
router.post("/deny/:_id", controller.DenySIH);
router.post("/request", controller.RequestSIH);

module.exports = router;
