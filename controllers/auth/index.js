const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail")

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  verifyEmail,
  resendVerifyEmail,
};
