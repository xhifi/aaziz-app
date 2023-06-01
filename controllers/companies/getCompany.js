const { StatusCodes } = require("http-status-codes");
const db = require("../../utils/db");

const getCompany = async (req, res) => {
  const user = req.user;
  const { company_number } = req.params;

  if (user.role.weight < 500) {
    return res
      .status(StatusCodes.FORBIDDEN)
      .send("You are not allowed to do this operation");
  }

  const { rows } = await db.query(
    `SELECT * FROM companies WHERE company_number = $1;`,
    [company_number]
  );
  if (rows.length === 0) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .send(`${company_number} doesn't exist in the system`);
  }
  return res.status(StatusCodes.OK).json(rows);
};

module.exports = getCompany;
