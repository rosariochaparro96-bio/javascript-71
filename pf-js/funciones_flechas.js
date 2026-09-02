/**
 * !funciones de flecha (Arrow Functions)
 *  *  * fuction
 *  * importante: una funcion es un bloque de codigo que se puede reutilizar
 * Retur implicito:
 * Quiere decir que si la funcion tiene una sola linea de codigo, 
 * no es necesario escribir la palabra reservada return, 
 * ya que el valor se retorna de manera implicita.
 * 
 * *Expresiones lambda (Arrow Functions) son una forma 
 * concisa de escribir funciones en JavaScript.
 * 
 * 
 * 
 * 
 * ? 
 * 
  */  

//declarar la funcion expression:

const addTwoNumbers = (a, b)  => a + b;
let result = addTwoNumbers(5, 3);
console.log(`El resultado de la suma  5 + 3 es: ${result}`); // Salida: El resultado
//  de la suma es: 8

//funcion flecha que necesite muchas cosas, se puede 
// escribir en varias lineas  , pero en este caso si 
// es necesario el return

const evenOrOdd = (limit) => {  
    let result = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(`${i} es par`);
        } else {
            console.log(`${i} es impar`);
        }   
        result += i;
    }   
    return total;
};

console.log(evenOrOdd(100)); // Salida: 15 (0 + 1 + 2 + 3 + 4 + 5 = 15)
