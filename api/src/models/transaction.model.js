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
  attempts: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
    enum: CURRENCY,
  },
  amountDue: {
    type: Number,
    required: true,
  },
  amountPaid: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
