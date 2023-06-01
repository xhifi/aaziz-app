const fetch = require("node-fetch");
const BadRequestError = require("../../errors/BadRequestError");
const db = require("../../utils/db");

const baseUrl = process.env.COMPANIES_HOUSE_BASE_URL;
const apiKey = Buffer.from(process.env.COMPANIES_HOUSE_API_KEY).toString(
  "base64"
);

const getCompanyData = async (id) => {
  const res = await fetch(`${baseUrl}/company/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${apiKey}`,
      Accept: "application/vnd.hmrc.1.0+json",
    },
  });
  const data = await res.json();

  return data;
};

const validateCompany = async (req, res, next) => {
  const { company_number, name, email, phone_number } = req.body;

  if (!name || !email || !phone_number || !company_number) {
    throw new BadRequestError(
      "Provide company name and email, phone number and Company number"
    );
  }

  const companyExists = await db.query(
    `SELECT company_number, name FROM companies WHERE name = $1 OR company_number = $2`,
    [name, company_number]
  );
  if (companyExists.rowCount > 0) {
    throw new BadRequestError(
      `Company with company# ${companyExists.rows[0].company_number} already exists in the system`
    );
  }

  const companiesHouseData = await getCompanyData(company_number);
  req.companiesHouseValidation = companiesHouseData;

  next();
};

module.exports = validateCompany;
