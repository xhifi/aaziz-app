const router = require("express").Router();
const {
  deleteAll,
  getAll,
  updateAll,
  deleteById,
  getById,
  updateById,
} = require("../controllers/userController");

router.route("/").get(getAll).put(updateAll).delete(deleteAll);
router.route("/:id").get(getById).put(updateById).delete(deleteById);

module.exports = router;
