const router = require("express").Router();
const verifyJWT = require("../middlewares/auth/verifyJWT");
const verifyRoles = require("../middlewares/auth/verifyRoles");

const {
  getAll,
  deleteById,
  getById,
  updateById,
  assignRole,
} = require("../controllers/userController");

router.route("/").get(verifyJWT, verifyRoles, getAll);

router.route("/:id").get(getById).put(updateById).delete(deleteById);
router.route("/assign-roles/:id").put(verifyJWT, verifyRoles, assignRole);

module.exports = router;
