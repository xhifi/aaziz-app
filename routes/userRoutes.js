const router = require("express").Router();
const verifyJWT = require("../middlewares/auth/verifyJWT");
const verifyRoles = require("../middlewares/auth/verifyRoles");

const {
  deleteAll,
  getAll,
  updateAll,
  deleteById,
  getById,
  updateById,
} = require("../controllers/userController");

router
  .route("/")
  .get(verifyJWT, verifyRoles, getAll)
  .put(updateAll)
  .delete(deleteAll);
router.route("/:id").get(getById).put(updateById).delete(deleteById);

module.exports = router;
