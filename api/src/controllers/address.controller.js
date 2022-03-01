const AddressModel = require("models/address.model");

exports.EditAddress = async (req, res, next) => {
  try {
    const { newBody, uid } = req.body;
    if (!newBody || !uid) {
      return res.status(400).json({
        success: false,
        message: "Required values not provided!",
      });
    }
    const body = { ...newBody, user: res.locals.uid };
    const b = await AddressModel.findByIdAndUpdate(uid, body, { new: true });
    return res.status(200).json({
      success: true,
      updatedAddress: b,
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

exports.DeleteAddress = async (req, res, next) => {
  try {
    const { addressId } = req.params;
    if (!addressId)
      return res.status(400).json({
        success: false,
        message: "Required values not provided!",
      });
    await AddressModel.findOneAndDelete({
      _id: addressId,
      user: res.locals.uid,
    });
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "UNKNOWN_SERVER_ERROR",
    });
  }
};

exports.MakeAddressDefault = async (req, res, next) => {
  try {
    const { uid } = res.locals;
    if (!uid) {
      return res.status(400).json({
        success: false,
        message: "ERROR_UID_NOT_FOUND",
      });
    }
    const { addressId } = req.body;
    if (!addressId)
      return res.status(400).json({
        success: false,
        message: "ERROR_VALUES_NOT_PROVIDED",
      });
    //checking for default model
    const defaultAddress = await AddressModel.find({
      default: true,
      user: uid,
    });
    if (defaultAddress.length > 0) {
      defaultAddress[0].default = false;
      await defaultAddress[0].save();
    }
    const updated = await AddressModel.findOneAndUpdate(
      { _id: addressId, user: uid },
      { default: true }
    );
    return res.status(200).json({
      success: true,
      address: updated,
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

exports.AddAddress = async (req, res, next) => {
  try {
    const body = {
      ...req.body,
      user: res.locals.uid,
    };
    console.log("address body", body);
    const b = await AddressModel.create(body);
    return res.status(200).json({
      success: true,
      address: b,
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

exports.GetAllAddressesForUser = async (req, res, next) => {
  try {
    const addresses = await AddressModel.find({ user: res.locals.uid });
    return res.status(200).json({
      success: true,
      addresses: addresses,
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

exports.GetDefaultAddressForUser = async (req, res, next) => {
  try {
    const uid = res.locals.uid;
    const address = await AddressModel.findOne({ user: uid, default: true });
    if (!address)
      return res.status(400).json({
        success: false,
        message: "ERROR_NO_DEFAULT_ADDRESS",
      });
    return res.status(200).json({
      success: true,
      address: address,
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

exports.GetAddressDetails = async (req, res, next) => {
  try {
    const { uid } = res.locals;
    const { _id } = req.params;
    if (!uid || !_id)
      return res.status(400).json({
        success: false,
        message: "ERROR_VALUES_NOT_PROVIDED",
      });
    const address = await AddressModel.findOne({ _id, user: uid });
    if (!address)
      return res.status(400).json({
        success: false,
        message: "ERROR_ADDRESS_NOT_FOUND",
      });
    return res.status(200).json({
      success: true,
      address,
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
