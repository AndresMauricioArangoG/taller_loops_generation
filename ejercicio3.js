const prompt = require('prompt-sync')();
let opcion;

do {
    console.log("1) Ver saldo");
    console.log("2) Enviar dinero");
    console.log("3) Recargar");
    console.log("4) Salir")

    opcion = Number(prompt("Elige una opcion: "))
} while (opcion != 4)