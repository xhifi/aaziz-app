const { StatusCodes } = require("http-status-codes");
const { UnauthorizedError, NotFoundError } = require("../../errors");
const db = require("../../utils/db");

const getAllCompanies = async (req, res) => {
  const { role } = req.user;

  if (role.weight < 900) {
    throw new UnauthorizedError("You are not allowed to do that operation.");
  }

  const allCompanies = await db.query(`SELECT * FROM companies;`);
  if (allCompanies.rowCount < 1) {
    throw new NotFoundError("No companies found in the system");
  }

  res.status(StatusCodes.OK).json(allCompanies.rows);
};
module.exports = getAllCompanies;
