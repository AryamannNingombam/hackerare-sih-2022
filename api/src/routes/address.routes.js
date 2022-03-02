const express = require("express");
const router = express.Router();
const controller = require("../controllers/address.controller");
const CheckJWT = require("../middleware/jwt.middleware");
router.put("/edit", CheckJWT, controller.EditAddress);
router.delete("/delete/:addressId", CheckJWT, controller.DeleteAddress);
router.post("/make-default", CheckJWT, controller.MakeAddressDefault);
router.post("/add", CheckJWT, controller.AddAddress);
router.get("/get-all", CheckJWT, controller.GetAllAddressesForUser);
router.get("/get-default", CheckJWT, controller.GetDefaultAddressForUser);
router.get("/details/:_id", CheckJWT, controller.GetAddressDetails);

module.exports = router;
