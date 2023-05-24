const { StatusCodes } = require("http-status-codes");
const fetch = require("node-fetch");
const NotFoundError = require("../errors/NotFoundError");
const UnauthorizedError = require("../errors/UnauthorizedError");

const db = require("../utils/db");
const BadRequestError = require("../errors/BadRequestError");

const getAllCompanies = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "Get All Companies hit" });
};

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
  } = req.body;

  if (req.user.role.weight < 100) {
    throw new UnauthorizedError("You are not allowed to add a company");
  }

  if (!name || !email)
    throw new BadRequestError("Provide company name and email");

  const company = await db.query(
    "INSERT INTO companies (name, email, phone_number, website, registration_number, company_number, industry, country, state, city, zip_code, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
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
    ]
  );
  res.status(StatusCodes.CREATED).json({ company: company.rows[0] });
};

module.exports = { getAllCompanies, addLocalCompany };
