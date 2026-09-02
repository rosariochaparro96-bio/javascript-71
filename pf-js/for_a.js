/**
 * !For Loops
 *  * Es una estructura de control que nos permite ejecutar un bloque de codigo un numero determinado de veces,
 *  y nos permite iterar sobre los elementos de un arreglo.
 * El bloque de codigo se ejecuta mientras la condicion sea verdadera, y se detiene cuando la condicion es falsa.
 * dentro de ellas se va a repetir un bloque de codigo un numero determinado de veces,
 *  y nos permite iterar sobre los elementos de un arreglo.
 * ? El bluque cuenta con 3 partes, la inicializacion, la condicion y el incremento. se coloca en los parentesis
 *  de la siguiente manera:
 * ? for (inicializacion; condicion; incremento) {
 * ? 
 * una variable que va actuar como contador, y se inicializa en 0, ya que el primer elemento de un arreglo tiene un indice de 0.
 * ? la condicion es una expresion que se evalua antes de cada iteracion, y mientras sea verdadera, el bloque de codigo se ejecuta.
 * ? el incremento es una expresion que se ejecuta al final de cada iteracion, y sirve para actualizar la variable contador.
 * 
 * Nota: se usa mucho para recorrer  * arrays* arreglos, ya que nos permite acceder a cada elemento del arreglo mediante su indice.
 *MEtodo para saber el tamaño de  array.
 nombreArray.length; // nos devuelve el tamaño del arreglo, es decir la cantidad de elementos que tiene.
  */  

const numeros = [
  12, 45, 7, 89, 23, 56, 34, 78, 91, 10,
  67, 32, 4, 76, 54, 21, 98, 43, 65, 11,
  87, 29, 50, 73, 16, 94, 38, 61, 8, 82,
  27, 69, 14, 95, 41, 58, 3, 77, 36, 84,
  19, 63, 47, 90, 25, 71, 6, 53, 80, 31,
  99, 42, 17, 68, 35, 86, 22, 74, 9, 57,
  93, 40, 15, 62, 28, 81, 5, 70, 48, 96,
  24, 59, 33, 88, 13, 66, 44, 79, 2, 55,
  97, 30, 18, 72, 46, 85, 20, 64, 39, 92,
  1, 52, 26, 75, 49, 83, 37, 60, 51, 100
];

for (let i = 0; i < numeros.length; i++) {  // inicializacion; condicion; incremento
  console.log(`El numero en la posicion ${i} es: ${numeros[i]}`); // accedemos a cada elemento del arreglo mediante su indice. iniciar menor a mayor, para recorrer 
  // el arreglo de inicio a fin. 
}
console.log("Fin del recorrido del arreglo numeros");

/* se suman los numeros i
*/
let total = 0;
for (let c = 0; c < numeros.length; c++) {
   /* sintaxis tradicional de for, con la variable c que actua como contador, y se inicializa en 0, ya que el primer elemento de un arreglo tiene un indice de 0.
    la condicion es que c sea menor al tamaño del arreglo, es decir que recorra todos los elementos del arreglo.
    el incremento es que c aumente de 1 en 1, para recorrer el arreglo de inicio a fin.
    /*sintaxis abreviada de for, con la variable c que actua como contador, y se inicializa en 0, ya que el primer elemento de un arreglo tiene un indice de 0.
    la condicion es que c sea menor al tamaño del arreglo, es decir que recorra todos los elementos del arreglo.
    el incremento es que c aumente de 1 en 1, para recorrer el arreglo de inicio a fin. */

    /*total += numeros[c]; // se suma el elemento del arreglo al total, y se guarda en la variable total.*/
     total = total + numeros[c]; // es lo mismo que la linea anterior, pero mas largo..*/
     console.log(` El valor actual del acumulado es ${total}`);
}
console.log(`La suma de los 100 numeros del array es: ${total}`);

// EJERCICIO: IDENTIFICAR NÚMEROS PARES E IMPARES
/** 1. Se utiliza un ciclo for para recorrer todos
 *    los elementos del array numeros.
 ** 2. La variable i funciona como índice y comienza
 *    en la posición 0.
 * * 3. numeros.length representa la cantidad total
 *    de elementos del array.
 * * 4. numeros[i] permite acceder al número que se
 *    encuentra en la posición actual.
 * * 5. El operador % obtiene el residuo de una división.
 * * 6. Si numero % 2 === 0, el número es par.
 * * 7. Si el residuo es diferente de 0, el número
 *    es impar.
 */

// se recorre el arreglo numeros, y se guarda el numero actual en la variable numeroActual, 
// y se evalua si es par o impar, y se imprime en consola.
for (let i = 0; i < numeros.length; i++) {
    // Guardamos el número de la posición actual
 let numeroActual = numeros[i];
    // Si al dividir entre 2 el residuo es 0, es par
 if (numeroActual % 2 === 0) {
        console.log(`El número ${numeroActual} es PAR`);
  } else {
        console.log(`El número ${numeroActual} es IMPAR`);
    }
} 

