const validator = require("fastest-validator");

const v = new validator();

const schema = {
  name: { type: "string", min: 3, max: 255 },
  userName: { type: "string", min: 3, max: 100 },
  email: { type: "email", min: 10, max: 100 },
  phone: { type: "string", max: 11 },
  password: { type: "string", min: 8, max: 40 },
  confirmPassword: { type: "equal", field: "password" },
};

const check = v.compile(schema);

module.exports = check;
