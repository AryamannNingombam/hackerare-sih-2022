const instance = require("../config/razorpay.config");

class RazorpayServices {
  async GetRazorpayPaymentDetails(paymentId) {
    return instance.payments.fetch(paymentId);
  }
  async GetRazorpayAllPayments(options) {
    return instance.payments.fetchAll(options);
  }
  async InitiatePay(amount, currency) {
    const options = {
      amount,
      currency,
    };
    return instance.orders.create(options);
  }
}

const service = new RazorpayServices();
module.exports = service;
