\\wsl.localhost\Ubuntu\home\bios\javascript-71\pf-js\variables.js
 * En java hey tres formas de declarar variables: 
 *  * !existe una forma que ya no se recomiendan su uso
 * !var
 * Al proceso de crear una variable y darle un valor se le llama asignación
 * a las variables que pueden ser reasigandas  (pueden cambiar en un futuro el valor que tiene)  se declaera:
 * ? let nombreVariable = valor;
 * 
 * *el operador = se conoce como operador de asignación
 * una vez creada una variable podemos usarlla en otros lugares del codigo
 * utilizando su nombre, las variables al ser utilizadas no van entre ""
 * 
 * Las variables que no pueden ser reasignadas (su valor no puede cambiar)
 * se declaran:
 * ? const nombreVariable = valor;
 * 
 * 
 * Notas: palabras reservadas: son palabras que utilizan  el lenguaje de programacion y si intentamos usarlas en otros lados pueden generar errores. 
 */

let nombre = "Rosario";
let name = "Alejandro"
console.log(nombre);
console.log(name);

const birthYear = 1996;
console.log(birthYear);

 
/** comentarios de multi linea
 * Reasignacion de una variable (cambiando el valor que tiene)
 * Cuando reasignamos  una variable  (una variable ya creada)
 * * ! ya no es necesario poner let
 */

//comentario una sola linea/

nombre = "Brenfer";
console.log(nombre);

/** Seccion de prueba 
 * birthYear = 1995;
 * */

/** Concatenar:
 * Nos permite pegar el valor de una variable de un texto  
 * "entre comillas es un texto simple"
 * se pone el signo + variable + "texto" 
 */

console.log(
    "Hola soy" +  
    nombre + "y estoy en gen con" +  
    name +  "naci en el año" +   
    birthYear, 
    );


