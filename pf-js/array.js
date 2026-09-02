/**
 * !For Loops
 *  * Son estructuras de datos: 
 * son estructuras de control que nos permiten agrupar y/ o ordenar los datos de una manera mas eficiente.
 *  Dato no representa nada por si mismo, pero al ser agrupado con otros datos puede generar un valor.
 * Datos juntos forman una estructura de datos, que nos permite tener un orden y una forma de acceder a ellos. 
 * vamos a ver un ejemplo de una estructura de datos, que es un arreglo, que nos permite agrupar datos y acceder a ellos de manera mas eficiente. 
 *  * darle contexto se vueleve informacion, y nos permite generar un valor.
 * 
 * 
 * 
 * ? Arrays: 
 * son estructuras de datos que nos permiten agrupar datos y acceder a ellos de manera mas eficiente.
 * *importante:
 * los datos dentro de un arreglo se llaman elementos, y cada elemento tiene un indice, que nos permite acceder a ellos de manera mas eficiente.
 * los datos se indentifican por su indice, que es un numero que empieza en 0 y va aumentando de 1 en 1.
 * El tamaño se define por la cantidad de elementos que tiene el arreglo, y se puede acceder a ellos mediante su indice.
 * el tamaño real se cuenta desde 1, pero el indice empieza desde 0, por lo que el ultimo elemento tiene un indice de tamaño - 1.
 * 
 * const nombreDelArray = [elemento1, elemento2, elemento3];
 * const frutas = ["Manzana", "Pera", "Uva"];
 * *importante:
 * 
 * Pode mos guardar cualquier tipo de dato dentro de un arreglo, ya sea un numero, un texto, un booleano, un objeto, otro arreglo, etc.
 * Tienen tamaño dinamico, es decir que podemos agregar o quitar elementos del arreglo en cualquier momento.
 * 
 * 
 * ?For 
 * 
 * 


 */


//1. Como definir un array, todo tiene que ir dentro de una variable, y se define con corchetes [].
//2. Los elementos se separan por comas, y pueden ser de cualquier tipo de dato.
// se inicia con un const
const arrayVacio = [];
const arrayContenido = ["Alberto", 20, true];
//** obtencion de un elemento para guardar en un array
//** */ *notacion de corchetes [] para acceder a un elemento del arreglo, y se le pasa el indice del elemento que queremos obtener. */

console.log(arrayContenido[0]); // "Alberto"
console.log(arrayContenido[1]); // 20
console.log(arrayContenido[2]); // true

/** ingresa datos al array
 * Metodos 
 * Unshift: agrega un elemento al inicio del arreglo.
 * Push: agrega un elemento al final del arreglo.
 * Shift: elimina el primer elemento del arreglo.
 * Pop: elimina el ultimo elemento del arreglo.
 * 
 */


/* visualizacion de los metodos unshift y push, para agregar elementos al inicio y al final del arreglo. */

console.log("array antes");
console.log(arrayContenido);
arrayContenido.unshift("Javier");
console.log("array despues de unshift");
console.log(arrayContenido);

console.log("array antes");
console.log(arrayContenido);
arrayContenido.push("Daniel", false);
console.log("array despues de push");
console.log(arrayContenido);

/* Eliminar datos del array
1. Shift: elimina el primer elemento del arreglo.
2. Pop: elimina el ultimo elemento del arreglo.

nota: lo que va a dentro de los parentesis es el indice del elemento que queremos eliminar, si no le pasamos nada, 
elimina el primer elemento. Se le conoce como metodo de eliminacion, y se le pasa el indice del elemento que queremos eliminar.

*/

console.log("array antes");
console.log(arrayContenido);
//arrayContenido.shift();
console.log(`Elemento eliminado ${arrayContenido.shift()}`);
console.log("Array despues");
console.log(arrayContenido);

console.log("array antes");
console.log(arrayContenido);
//arrayContenido.pop();
console.log(`Elemento eliminado ${arrayContenido.pop()}`);
console.log("Array despues");
console.log(arrayContenido);    
/*Reasignar el valor de un indice del arreglo, para cambiar el valor de un elemento del arreglo, 
se le pasa el indice del elemento que queremos cambiar, y el nuevo valor.*/

arrayContenido[1] = "Liz";
arrayContenido[2] = "Rosario";
console.log(`Resultado de la reasignacion de un elemento ${arrayContenido[1]}`);
console.log(`Resultado de la reasignacion de un elemento ${arrayContenido[2]}`);
console.log(arrayContenido);

/**Splice
 * Elimina elementos de un arreglo, y puede agregar elementos en su lugar.
 */
console.log("ARRAY ANTES DE SPLICE");
console.log(arrayContenido);
arrayContenido.splice(1, 1);
console.log(arrayContenido);
arrayContenido.splice(1, 2);
console.log(arrayContenido);
/**AGREGAR ELEMNTOS
 * 
 */
const months = ["Jan", "March", "April", "June"]; /**primerio definir al array con su conjunto de datos */
 months.splice(3, 0, "Mar");
 console.log(months);
