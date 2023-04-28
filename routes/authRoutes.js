const router = require("express").Router();
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");
const verifyJWT = require("../middlewares/auth/verifyJWT");
const verifyRoles = require("../middlewares/auth/verifyRoles");

router.route("/").post(registerUser).get(loginUser);

router
  .route("/:id")
  .put(verifyJWT, verifyRoles, updateUser)
  .delete(deleteUser, verifyJWT, verifyRoles); // Delete Route not finalized

router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:token").post(resetPassword);

module.exports = router;
