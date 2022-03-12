const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  from: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  to: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  currency: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
  },
  transactionId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
