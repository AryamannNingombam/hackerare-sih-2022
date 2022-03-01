const express = require("express");
const router = express.Router();
const controller = require("../controllers/address.controller");

router.put("/edit", controller.EditAddress);
router.delete("/delete/:addressId", controller.DeleteAddress);
router.post("/make-default", controller.MakeAddressDefault);
router.post("/add", controller.AddAddress);
router.get("/get-all", controller.GetAllAddressesForUser);
router.get("/get-default", controller.GetDefaultAddressForUser);
router.get("/details/:_id", controller.GetAddressDetails);

module.exports = router;
