require("dotenv").config();
const express = require("express");
const app = express();
require("../db/mongo");
const { Register } = require("../db/models/Register");

app.use(express.json());

app.get("/api/register", (req, res) => {
  Register.find({}).then((registers) => {
    res.json(registers);
  });
});

app.post("/api/register")

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Corriendo en el servidor: ", PORT));
