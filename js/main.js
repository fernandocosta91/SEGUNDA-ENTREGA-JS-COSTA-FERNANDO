// alert()

const prestamo = {
    monto: 0,
    cuotas: 0,
};


const historialPrestamos = [];

alert("Bienvenido");

function calcularMontoTotal() {

    prestamo.monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
    
    prestamo.cuotas = parseInt(prompt("Ingrese el número de cuotas:"));

    if (prestamo.monto && prestamo.cuotas) {
        const valorCuota = prestamo.monto / prestamo.cuotas;

        if (prestamo.cuotas < 12) {
            console.log("Cuota mensual alta");
        }

        
        historialPrestamos.push({
            monto: prestamo.monto,
            cuotas: prestamo.cuotas,
            valorCuota: valorCuota,
        });
    } else {
        console.log("Error");
    }
}

calcularMontoTotal();


console.log("Historial de préstamos:");

historialPrestamos.forEach(function(prestamo, index) {


    console.log("Préstamo #" + (index + 1));    

    console.log("Monto del préstamo: $" + prestamo.monto);

    console.log("El número de cuotas es de: " + prestamo.cuotas);

    console.log("Cada cuota es de: $" + prestamo.valorCuota);
    console.log("--------------------------------------");
});