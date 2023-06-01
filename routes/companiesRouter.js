const router = require("express").Router();
const verifyJWT = require("../middlewares/auth/verifyJWT");
const verifyRoles = require("../middlewares/auth/verifyRoles");

const {
  getAllCompanies,
  addLocalCompany,
  deleteCompany,
} = require("../controllers/companiesController");

const validateCompany = require("../middlewares/companies/validateCompany");

router
  .route("/")
  .get(verifyJWT, verifyRoles, getAllCompanies)
  .post(verifyJWT, verifyRoles, validateCompany, addLocalCompany);

router.route("/:company_number").delete(verifyJWT, verifyRoles, deleteCompany);

module.exports = router;
