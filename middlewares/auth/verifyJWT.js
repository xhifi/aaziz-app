const jwt = require("jsonwebtoken");
const ForbiddenRequestError = require("../../errors/ForbiddenRequestError.js");
const UnauthorizedError = require("../../errors/UnauthorizedError");

const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    // const token = authHeader.split(" ")[1];
    // const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        throw new ForbiddenRequestError("Unauthorized, token Not verified");
      }
      req.user = user;
      next();
    });
  } else {
    throw new UnauthorizedError("Unauthorized, token not verified");
  }
};

module.exports = verifyJWT;
