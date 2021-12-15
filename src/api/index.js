require("dotenv").config();
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
        password: hash,
      });
      newUserRegister
        .save()
        .then(() => res.status(200).end())
        .catch((err) => console.log("Error ", err));
    }
  });
});

app.post("/api/login", async (req, res) => {
  const user = req.body;
  if (!user) {
    return res.status(400).json({
      error: 'required "content" field is missing',
    });
  }
  const userLogged = await Register.findOne({ email: user.email });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Corriendo en el servidor: ", PORT));
