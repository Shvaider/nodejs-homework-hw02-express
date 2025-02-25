const { User } = require("../../models/user");

const { RequestError, sendEmail } = require("../../helpers");

const resentVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(404, "Not found");
  }
  if (user.verify) {
    throw RequestError(400, "User already verify");
  }
  const mail = {
    to: email,
    subject: "Подтверждение регистрации на сайте",
    html: `<a href="http://localhost:3000/api/v1/auth/verify/${user.verificationToken}" target="_blank">Нажмите для подтверждения регистрации</a>`,
  };
  await sendEmail(mail);
  res.json({
    message: "Email verify resend",
  });
};

module.exports = resentVerifyEmail;
