const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const db = require("../../utils/db");

const ForbiddenRequestError = require("../../errors/ForbiddenRequestError");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await db.query(`SELECT id FROM users WHERE email = $1`, [
    email,
  ]);
  if (existingUser.rowCount > 0) {
    throw new ForbiddenRequestError("Email already exists. Forgot Password?");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await db.query(
    `INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *`,
    [name, email, hashedPassword]
  );
  const user = newUser.rows[0];
  const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  res.status(StatusCodes.CREATED).json({ accessToken });
};

module.exports = registerUser;
