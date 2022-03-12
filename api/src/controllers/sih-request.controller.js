const sihRequestModel = require("../models/sih-request.model");
const SIHRequestModel = require("../models/sih-request.model");
const SIHModel = require("../models/sih.model");
const userModel = require("../models/user.model");

exports.DenySIH = async (req, res, next) => {
  try {
    const { _id } = req.params;
    console.log("ID", _id);
    const SIHRequest = await SIHRequestModel.findOne({ user: _id });
    console.log(SIHRequest);
    const sih = await SIHModel.findById(SIHRequest.sih);
    if (sih.owner.toString() !== res.locals.uid)
      return res.status(400).json({
        success: false,
        message: "ERROR_NOT_AUTHORIZED",
      });
    await SIHRequest.delete();
    return res.status(200).json({
      success: true,
      message: "SIH Request Denied",
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

exports.ApproveSIH = async (req, res, next) => {
  try {
    const { _id } = req.params;
    console.log(_id);
    const SIHRequest = await SIHRequestModel.findOne({ user: _id });
    const sih = await SIHModel.findById(SIHRequest.sih);
    const user = await userModel.findById(_id);
    console.log(sih);
    if (sih.owner.toString() !== res.locals.uid)
      return res.status(400).json({
        success: false,
        message: "ERROR_NOT_AUTHORIZED",
      });
    user.sih = sih;
    sih.members.push(_id);
    await sih.save();
    await SIHRequest.remove();
    await user.save();
    return res.status(200).json({
      success: true,
      message: "SIH Approved",
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

exports.RequestSIH = async (req, res, next) => {
  try {
    const { sih } = req.body;
    const SIHRequest = new SIHRequestModel({
      sih,
      user: res.locals.uid,
    });
    await SIHRequest.save();
    return res.status(200).json({
      success: true,
      message: "Request Sent",
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

exports.GetAllRequests = async (req, res, next) => {
  try {
    const sih = await SIHModel.findOne({
      owner: res.locals.uid,
    });
    const requests = await sihRequestModel.find({
      sih: sih._id,
    });
    const response = [];
    for (let r of requests) {
      const userDetails = await userModel.findOne({ _id: r.user });
      response.push(userDetails);
    }
    return res.status(200).json(response);
  } catch (err) {
    console.log("ERROR");
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "UNKNOWN_SERVER_ERROR",
    });
  }
};
