/**
 * ! Diferencias de funciones: 
 *  !funciones de flecha (Arrow Functions)
 *  !funciones de declaracion
 *  *  *  * fuction
 * 
 * Hoisting:
 *  !Las funciones declaradas se elevan (hoisting) al inicio del ámbito en el 
 * que se encuentran, 
 * ES UN PROCESO POR EL CUAL LAS FUNCIONES DECLRARTORIAS Y LAS 
 * VARIABLES ESCRITAS CON VAR, PASAN A ESTAR HASTA ARRIBA EN EL ´PROCESO
 * DE EJECUCION DEL CÓDIGO, ANTES DE QUE SE EJECUTE EL CÓDIGO.
 * 
 * fuction Expression: y Arrow Functions no se elevan, por lo que deben
 *  ser declaradas antes de ser utilizadas.
 * 
 * 
 * 
 * 
 * 
 * ? 
 * 
  */  
//declarar la funcion expression:
const addNumber = function (a, b) {
    return a + b;
};


console.log(`El resultado de la suma  5 + 3 es: ${result}`); // Salida: 
// El resultado
//  de la suma es: 8


// Arrow Function.
const divideNumbers = (a, b) => a / b;


/**
 * ============================================================
 * DIFERENCIAS ENTRE FUNCIONES EN JAVASCRIPT
 * ============================================================
 *
 * En JavaScript existen diferentes formas de crear funciones.
 * En este ejercicio estamos estudiando principalmente:
 *
 * 1. Function Declaration
 * 2. Function Expression
 * 3. Arrow Function
 *
 * Todas pueden recibir parámetros, realizar operaciones
 * y regresar un resultado mediante return.
 *
 *
 * ============================================================
 * 1. FUNCTION DECLARATION
 * ============================================================
 *
 * Es la forma tradicional de declarar una función.
 *
 * Sintaxis:
 *
 * function nombreFuncion(parametros) {
 *     return resultado;
 * }
 *
 * Una característica importante es que las Function Declaration
 * pueden utilizarse antes de aparecer escritas en el código.
 *
 * Esto ocurre gracias al HOISTING.
 */


/* Ejemplo de Function Declaration */

function multiplyNumbers(a, b) {
    return a * b;
}

let resultadoMultiplicacion = multiplyNumbers(20, 6);

console.log(
    `El resultado de 20 x 6 es: ${resultadoMultiplicacion}`
);

// Resultado:
// El resultado de 20 x 6 es: 120



/**
 * ============================================================
 * 2. FUNCTION EXPRESSION
 * ============================================================
 *
 * Una Function Expression consiste en guardar una función
 * dentro de una variable.
 *
 * Sintaxis:
 *
 * const nombreFuncion = function (parametros) {
 *     return resultado;
 * };
 *
 * A diferencia de una Function Declaration,
 * debemos declarar la variable antes de utilizar la función.
 */


/* Ejemplo de Function Expression */

const addNumber = function (a, b) {
    return a + b;
};

let resultadoSuma = addNumber(5, 3);

console.log(
    `El resultado de la suma 5 + 3 es: ${resultadoSuma}`
);

// Resultado:
// El resultado de la suma 5 + 3 es: 8



/**
 * ============================================================
 * 3. ARROW FUNCTION
 * ============================================================
 *
 * Una Arrow Function es una forma más corta de escribir
 * determinadas funciones.
 *
 * Se reconoce por el símbolo:
 *
 * =>
 *
 * Sintaxis:
 *
 * const nombreFuncion = (parametros) => resultado;
 *
 * Si solamente tenemos una expresión, podemos omitir:
 *
 * - Las llaves {}
 * - La palabra return
 *
 * En ese caso JavaScript retorna automáticamente el resultado.
 */


/* Ejemplo de Arrow Function */

const divideNumbers = (a, b) => a / b;

let resultadoDivision = divideNumbers(10, 2);

console.log(
    `El resultado de la división 10 / 2 es: ${resultadoDivision}`
);

// Resultado:
// El resultado de la división 10 / 2 es: 5



/**
 * También podemos escribir una Arrow Function con llaves.
 *
 * En ese caso debemos utilizar return.
 */

const subtractNumbers = (a, b) => {
    return a - b;
};

console.log(subtractNumbers(10, 4));

// Resultado:
// 6



/**
 * ============================================================
 * RETURN
 * ============================================================
 *
 * return sirve para regresar un valor desde una función.
 *
 * También termina la ejecución de la función.
 *
 * Ejemplo:
 *
 * function multiplicar(a, b) {
 *     return a * b;
 * }
 *
 * Si ejecutamos:
 *
 * multiplicar(4, 5)
 *
 * return entrega:
 *
 * 20
 */



/**
 * ============================================================
 * HOISTING
 * ============================================================
 *
 * Hoisting significa "elevación".
 *
 * Es el comportamiento de JavaScript mediante el cual ciertas
 * declaraciones se procesan antes de ejecutar el código.
 *
 * Las Function Declaration pueden utilizarse antes de aparecer
 * escritas en el archivo.
 *
 * Las Function Expression y Arrow Function declaradas mediante
 * const o let NO deben utilizarse antes de su declaración.
 */



/* ============================================================
   EJEMPLO DE HOISTING CON FUNCTION DECLARATION
   ============================================================ */


/*
 * Esto funciona aunque llamemos la función antes
 * de escribir su declaración.
 */

console.log(multiplyWithHoisting(5, 2));

function multiplyWithHoisting(a, b) {
    return a * b;
}

// Resultado:
// 10



/* ============================================================
   FUNCTION EXPRESSION Y HOISTING
   ============================================================ */


/*
 * Esto NO debemos hacerlo:
 *
 * console.log(addWithExpression(2, 5));
 *
 * const addWithExpression = function (a, b) {
 *     return a + b;
 * };
 *
 * Puede producir:
 *
 * ReferenceError:
 * Cannot access 'addWithExpression' before initialization
 */


/* Forma correcta */

const addWithExpression = function (a, b) {
    return a + b;
};

console.log(addWithExpression(2, 5));

// Resultado:
// 7



/* ============================================================
   ARROW FUNCTION Y HOISTING
   ============================================================ */


/*
 * Tampoco debemos utilizar una Arrow Function antes
 * de declararla cuando está almacenada en const o let.
 */


/* Forma correcta */

const divideWithArrow = (a, b) => a / b;

console.log(divideWithArrow(20, 4));

// Resultado:
// 5





