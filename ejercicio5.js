const usuarios = [
    {
        nombre: "Andrés",
        movimientos: [-10000, -5000, 20000]
    },
    {
        nombre: "Laura",
        movimientos: [-15000, 30000, -5000]
    },
    {
        nombre: "Carlos",
        movimientos: [10000, -3000, -7000]
    }
];

for (let usuario of usuarios) {

    let totalUsuario = 0;

    for (let movimiento of usuario.movimientos) {
        totalUsuario = totalUsuario + movimiento;
    }

    console.log(usuario.nombre, "tiene un total de:", totalUsuario);
}