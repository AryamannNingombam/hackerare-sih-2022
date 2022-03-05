const ProductModel = require("../models/product.model");
const RazorpayServices = require("../services/razorpay.service");

exports.InititiateProductTransaction = async (req, res, next) => {
  try {
    const { _id } = req.body;
    if (!_id)
      return res.status(400).json({
        success: false,
        message: "ERROR_VALUES_NOT_PROVIDED",
      });
    const productListing = await ProductModel.findById({ _id });
    if (!productListing)
      return res.status(400).json({
        success: false,
        message: "ERROR_PRODUCT_LISTING_NOT_FOUND",
      });
    const order = await RazorpayServices.InitiatePay(
      productListing.askPrice * 100
    );
    return res.status(200).json({
      success: true,
      order,
      // productListing,
    });
  } catch (err) {
    console.log("error");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN_SERVER_ERROR",
    });
  }
};
