const { StatusCodes } = require("http-status-codes");
const {
  UnauthorizedError,
  NotFoundError,
  BadRequestError,
} = require("../../errors");
const db = require("../../utils/db");

const deleteCompany = async (req, res) => {
  const { company_number } = req.params;
  if (req.user.role.weight < 900) {
    throw new UnauthorizedError("You are unauthorized to do that operation.");
  }
  const companyExists = await db.query(
    `SELECT id FROM companies WHERE company_number = $1;`,
    [company_number]
  );
  if (companyExists.rowCount === 0) {
    throw new NotFoundError(`${company_number} doesn't exist in the database.`);
  }
  const deleteCompany = await db.query(
    `DELETE FROM companies CASCADE WHERE company_number=$1 RETURNING *;`,
    [company_number]
  );
  if (deleteCompany.rowCount < 1) {
    throw new BadRequestError(
      "Something went wrong while deleting the company."
    );
  }
  res
    .status(StatusCodes.OK)
    .send(`${deleteCompany.rows[0].company_number} has been deleted`);
};

module.exports = deleteCompany;
