const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const db = require("../../utils/db");
const { sendMail } = require("../../utils/nodemailer");

const BadRequestError = require("../../errors/BadRequestError");

const UnauthorizedError = require("../../errors/UnauthorizedError");

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const userExists = await db.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);
  if (userExists.rowCount < 1) {
    throw new UnauthorizedError(
      "Provided email doesn't associate with any user"
    );
  }
  const user = userExists.rows[0];
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  const tokenSaved = await db.query(
    `UPDATE users SET reset_token = $1 WHERE id = $2 RETURNING *`,
    [token, user.id]
  );

  const resetLink = `${
    process.env.APP_URL || "localhost:3333"
  }/api/auth/reset-password/${token}`;

  const message = {
    from: process.env.EMAIL_ADDRESS,
    to: user.email,
    subject: "Reset Password Link",
    html: `<p>Hello ${user.username},</p>
      <p>Please click on the following link to reset your password:</p>
      <a href="${resetLink}">${resetLink}</a>
      <br>
      <p>The link will expire in 1 hour.</p>
      <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`,
  };
  const sendEmail = await sendMail({
    to: user.email,
    subject: "Password Reset Link",
    html: message.html,
  });
  if (sendEmail.errno) {
    throw new BadRequestError("Something went wrong with mail service");
  }
  res.status(StatusCodes.OK).json(sendEmail.messageId);
};

module.exports = forgotPassword;
