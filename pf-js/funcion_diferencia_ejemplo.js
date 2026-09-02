/**
 * ! Callbacks, Function Declaration, Function Expression y Arrow Functions:
 * Es una funcion que se pasa como argumento a otra función.
 * para ser ejecutada en el momento en que se cumpla cierta condición.
 * que la funcion que recibe el callback lo decida.
 * 
 * ?funciiones  ciudadanos de primera clase:
 * todas las funciones son tratadas como objetos de primera clase, 
 * las funciones son trtatadas como un valor.
 * 
 *   
 * : 
 * () =>
 *  *  *  * fuction
 * 
 */
/** 
 function procesarPago (nombreCliente, callback, cuenta) {
    const saldoApagar = callback(cuenta);
    console.log(`El cliente ${nombreCliente} debe pagar: $${saldoApagar} 
        despues de impuestos`);
}


/**
 * Opciones para funciones de callback:
 * 1. Crear una funcion aparte y luego mandarla como argumento.
 * 2. Crear una funcion anonima y mandarla como argumento.Se hace dentro de la
 * funcion principal, no se puede reutilizar.
 * 3. Crear una funcion flecha y mandarla como argumento.   
 * 
 */

/**
function addIVA(cuenta) {
    return cuenta * 1.16;
    procesarPago("Juan", addIVA, 2000);

}  
*/

// PROCESAR PAGOS CON FUNCIONES ANONIMA, 2 EJEMPLOS, UNO CON FUCTION Y OTRO 
// CON ARROW FUNCTION

// FUNCIÓN PRINCIPAL
// Recibe:
// nombre = nombre del cliente
// callback = función que hará una operación
// cuenta = cantidad original

function procesarPago(nombre, callback, cuenta) {
    const total = callback(cuenta);
    console.log(`Cliente: ${nombre}`);
    console.log(`Cuenta original: $${cuenta}`);
    console.log(`Total a pagar: $${total}`);
    console.log("-----------------------------");
}
// FUNCIÓN PARA AGREGAR IVA
function addIVA(cuenta) {
    return cuenta * 1.16;
}

// EJEMPLO 1
// Callback usando una función declarada
console.log("----- Callback con función declarada -----");
procesarPago(
    "Josue",
    addIVA,
    2000
);
// EJEMPLO 2
// Callback usando una función anónima
console.log("----- Callback con función anónima -----");
procesarPago(
    "Carlos",
    function (cuenta) {
        return cuenta * 1.2;
    },
    2000
);
// EJEMPLO 3
// Callback usando Arrow Function
console.log("----- Callback con Arrow Function -----");
procesarPago(
    "Javier",
    (cuenta) => cuenta * 1.3,
    2000
);