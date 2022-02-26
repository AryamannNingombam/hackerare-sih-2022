const randomstring = require("randomstring");

exports.GetRandomHash = () => {
  return randomstring.generate({
    length: 20,
    charset: "alphanumeric",
  });
};
