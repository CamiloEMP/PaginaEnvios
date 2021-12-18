const pedidoUsers = require("express").Router();
const { Register } = require("../../db/models/Register");
const { Pedido } = require("../../db/models/Pedido");

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
    estado,
    codigo,
    idUsuario,
  } = body;
  if (!idUsuario) {
    return res.status(400).json({
      error: "Contenido incompleto para generar el envio",
    });
  }
  const user = await Register.findById(idUsuario);
  if (!user) {
    return res.status(400).json({
      error: "User not exist",
    });
  }
  const newPedido = new Pedido({
    direccion,
    fechaPedido: new Date(),
    lugarDestino,
    lugarOrigen,
    destinatario,
    estado,
    codigo,
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
