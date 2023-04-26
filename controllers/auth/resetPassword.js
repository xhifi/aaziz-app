const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const db = require("../../utils/db");
const { sendMail } = require("../../utils/nodemailer");

const BadRequestError = require("../../errors/BadRequestError");
const ForbiddenRequestError = require("../../errors/ForbiddenRequestError");
const UnauthorizedError = require("../../errors/UnauthorizedError");
const NotFoundError = require("../../errors/NotFoundError");

const resetPassword = async (req, res) => {
  // Check if the token exists in the database or not
  if (!req.params.token)
    throw new BadRequestError("Provide the token properly");
  const existsInDb = await db.query(
    `SELECT reset_token FROM users WHERE reset_token = $1`,
    [req.params.token]
  );
  if (existsInDb.rowCount === 0)
    throw new Error(`Invalid Token. Redo the Forgot password`);

  // If token exists in the database, Decode the token
  // See if the token is valid or expired
  const decodedToken = jwt.verify(
    existsInDb.rows[0].reset_token,
    process.env.JWT_SECRET
  );
  if (!decodedToken) throw new UnauthorizedError("Token expired.");
  // If the token is not expired, From the decoded token, fetch the user by userID
  const foundUser = await db.query("SELECT password FROM users WHERE id = $1", [
    decodedToken.userId,
  ]);

  if (foundUser.rowCount === 0) {
    throw new UnauthorizedError("Invalid Token");
  }
  // hash the new password provided in req body
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  // violate the previously generated reset token in users table
  const updateUser = await db.query(
    `UPDATE users SET password = $1, reset_token = $2 WHERE id = $3 RETURNING *`,
    [hashedPassword, "", decodedToken.userId]
  );

  if ((updateUser.rowCount = 0))
    throw new BadRequestError(
      "Something went wrong while resetting your password"
    );
  res.status(StatusCodes.OK).send({ msg: "Password Reset successful" });
};

module.exports = resetPassword;
