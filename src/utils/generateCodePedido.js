const generateCode = function (cantidadNumeros) {
  let myArray = [];
  while (myArray.length < cantidadNumeros) {
    let numeroAleatorio = Math.ceil(Math.random() * cantidadNumeros);
    let existe = false;
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] == numeroAleatorio) {
        existe = true;
        break;
      }
    }
    if (!existe) {
      myArray[myArray.length] = numeroAleatorio;
    }
  }
  return myArray.join("");
}

module.exports = generateCode;