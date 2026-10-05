const prompt = require('prompt-sync')();

const pinCorrecto = 4121;
let intento = Number(prompt("Escribe tu pin:"))

while(intento != pinCorrecto ){

    console.log("El pin es incorrecto intente de nuevo")

    intento = Number(prompt("Escribe tu pin nuevamente: "));

}

console.log("Bienvenido a nequi!!!")