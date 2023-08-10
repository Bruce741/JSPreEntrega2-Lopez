// Inicio //

alert('Esta pagina es para mayores de edad')

let edad = parseInt(prompt("Ingrese su edad"));

while (edad >= 18){

    alert('Puede Acceder')

    // Operaciones //
    const suma = (a, b) => a + b;
    const resta = (a, b) => a - b;
    const iva = (x) => x * 0.21;
    const multiplicacion = (a,b) => a*b; 

    // Variables // 

    let precioProducto = prompt('Ingrese El Precio Del Producto');
    let descuento = 0;
    

    // Tiene Descuento? //

    let tieneDescuento = prompt('Tiene Descuento?');

    if (tieneDescuento == 'Si'){
    descuento = prompt('De cuanto?')
    } else {
        alert('Okey!')
    }

    // Unidades // 

    let unidades = parseInt(prompt('Cuantas unidades quiere?'))

    // Resultado // 

    var precioFinal = multiplicacion(suma(resta(precioProducto,descuento),iva(precioProducto)),unidades);

    alert(`El monto a pagar es ${precioFinal}`)

        break;
    }
while (edad <18) {
    alert('Regrese cuando sea mayor')
}

/* Consulta

Yo me habia basado en la idea que habia mostrado el profe en clase al crear funciones para cada operacion matematica y luego al calcular el precio simplemente llamarlas y pasarle los parametros, pero el uso funciones de flecha y yo aca intente usar funciones comunes. No se si tuve un error con las funciones o es que en este caso si o si se usan funciones de flecha. 

function suma(numero1,numero2) {
numero1 + numero2
}

function iva(numeroX) {
numeroX * 0.21;
}

function resta(numero1,numero2) {
numero1 - numero2
}

function multiplicacion(numero1,numero2) {
    numero1 * numero2
} 
*/


