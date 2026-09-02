/**
 * !funciones de expresion
 * 
 * 
 * fuction
 *  * Que es una funcion?
 * una funcion es un bloque de codigo que se puede reutilizar
 * CUAL ES LA SINTAXIS DE UNA FUNCION?
 * 
 * function nombreDeLaFuncion(){
 * PARTES DE LA FUNCION
 * 1. palabra reservada function
 * 2. nombre de la funcion
 * 3. parentesis ()
 * 4. llaves {} 
 * 
 *  La parte de los operadores, sdimbolos tiene un orden especifico, 
 * si no se respeta el orden de los operadores, simbolos y palabras reservadas,
 *  el codigo no va a funcionar.
 * el orden de los simbolos es el siguiente: primero va la palabra reservada 
 * function, luego el nombre de la funcion, luego los parentesis y 
 * por ultimo las llaves.
 * 
 * ? 
 * 
  */  

//declarar la funcion expression:

const getTriangleArea = function(base, height) {  
  return (base * height) / 2;
}


let area = getTriangleArea(5, 10);
console.log(`El area del triangulo es: ${area}`); 


// Function Expression
const mostrarParesImpares = function () {
    // Pedimos al usuario un número
    const number = parseInt(prompt("Ingrese un número: "));
    // Recorremos desde 1 hasta el número ingresado
    for (let i = 1; i <= number; i++) {
        // Verificamos si el número es par
        if (i % 2 === 0) {
            console.log(`${i} es un número par`);
        } else {
            console.log(`${i} es un número impar`);
        }
    }
};

// Ejecutamos la función
mostrarParesImpares();

//ese numero representa el limite de una serie
//mostrar que numeros son pares o impares en una serie de 1 hasta el 
// numero ingresado
/** que sea una function expression */


const evenOrOdd = function (limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(`${i} es un número par`);
        } else {
            console.log(`${i} es un número impar`);
        }
    }
};  

evenOrOdd(10); // Llamada a la función con un límite de 10
console.log("Fin de la función evenOrOdd"); 
evenOrOdd(15); // Llamada a la función con un límite de 15
console.log(" esta es otra ejecucion de la funcion evenOrOdd"); 

