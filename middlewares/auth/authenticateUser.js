const db = require("../../utils/db");
const UnauthorizedError = require("../../errors/UnauthorizedError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  const { email, password } = req.body;
  const findByEmail = await db.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (findByEmail.rowCount === 0) {
    throw new UnauthorizedError("User not found");
  }

  const user = findByEmail.rows[0];
  const comparedPwd = await bcrypt.compare(password, user.password);
  if (!comparedPwd) throw new UnauthorizedError("Password is wrong");

  const token = jwt.sign({ id: user.id }, JWT_SECRET);
  req.token = token;
  req.user = user;
  next();
};

module.exports = authenticateUser;
