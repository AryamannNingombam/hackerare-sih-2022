const mongoose = require("mongoose");

const SIHRequestSchema = new mongoose.Schema({
  sih: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("SIHRequest", SIHRequestSchema);
