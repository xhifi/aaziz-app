const bcrypt = require("bcrypt");

const createJWT = function (id, time = 3600, secret = process.env.JWT_SECRET) {
  return jwt.sign(
    { userId: id },
    secret || "MYMILKSHAKEBRINGSALLTHEBOYSTOTHEYARD",
    { expiresIn: process.env.JWT_TTL || time }
  );
};

const comparePassword = function (pwd) {
  const isMatch = bcrypt.compare(pwd, this.password);
  return isMatch;
};

const hashPassword = function (pwd) {
  const hashed = bcrypt.hash(pwd, 10);
  return hashed;
};

module.exports = { createJWT, comparePassword, hashPassword };
