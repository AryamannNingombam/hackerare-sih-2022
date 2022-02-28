const SIHModel = require("models/sih.model");

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
    const sih = await SIHModel.create({
      ...req.body,
      owner: res.locals.uid,
    });
    await sih.AddMember(res.locals.uid);
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
    const sih = await SIHModel.findById(_id);
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
