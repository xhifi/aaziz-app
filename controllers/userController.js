const { StatusCodes } = require("http-status-codes");
const NotFoundError = require("../errors/NotFoundError");
const UnauthorizedError = require("../errors/UnauthorizedError");

const db = require("../utils/db");
const BadRequestError = require("../errors/BadRequestError");

const getAll = async (req, res) => {
  if (req.user.role === "client") {
    throw new UnauthorizedError("Request Elevation from administrator");
  }
  const allUsers = await db.query(
    `SELECT name, email, id, address, created_at, updated_at, role, verification_status FROM users`
  );
  if (allUsers.rowCount === 0) {
    throw new NotFoundError("No User Found");
  }
  return res.status(StatusCodes.OK).json(allUsers.rows);
};

const getById = (req, res) => {};
const updateById = (req, res) => {};
const deleteById = (req, res) => {};

const assignRole = async (req, res) => {
  // If params.id is the same as req.user then don't allow

  const requiredRole = req.body.role;
  const userToUpdate = req.params.id;

  if (userToUpdate === req.user.userId) {
    throw new UnauthorizedError("You can't change your own role");
  }

  const {
    rows: [userToUpdateExists],
  } = await db.query(
    `SELECT users.name as user_name, email, users.id as user_id, users.created_at, users.updated_at, role, roles.name as role_name, permissions, weight FROM users FULL JOIN roles ON users.role = roles.id WHERE users.id = $1`,
    [userToUpdate]
  );

  const {
    rows: [requiredRoleExists],
  } = await db.query(`SELECT * FROM roles WHERE name = $1`, [requiredRole]);

  if (!userToUpdateExists) {
    throw new NotFoundError("Provided ID user doesn't exist");
  }

  if (!requiredRoleExists) {
    throw new BadRequestError(
      "Provided role is not acceptable as a valid role"
    );
  }

  if (userToUpdateExists.weight >= req.user.role.weight) {
    throw new UnauthorizedError("You can't change roles of your superiors");
  }

  if (req.user.role.weight <= requiredRoleExists.weight) {
    throw new BadRequestError(
      "You must have higher role than what you want to assign"
    );
  }

  const {
    rows: [updatedUser],
  } = await db.query(
    `UPDATE users SET role = (SELECT id FROM roles WHERE name = $1) WHERE id = $2 RETURNING users.name`,
    [requiredRole, userToUpdate]
  );

  return res
    .status(200)
    .send(`${updatedUser.name} assigned role ${req.body.role}`);
};

module.exports = {
  assignRole,
  getAll,
  getById,
  updateById,
  deleteById,
};
