const express = require("express");
const controller = require("../controllers/sih-request.controller");
const CheckJWT = require("../middleware/jwt.middleware");
const router = express.Router();
router.post("/accept/:_id", CheckJWT, controller.ApproveSIH);
router.post("/deny/:_id", CheckJWT, controller.DenySIH);
router.post("/request", CheckJWT, controller.RequestSIH);

module.exports = router;
