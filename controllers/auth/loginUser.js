const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const db = require("../../utils/db");

const BadRequestError = require("../../errors/BadRequestError");
const UnauthorizedError = require("../../errors/UnauthorizedError");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Enter email and password correctly");
  }

  const getUser = await db.query(
    "SELECT users.id as user_id, users.name, users.password, users.email, roles.id as role_id, roles.name, roles.permissions FROM users JOIN roles on users.role = roles.id WHERE email = $1",
    [email]
  );
  if (getUser.rowCount === 0) {
    throw new UnauthorizedError("Invalid Email");
  }

  const user = getUser.rows[0];

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new BadRequestError("Invalid Password");
  }

  const accessToken = jwt.sign(
    { userId: user.user_id },
    process.env.JWT_SECRET
  );

  res.status(StatusCodes.OK).json({ accessToken });
};

module.exports = loginUser;
