const ProductModel = require("../models/product.model");
const UserModel = require("../models/user.model");

exports.GetAllProductsByUser = async (req, res, next) => {
  try {
    const { uid } = res.locals;
    const products = await ProductModel.find({ seller: uid });
    return res.status(200).json({
      success: true,
      products,
    });
  } catch (err) {
    console.log("error");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN SERVER ERROR",
    });
  }
};

exports.GetAllProductsBySeller = async (req, res, next) => {
  try {
    const { seller } = req.params;
    const products = await ProductModel.find({ seller });
    return res.status(200).json({
      success: true,
      products,
    });
  } catch (err) {
    console.log("error");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN SERVER ERROR",
    });
  }
};

exports.GetAllProducts = async (req, res, next) => {
  try {
    const products = await ProductModel.find();
    return res.status(200).json({
      success: true,
      products,
    });
  } catch (err) {
    console.log("ERROR");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN_SERVER_ERROR",
    });
  }
};

exports.GetProductDetails = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const product = await ProductModel.find({ _id });
    return res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    console.log("error");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN SERVER ERROR",
    });
  }
};

exports.AddProduct = async (req, res, next) => {
  try {
    const { name, description, sellPrice, releaseDate, images, labels } =
      req.body;
    const userData = await UserModel.findOne({ _id: res.locals.uid });
    if (!userData.sih)
      return res.status(400).json({
        success: false,
        message: "ERROR_NOT_SIH_MEMBER",
      });
    const product = new ProductModel({
      name,
      public,
      seller: res.locals.uid,
      sih: userData.sih,
      description,
      sellPrice,
      releaseDate,
      images,
      labels,
    });
    await product.save();
    return res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    console.log("error");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN SERVER ERROR",
    });
  }
};

exports.GetAllProductsBySIH = async (req, res, next) => {
  try {
    const { sih } = req.params;
    const products = await ProductModel.find({ sih });
    return res.status(200).json({
      success: true,
      products,
    });
  } catch (err) {
    console.log("error");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN SERVER ERROR",
    });
  }
};
