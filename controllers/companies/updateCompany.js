const db = require("../../utils/db");
const { BadRequestError, NotFoundError } = require("../../errors");
const { StatusCodes } = require("http-status-codes");

const updateCompany = async (req, res) => {
  // Optimize the query building process so data isn't overwritten in every query
  const user = req.user;
  const { company_number } = req.params;
  const {
    name,
    email,
    address,
    city,
    state,
    country,
    zip_code,
    phone_number,
    website,
    industry,
  } = req.body;

  const companyExists = await db.query(
    `SELECT name, email, address, city, state, country, zip_code, phone_number, website, industry, company_number registered_by FROM companies WHERE company_number=$1;`,
    [company_number]
  );
  if (companyExists.rowCount === 0) {
    throw new NotFoundError(`${company_number} doesn't exist in the system`);
  }
  const companyInDb = companyExists.rows[0];

  if (
    user.userId === companyExists.rows[0].registered_by ||
    user.role.weight > 500
  ) {
    const updateCompany = await db.query(
      `UPDATE companies SET
      name = $1,
      email=$2,
      address=$3,
      city=$4,
      state=$5,
      country=$6,
      zip_code=$7,
      phone_number=$8,
      website=$9,
      industry=$10
      WHERE company_number=$11 RETURNING *
      `,
      [
        name || companyInDb.name,
        email || companyInDb.email,
        address || companyInDb.address,
        city || companyInDb.city,
        state || companyInDb.state,
        country || companyInDb.country,
        zip_code || companyInDb.zip_code,
        phone_number || companyInDb.phone_number,
        website || companyInDb.website,
        industry || companyInDb.industry,
        company_number,
      ]
    );
    return res.send(updateCompany.rows);
  }
  return res
    .status(StatusCodes.BAD_REQUEST)
    .send("Something went wrong while updating the company");
};

module.exports = updateCompany;
