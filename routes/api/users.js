const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const { authenticate, upload } = require("../../middlewares");
const ctrl = require("../../controllers/users");
const router = express.Router();

// const { subscriptionShema } = require("../../models/user")

// const { User, schemas } = require("../../models/user");

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);
module.exports = router;
