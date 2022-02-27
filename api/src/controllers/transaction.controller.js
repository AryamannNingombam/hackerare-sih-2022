const TransactionModel = require("models/transaction.model");

export const GetAllTransactionsByUser = async (req, res, next) => {
  try {
    const { uid } = res.locals;

    const from = await TransactionModel.find({ from: uid });
    const to = await TransactionModel.find({ to: uid });
    return res.status(200).json({
      success: true,
      from,
      to,
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
