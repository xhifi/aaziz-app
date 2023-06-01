const { StatusCodes } = require("http-status-codes");
const { UnauthorizedError } = require("../../errors");
const db = require("../../utils/db");

const addLocalCompany = async (req, res) => {
  const {
    name,
    email,
    phone_number,
    website,
    registration_number,
    company_number,
    industry,
    country,
    state,
    city,
    zip_code,
    address,
    created_at,
  } = req.body;

  if (req.user.role.weight < 100) {
    throw new UnauthorizedError("You are not allowed to add a company");
  }

  const companyAdded = await db.query(
    "INSERT INTO companies (name, email, phone_number, website, registration_number, company_number, industry, country, state, city, zip_code, address, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
    [
      name,
      email,
      phone_number,
      website,
      registration_number,
      company_number,
      industry,
      country,
      state,
      city,
      zip_code,
      address,
      created_at,
    ]
  );

  res.status(StatusCodes.CREATED).json({
    status: "added",
    companiesHouseData: req.companiesHouseValidation,
  });
};

module.exports = addLocalCompany;
