const { StatusCodes } = require("http-status-codes");

const db = require("../../utils/db");

const BadRequestError = require("../../errors/BadRequestError");
const UnauthorizedError = require("../../errors/UnauthorizedError");
const NotFoundError = require("../../errors/NotFoundError");

const updateUser = async (req, res) => {
  const { name, email, address } = req.body;
  const isSelf = req.params.id === req.user.userId;
  if (!isSelf && !req.user.permissions.includes("can_edit_self")) {
    throw new UnauthorizedError(
      "You are not authorized to modify your account. Contact an administrator."
    );
  }

  const found = await db.query(`SELECT * FROM users WHERE users.id = $1`, [
    req.params.id,
  ]);

  if (isSelf && req.user.permissions.includes("can_edit_self")) {
    const updated = await db.query(
      `UPDATE users SET name = $1, email = $2, address = $3 WHERE id = $4 RETURNING *`,
      [
        name || found.rows[0].name,
        email || found.rows[0].email,
        address || found.rows[0].address,
        req.user.userId,
      ]
    );
    return res
      .status(StatusCodes.OK)
      .send(`Updated Self: ${updated.rows[0].id}`);
  }
  if (req.user.permissions.includes("can_edit_users")) {
    if (found.rowCount === 0) {
      throw new NotFoundError(
        "User with provided id " + req.params.id + " doesn't exist"
      );
    }
    const updated = await db.query(
      `UPDATE users SET name = $1, email = $2, address = $3 WHERE id = $4 RETURNING *`,
      [
        name || found.rows[0].name,
        email || found.rows[0].email,
        address || found.rows[0].address,
        req.params.id,
      ]
    );
    return res
      .status(StatusCodes.OK)
      .send(`Updated another user: ${updated.rows[0].id}`);
  }
  throw new BadRequestError("Something went wrong");
};

module.exports = updateUser;
