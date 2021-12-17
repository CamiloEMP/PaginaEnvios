const { Schema, model } = require("mongoose");

const registerSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

registerSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Register = model("UserRegister", registerSchema);
module.exports = { Register };