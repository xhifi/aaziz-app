const { StatusCodes } = require("http-status-codes");
const { validate } = require("uuid");
const db = require("../../utils/db");

const BadRequestError = require("../../errors/BadRequestError");
const UnauthorizedError = require("../../errors/UnauthorizedError");
const NotFoundError = require("../../errors/NotFoundError");

const updateUser = async (req, res) => {
  const { name, email, address } = req.body;

  const isSelf = req.params.id === req.user.userId;
  const isUuidValid = validate(req.params.id);

  if (!isUuidValid) throw new BadRequestError("Provided id is invalid");

  if (isSelf) {
    const updated = await db.query(
      "UPDATE users SET name = $1, email = $2, address = $3 WHERE id = $4 RETURNING *",
      [
        name || found.rows[0].name,
        email || found.rows[0].email,
        address || found.rows[0].address,
        req.user.userId,
      ]
    );
    return res
      .status(StatusCodes.OK)
      .send(`You updated yourself: ${updated.rows[0].id}`);
  }
  if (req.user.role === "client" || req.user.role === "moderator") {
    throw new UnauthorizedError("You are Unauthorized to update other users");
  }

  const found = await db.query(`SELECT id FROM users WHERE id = $1`, [
    req.params.id,
  ]);
  if (found.rowCount === 0) {
    throw new NotFoundError("Requested record not found");
  }

  const updated = await db.query(
    `UPDATE users SET name = $1, address = $2 WHERE id = $3 RETURNING *`,
    [
      name || found.rows[0].name,
      email || found.rows[0].email,
      address || found.rows[0].address,
      req.params.id,
    ]
  );

  return res.status(StatusCodes.OK).send(`${updated.rows[0].id} was updated`);
};

module.exports = updateUser;
