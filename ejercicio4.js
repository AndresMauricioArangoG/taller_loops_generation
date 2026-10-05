const movimientos = [-10000, -14000, 12000, 16000, 20000, 24000, 0];

for (let i = 0; i < movimientos.length; i++) {

    if (movimientos[i] === 0) {
        continue;
    }

    if (movimientos[i] === 12000) {
        console.log("Pago encontrado en la posición:", i);
        break;
    }
}