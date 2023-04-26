const BadRequestError = require("../../errors/BadRequestError");
const UnauthorizedError = require("../../errors/UnauthorizedError");
const db = require("../../utils/db");
const jwt = require("jsonwebtoken");

const checkDuplicates = async (req, res, next) => {
  const { rows: foundUser } = await db.query(
    `SELECT * FROM users WHERE name=$1 OR email=$2`,
    [req.body.userName, req.body.email]
  );
  if (foundUser) {
    throw new BadRequestError("Email or Username already exists");
  }
  next();
};

const checkRoles = (req, res, next) => {
  const ROLES = db.query(`SELECT * FROM roles`);
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        throw new UnauthorizedError("The specified role doesn't exist");
      }
      return;
    }
  }
  next();
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new UnauthorizedError("Unauthorized. No Token provided.");
  }
  jwt.verify(token, "MYSECRETSHOULDBEINENVVARIABLES", (err, decoded) => {
    if (err) throw new UnauthorizedError("Invalid Token");
  });
  req.userId = decoded.userId;
  next();
};

module.exports = {
  checkDuplicates,
  checkRoles,
  verifyToken,
};
