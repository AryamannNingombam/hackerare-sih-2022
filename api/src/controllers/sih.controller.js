const productModel = require("../models/product.model");
const SIHModel = require("../models/sih.model");
const userModel = require("../models/user.model");

exports.GetAllSIH = async (req, res, next) => {
  try {
    const sihs = await SIHModel.find();
    return res.status(200).json({
      success: true,
      sihs,
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

exports.AddSIH = async (req, res, next) => {
  try {
    console.log("REQ BODY", req.body);
    const sih = new SIHModel({
      ...req.body,
      owner: res.locals.uid,
      members: [res.locals.uid],
    });
    await sih.save();
    const user = await userModel.findOne({ _id: res.locals.uid });
    user.sih = sih._id;
    await user.save();
    return res.status(200).json({
      success: true,
      sih,
    });
  } catch (err) {
    console.log("ERROR");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN_ERROR",
    });
  }
};

exports.GetSIHDetails = async (req, res, next) => {
  try {
    const { _id } = req.params;
    console.log(req.params);
    const sih = await SIHModel.findById(_id);
    const products = await productModel.find({ sih: _id });
    return res.status(200).json({ ...sih._doc, products });
  } catch (err) {
    console.log("ERROR");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN_ERROR",
    });
  }
};

exports.GetUserSIH = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ _id: res.locals.uid });
    console.log(user.sih);
    const sih = await SIHModel.findById(user.sih);
    return res.status(200).json(sih);
  } catch (err) {
    console.log("ERROR");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN_ERROR",
    });
  }
};

exports.AddUserToSIH = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    const owner = await userModel.findOne({ _id: res.locals.uid });
    const sih = await SIHModel.findById({ _id: owner.sih });
    sih.members.push(user._id);
    user.sih = sih._id;
    await sih.save();
    await user.save();
    return res.status(200).json({
      success: true,
      message: "User Added",
    });
    await sih.save();
  } catch (err) {
    console.log("ERROR");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN_ERROR",
    });
  }
};
