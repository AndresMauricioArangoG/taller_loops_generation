const movimientos = [-10000,-14000,12000,16000,20000,24000];
let total = 0;
let cantidadRetiros = 0;

for(let movimiento of movimientos){
    total = total + movimiento

    if(movimiento < 0){
    cantidadRetiros = cantidadRetiros + 1

}
}

console.log (total)
console.log (cantidadRetiros)

