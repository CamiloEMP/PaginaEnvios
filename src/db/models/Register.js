const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const registerSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  passwordHash: String,
  tipoUser: String,
  pedidos: [{
    type: Schema.Types.ObjectId,
    ref: 'Pedido'
  }]
});

registerSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

registerSchema.plugin(uniqueValidator)

const Register = model("UserRegister", registerSchema);
module.exports = { Register };
