const UserModel = require("models/user.model");
exports.GetUser = (req, res, next) => {
  try {
    const { uid } = res.locals.uid;
    const user = UserModel.findById(uid);
    return res.status(200).json({
      success: true,
      user,
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

exports.GetUserDetails = (req, res, next) => {
  try {
    const { _id } = req.params;
    const user = UserModel.findById(_id);
    return res.status(200).json({
      success: true,
      user: user.GetUserData(),
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
