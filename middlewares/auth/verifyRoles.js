const db = require("../../utils/db");
const UnauthorizedError = require("../../errors/UnauthorizedError");

const checkRoles = async (req, res, next) => {
  const userRoles = await db.query(
    `SELECT * FROM users LEFT JOIN roles ON users.role = roles.id WHERE users.id = $1`,
    [req.user.userId]
  );
  if (
    !userRoles.rowCount ||
    !userRoles.rows[0].role ||
    userRoles.rows[0].permissions.length === 0
  ) {
    throw new UnauthorizedError("No Access as No Roles");
  }
  req.user.role = userRoles.rows[0].name;
  req.user.permissions = userRoles.rows[0].permissions;

  // for (let i = 0; i < req.body.roles.length; i++) {
  //   if (!ROLES.includes(req.body.roles[i])) {
  //     throw new UnauthorizedError("The specified role doesn't exist");
  //   }
  //   return;
  // }

  next();
};
module.exports = checkRoles;
