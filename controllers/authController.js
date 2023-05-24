const deleteUser = require("./auth/deleteUser");
const forgotPassword = require("./auth/forgotPassword");
const loginUser = require("./auth/loginUser");
const registerUser = require("./auth/registerUser");
const resetPassword = require("./auth/resetPassword");
const updateUser = require("./auth/updateUser");

module.exports = {
  deleteUser,
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
  updateUser,
};
