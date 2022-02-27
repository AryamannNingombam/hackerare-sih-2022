const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
    match: /^[1-9][0-9]{5}$/,
  },
  houseDetails: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  stateOrUnionTerritory: {
    type: String,
    required: true,
  },
  default: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  addressType: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: new Date(Date.now()),
  },
});

module.exports = mongoose.model("Address", AddressSchema);
