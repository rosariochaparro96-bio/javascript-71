/**
 * !funciones
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
 *  
 * ? 
 * 
  */  

//declarar la funcion 
function saludar (){
  console.log("Hola, mundo!");
}

//usar la funcion (invocar o llamar)
saludar();

//SEA REUTILIZABLE 

saludar();
saludar();

//funcion con parametros
function saludarConNombre(name, edad){
 //console.log("Hola, " + name + "! Tienes " + edad + " años.");
  console.log(`Hola, ${name} mucho gusto en conocerte no sabia que tenias ${edad} años.`);
}

//pasamos argumentos a una funcion 

 saludarConNombre("Rosario", 30);
 saludarConNombre("Liz", 27);
 saludarConNombre(27, "hola"); //esto es un error porque el orden de los parametros 
 //no es correcto


 //funcion con retorno de valor

 ///expresion de la funcion que es una variable que almacena una funcion
//que es una expresion es un valor que retorne un numero 
//que es una expresion en programacion es un fragmento de codigo que produce un valor de 
//retorno. 

/** !importante 
 * cuando usamos return en una funcion, la funcion deja de ejecutarse y 
 * devuelve el valor especificado.
 * 
 * !1. Termina la ejecucion de la funcion
 * !2. Devuelve un valor a la llamada de la funcion
 * !vamos a ver un ejemplo de una funcion que multiplica dos numeros y
 *  devuelve el resultado
 */

function multiplyToNumbers(a, b){
  if (typeof a == "number" && typeof b == "number") {
    return a * b;
  } else {
    return "por favor envia dos numeros";

    console.error("Nunca me vas a ver, porque el return termina la ejecucion de la funcion");
    return null;
  }
}

//aqui no voy a ver nada porque el return termina la ejecucion de la funcion
multiplyToNumbers(2, 3);



console.log(multiplyToNumbers(3, 5));
console.log(multiplyToNumbers(3, "jose")); 
