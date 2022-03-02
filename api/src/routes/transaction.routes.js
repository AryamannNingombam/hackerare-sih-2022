const express = require("express");
const router = express.Router();
const CheckJWT = require("../middleware/jwt.middleware");
const controller = require("../controllers/transaction.controller");

router.get("/get-all", controller.GetAllTransactionsByUser);

module.exports = router;
