const express = require("express");

const ctrl = require("../../controllers/auth");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, authenticate, } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

// signup
router.post(
    "/register",
    validateBody(schemas.registerSchema),
    ctrlWrapper(ctrl.register)
  );

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.get("/verify", validateBody(schemas.verifyEmailSchema), ctrlWrapper(ctrl.resendVerifyEmail))
  
  // signin
  router.post(
    "/login",
    validateBody(schemas.loginSchema),
    ctrlWrapper(ctrl.login)
  );
  // current
  router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
  
  // logout
  
  router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

   // avatars
  // router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar))
  
  module.exports = router;
