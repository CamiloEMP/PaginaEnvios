const { Schema, model } = require("mongoose");

const pedidoSchema = new Schema({
  direccion: String,
  fechaPedido: Date,
  lugarDestino: Object,
  lugarOrigen: Object,
  destinatario: Object,
  estado: String,
  codigo: Number,
  usuario: [{
    type: Schema.Types.ObjectId,
    ref: 'UserRegister'
  }]
});

pedidoSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Pedido = model("Pedido", pedidoSchema);
module.exports = { Pedido };
