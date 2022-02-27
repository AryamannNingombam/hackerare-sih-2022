const mongoose = require("mongoose");

const ProductModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  public: {
    type: Boolean,
    required: true,
    default: true,
  },
  sih: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  seller: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sellPrice: {
    type: Number,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
    default: new Date(Date.now()),
  },
  images: {
    type: [String],
    required: true,
  },
  labels: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("Product", ProductModel);
