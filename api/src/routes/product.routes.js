const express = require("express");
const controller = require("../controllers/product.controller");
const router = express.Router();

router.get("/get-all-by-user", controller.GetAllProductsByUser);
router.get("/get-all-by-seller/:seller", controller.GetAllProductsBySeller);
router.get("/get-all", controller.GetAllProducts);
router.get("/get-details/:_id", controller.GetProductDetails);
router.post("/add", controller.AddProduct);
router.get("/get-all-by-sih/:sih", controller.GetAllProductsBySIH);

module.exports = router;
