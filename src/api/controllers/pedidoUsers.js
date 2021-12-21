const pedidoUsers = require("express").Router();
const jwt = require("jsonwebtoken");
const { Register } = require("../../db/models/Register");
const { Pedido } = require("../../db/models/Pedido");
const generateCode = require("../../utils/generateCodePedido");

pedidoUsers.get("/", async (req, res) => {
  const pedidos = await Pedido.find({}).populate("usuario", {
    name: 1,
  });
  res.json(pedidos).end();
});

pedidoUsers.post("/", async (req, res) => {
  const { body } = req;
  const {
    direccion,
    lugarDestino,
    lugarOrigen,
    destinatario,
    barrio,
  } = body;

  const authorization = req.get("authorization");
  let token = '';

  if (authorization && authorization.toLocaleLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }
  let decodedToken = {};

  try {
    decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
  } catch (e) {
    console.log(e);
  }

  if (!token || !decodedToken.id) {
    return res.status(401).json({
      error: "token missing or invalid",
    });
  }
  
  const {id: idUsuario} = decodedToken;
  const user = await Register.findById(idUsuario);
  if (!user) {
    return res.status(400).json({
      error: "User not exist",
    });
  }
  const codigoPedido = Number(generateCode(8));
  const newPedido = new Pedido({
    direccion,
    fechaPedido: new Date(),
    lugarDestino,
    lugarOrigen,
    destinatario,
    barrio,
    estado: "Cancelado",
    codigo: codigoPedido,
    usuario: user._id,
  });
  try {
    const savePedido = await newPedido.save();
    user.pedidos = user.pedidos.concat(savePedido._id);
    await user.save();
    res.json(savePedido);
  } catch (error) {
    console.log("Error guardar pedido", error);
  }
});

module.exports = pedidoUsers;
