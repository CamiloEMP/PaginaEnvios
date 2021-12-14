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
// Register.find({}).then((result) => {
//   console.log(result);
//   mongoose.connection.close();
// });
// const register = new Register({
//   name: "Camilo mora",
//   email: "camilo.mora1707@gmail.com",
//   password: "camilo123",
// });

// register
//   .save()
//   .then((result) => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch((err) => console.log(err));