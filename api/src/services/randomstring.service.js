const randomstring = require("randomstring");

class RandomStringServices {
  GetRandomHash() {
    return randomstring.generate({
      length: 20,
      charset: "alphanumeric",
    });
  }
}

const service = new RandomStringServices();

module.exports = service;
