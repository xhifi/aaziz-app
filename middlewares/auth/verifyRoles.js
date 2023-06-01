const db = require("../../utils/db");
const UnauthorizedError = require("../../errors/UnauthorizedError");

const checkRoles = async (req, res, next) => {
  const userRolesQuery = await db.query(
    `SELECT 
      users.id as user_id, 
      role as role_id, 
      roles.name as role_name, 
      roles.permissions as permissions, 
      roles.weight as role_weight FROM users
      LEFT JOIN roles ON users.role = roles.id WHERE users.id = $1;`,
    [req.user.userId]
  );

  if (!userRolesQuery.rowCount) {
    throw new UnauthorizedError("No Access as No Roles");
  }

  const [userRoles] = userRolesQuery.rows;

  req.user.role = {
    name: userRoles.role_name,
    id: userRoles.role_id,
    permissions: userRoles.permissions,
    weight: userRoles.role_weight,
  };
  req.user.permissions = userRoles.permissions;

  next();
};
module.exports = checkRoles;
