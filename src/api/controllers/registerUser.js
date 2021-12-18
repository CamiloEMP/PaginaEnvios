const bcrypt = require("bcrypt");
const registerUser = require("express").Router();
const { Register } = require("../../db/models/Register");
const roundsSal = 10;

registerUser.get("/", async (req, res) => {
  const users = await Register.find({}).populate("pedidos");
  res.json(users).end();
});

registerUser.post("/", (req, res) => {
  const userRegister = req.body;
  if (!userRegister) {
    return res.status(400).json({
      error: 'required "content" field is missing',
    });
  }

  bcrypt.hash(userRegister.password, roundsSal, (err, hash) => {
    if (err) console.log("Error en el hash");
    else {
      const newUserRegister = new Register({
        name: userRegister.name,
        email: userRegister.email,
        passwordHash: hash,
        tipoUser: "normal",
      });
      newUserRegister
        .save()
        .then(() => res.status(200).end())
        .catch(() => res.status(401).end());
    }
  });
});

module.exports = registerUser;