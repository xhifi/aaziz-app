const router = require("express").Router();
const verifyJWT = require("../middlewares/auth/verifyJWT");
const verifyRoles = require("../middlewares/auth/verifyRoles");

const {
  getAllCompanies,
  addCompany,
  deleteCompany,
  getCompany,
  updateCompany,
} = require("../controllers/companiesController");

const validateCompany = require("../middlewares/companies/validateCompany");

router
  .route("/")
  .get(verifyJWT, verifyRoles, getAllCompanies)
  .post(verifyJWT, verifyRoles, validateCompany, addCompany);

router
  .route("/:company_number")
  .get(verifyJWT, verifyRoles, getCompany)
  .put(verifyJWT, verifyRoles, updateCompany)
  .delete(verifyJWT, verifyRoles, deleteCompany);

module.exports = router;
