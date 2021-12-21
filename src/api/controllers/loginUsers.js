const bcrypt = require("bcrypt");
const loginUsers = require("express").Router();
const jwt = require("jsonwebtoken");
const { Register } = require("../../db/models/Register");

loginUsers.post("/", async (req, res) => {
  const { body } = req;
  const { emailLogin, passwordLogin } = body;
  const user = await Register.findOne({email: emailLogin});
  if (!user) {
    res.status(401).end();
  }
  const passwordCorrect =
    emailLogin === null
      ? false
      : await bcrypt.compare(passwordLogin, user.passwordHash);

  if (!passwordCorrect) {
    res.status(401).end();
  }

  const userForToken = {
    id: user._id,
    name: user.name,
    tipoUser: user.tipoUser,
  };
  const token = jwt.sign(userForToken, process.env.SECRET_TOKEN);
  res
    .send({
      name: user.name,
      tipoUser: user.tipoUser,
      id: user._id,
      token,
    })
    .end();
});

module.exports = loginUsers;
