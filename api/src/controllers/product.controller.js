const ProductModel = require("../models/product.model");
const UserModel = require("../models/user.model");
const TransactionModel = require("../models/transaction.model");
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
      public: true,
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

exports.SellProduct = async (req, res, next) => {
  try {
    const { _id, transaction } = req.body;
    const product = await ProductModel.findOne({ _id });
    product.sales += 1;
    await new TransactionModel(transaction);
    return res.status(200).json({
      success: true,
      product,
      transaction,
    });
  } catch (err) {
    console.log("ERROR");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN SERVER ERROR",
    });
  }
};

exports.FilterProducts = async (req, res, next) => {
  try {
    const { query } = req.query;
    const products = await ProductModel.aggregate([
      { $match: { name: { $regex: query, $options: "i" } } },
      {
        $addFields: {
          score: {
            $indexOfCP: [{ $toLower: "$name" }, { $toLower: query }],
          },
        },
      },
      { $sort: { score: 1 } },
    ]);
    return res.status(200).json({
      success: true,
      products,
    });
  } catch (err) {
    console.log("ERROR");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN SERVER ERROR",
    });
  }
};
