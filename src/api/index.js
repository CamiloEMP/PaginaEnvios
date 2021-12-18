require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("../db/mongo");
const registerUser = require("./controllers/registerUser");
const loginUsers = require("./controllers/loginUsers")
const pedidosUser = require("./controllers/pedidoUsers")

app.use(express.json());

app.use("/api/register", registerUser)

app.use("/api/register", registerUser)

app.use("/api/login", loginUsers);

app.use("/api/pedido", pedidosUser);

app.use("/api/pedido", pedidosUser);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Corriendo en el servidor: ", PORT));
