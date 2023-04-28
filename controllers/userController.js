const { StatusCodes } = require("http-status-codes");
const db = require("../utils/db");
const NotFoundError = require("../errors/NotFoundError");
const UnauthorizedError = require("../errors/UnauthorizedError");

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
const deleteAll = (req, res) => {};
const updateAll = (req, res) => {};
const getById = (req, res) => {};
const updateById = (req, res) => {};
const deleteById = (req, res) => {};

module.exports = {
  getAll,
  deleteAll,
  updateAll,
  getById,
  updateById,
  deleteById,
};
