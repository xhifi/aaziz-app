const fetch = require("node-fetch");
const BadRequestError = require("../../errors/BadRequestError");
const baseUrl = process.env.COMPANIES_HOUSE_BASE_URL;
const apiKey = process.env.COMPANIES_HOUSE_API_KEY;
const apiKeyBase64 = Buffer.from(apiKey).toString("base64");

const getCompanyData = async (id) => {
  const res = await fetch(`${baseUrl}/company/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${apiKeyBase64}`,
      Accept: "application/vnd.hmrc.1.0+json",
    },
  });
  const data = await res.json();

  return data;
};

const validateCompany = async (req, res, next) => {
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
  if (!company_number) throw new BadRequestError("Provide company number");

  const companyExists = await db.query(
    `SELECT company_number, name FROM companies WHERE name = $1 OR company_number = $2`,
    [name, company_number]
  );
  if (companyExists.rowCount > 0) {
    throw new BadRequestError("Company already exists");
  }

  const companyData = await getCompanyData(company_number);
  if (companyData.errors && companyData.errors.length > 0)
    throw new BadRequestError("No company record found in Companies House");
  req.companyData = companyData;

  next();
};

module.exports = validateCompany;
