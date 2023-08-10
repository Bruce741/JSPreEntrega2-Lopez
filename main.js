// Inicio //

alert('Esta pagina es para mayores de edad');

let edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
alert('Puede Acceder')
} else {
    alert('Usted no puede Acceder')
}


// Operaciones //
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;
const multiplicacion = (a,b) => a*b; 

// Productos // 

class Producto {
    constructor (info) {
        this.nombre = info.nombre; 
        this.precio = info.precio;
    }
}

const producto1 = new Producto({
    nombre: "computadora",
    precio: 100,
})

const producto2 = new Producto({
    nombre: "television",
    precio: 50,
})

const producto3 = new Producto({
    nombre: "celular",
    precio: 40,
})

const producto4 = new Producto({
    nombre: "consola",
    precio: 100,
})

// Array de Productos // 

const productos = []; 

productos.push(producto1,producto2,producto3,producto4)


// Carrito // 
const carrito = []









// Variables de Precio // 

let precioCarrito = 0;
let descuento = 0;
    

// Tiene Descuento? //

let tieneDescuento = prompt('Tiene Descuento?');

if (tieneDescuento == 'Si'){
descuento = prompt('De cuanto?')
} else {
    alert('Okey!')
}


// Resultado // 

var precioFinal = multiplicacion(suma(resta(precioCarrito,descuento),iva(precioProducto)));

alert(`El monto a pagar es ${precioFinal}`)


    




