const SIHRequestModel = require("../models/sih-request.model");
const SIHModel = require("../models/sih.model");

exports.DenySIH = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const SIHRequest = await SIHRequestModel.deleteOne({ _id });
    const sih = await SIHModel.findById(SIHRequest.sih);
    if (sih.owner !== res.locals.uid)
      return res.status(400).json({
        success: false,
        message: "ERROR_NOT_AUTHORIZED",
      });
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
    const SIHRequest = await SIHRequestModel.findOne({ _id });
    const sih = await SIHModel.findById(SIHRequest.sih);
    if (sih.owner !== res.locals.uid)
      return res.status(400).json({
        success: false,
        message: "ERROR_NOT_AUTHORIZED",
      });
    await sih.AddMember(SIHRequest.user);
    await SIHRequest.remove();
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
