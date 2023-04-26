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

// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { StatusCodes } = require("http-status-codes");

// const db = require("../utils/db");
// const { sendMail } = require("../utils/nodemailer");

// const BadRequestError = require("../errors/BadRequestError");
// const ForbiddenRequestError = require("../errors/ForbiddenRequestError");
// const UnauthorizedError = require("../errors/UnauthorizedError");
// const NotFoundError = require("../errors/NotFoundError");

// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;
//   const existingUser = await db.query(`SELECT id FROM users WHERE email = $1`, [
//     email,
//   ]);
//   if (existingUser.rowCount > 0) {
//     throw new ForbiddenRequestError("Email already exists. Forgot Password?");
//   }
//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newUser = await db.query(
//     `INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *`,
//     [name, email, hashedPassword]
//   );
//   const user = newUser.rows[0];
//   const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
//   res.status(StatusCodes.OK).json({ accessToken });
// };

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     throw new BadRequestError("Enter email and password correctly");
//   }

//   const getUser = await db.query(
//     "SELECT users.id as user_id, users.name, users.password, users.email, roles.id as role_id, roles.name, roles.permissions FROM users JOIN roles on users.role = roles.id WHERE email = $1",
//     [email]
//   );
//   if (getUser.rowCount === 0) {
//     throw new UnauthorizedError("Invalid Email");
//   }

//   const user = getUser.rows[0];

//   const validPassword = await bcrypt.compare(password, user.password);

//   if (!validPassword) {
//     throw new BadRequestError("Invalid Password");
//   }

//   const accessToken = jwt.sign(
//     { userId: user.user_id },
//     process.env.JWT_SECRET
//   );

//   res.json({ accessToken });
// };

// const updateUser = async (req, res) => {
//   const isSelf = req.params.id === req.user.userId;
//   if (!isSelf && !req.user.permissions.includes("can_edit_self")) {
//     throw new UnauthorizedError(
//       "You are not authorized to modify your account. Contact an administrator."
//     );
//   }

//   const found = await db.query(`SELECT * FROM users WHERE users.id = $1`, [
//     req.params.id,
//   ]);

//   if (isSelf && req.user.permissions.includes("can_edit_self")) {
//     const updated = await db.query(
//       `UPDATE users SET name = $1, email = $2, address = $3 WHERE id = $4 RETURNING *`,
//       [
//         name || found.rows[0].name,
//         email || found.rows[0].email,
//         address || found.rows[0].address,
//         req.user.userId,
//       ]
//     );
//     return res.status(200).send(`Updated Self: ${updated.rows[0].id}`);
//   }
//   if (req.user.permissions.includes("can_edit_users")) {
//     if (found.rowCount === 0) {
//       throw new NotFoundError(
//         "User with provided id " + req.params.id + " doesn't exist"
//       );
//     }
//     const updated = await db.query(
//       `UPDATE users SET name = $1, email = $2, address = $3 WHERE id = $4 RETURNING *`,
//       [
//         name || found.rows[0].name,
//         email || found.rows[0].email,
//         address || found.rows[0].address,
//         req.params.id,
//       ]
//     );
//     return res.status(200).send(`Updated another user: ${updated.rows[0].id}`);
//   }
//   throw new BadRequestError("Something went wrong");
// };
// const deleteUser = (req, res) => {
//   res.status(200).send({ msg: "Delete user route accessed" });
// };

// const forgotPassword = async (req, res) => {
//   const { email } = req.body;
//   const userExists = await db.query(`SELECT * FROM users WHERE email = $1`, [
//     email,
//   ]);
//   if (userExists.rowCount < 1) {
//     throw new UnauthorizedError(
//       "Provided email doesn't associate with any user"
//     );
//   }
//   const user = userExists.rows[0];
//   const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   });

//   const tokenSaved = await db.query(
//     `UPDATE users SET reset_token = $1 WHERE id = $2 RETURNING *`,
//     [token, user.id]
//   );

//   const resetLink = `${
//     process.env.APP_URL || "localhost:3333"
//   }/api/auth/reset-password/${token}`;

//   const message = {
//     from: process.env.EMAIL_ADDRESS,
//     to: user.email,
//     subject: "Reset Password Link",
//     html: `<p>Hello ${user.username},</p>
//     <p>Please click on the following link to reset your password:</p>
//     <a href="${resetLink}">${resetLink}</a>
//     <br>
//     <p>The link will expire in 1 hour.</p>
//     <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`,
//   };
//   const sendEmail = await sendMail({
//     to: user.email,
//     subject: "Password Reset Link",
//     html: message.html,
//   });
//   if (sendEmail.errno) {
//     throw new BadRequestError("Something went wrong with mail service");
//   }
//   res.status(StatusCodes.OK).json(sendEmail.messageId);
// };

// const resetPassword = async (req, res) => {
//   // Check if the token exists in the database or not
//   if (!req.params.token)
//     throw new BadRequestError("Provide the token properly");
//   const existsInDb = await db.query(
//     `SELECT reset_token FROM users WHERE reset_token = $1`,
//     [req.params.token]
//   );
//   if (existsInDb.rowCount === 0)
//     throw new Error(`Invalid Token. Redo the Forgot password`);

//   // If token exists in the database, Decode the token
//   // See if the token is valid or expired
//   const decodedToken = jwt.verify(
//     existsInDb.rows[0].reset_token,
//     process.env.JWT_SECRET
//   );
//   if (!decodedToken) throw new UnauthorizedError("Token expired.");
//   // If the token is not expired, From the decoded token, fetch the user by userID
//   const foundUser = await db.query("SELECT password FROM users WHERE id = $1", [
//     decodedToken.userId,
//   ]);

//   if (foundUser.rowCount === 0) {
//     throw new UnauthorizedError("Invalid Token");
//   }
//   // hash the new password provided in req body
//   const hashedPassword = await bcrypt.hash(req.body.password, 10);
//   // violate the previously generated reset token in users table
//   const updateUser = await db.query(
//     `UPDATE users SET password = $1, reset_token = $2 WHERE id = $3 RETURNING *`,
//     [hashedPassword, "", decodedToken.userId]
//   );

//   if ((updateUser.rowCount = 0))
//     throw new BadRequestError(
//       "Something went wrong while resetting your password"
//     );
//   res.status(StatusCodes.OK).send({ msg: "Password Reset successful" });
// };

// module.exports = {
//   registerUser,
//   loginUser,
//   updateUser,
//   deleteUser,
//   forgotPassword,
//   resetPassword,
// };
