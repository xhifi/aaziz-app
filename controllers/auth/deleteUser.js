const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const db = require("../../utils/db");
const { sendMail } = require("../../utils/nodemailer");

const BadRequestError = require("../../errors/BadRequestError");
const ForbiddenRequestError = require("../../errors/ForbiddenRequestError");
const UnauthorizedError = require("../../errors/UnauthorizedError");
const NotFoundError = require("../../errors/NotFoundError");

const deleteUser = (req, res) => {
  res.status(200).send({ msg: "Delete user route accessed" });
};

module.exports = deleteUser;
