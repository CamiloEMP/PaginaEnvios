require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
app.use(cors());
require("../db/mongo");
const { Register } = require("../db/models/Register");
const roundsSal = 10;

app.use(express.json());

app.get("/api/register", (req, res) => {
  Register.find({}).then((data) => {
    res.json(data);
  });
});

app.post("/api/register", (req, res) => {
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

app.post("/api/login", async (req, res) => {
  const { body } = req;
  const { emailLogin, passwordLogin } = body;
  const user = await Register.findOne({ emailLogin });
  const passwordCorrect =
    emailLogin === null
      ? false
      : await bcrypt.compare(passwordLogin, user.passwordHash);

  if (!(user && passwordCorrect)) {
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
      token,
    })
    .end();
});

app.post("/api/pedido", (req, res) => {
  null
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Corriendo en el servidor: ", PORT));
