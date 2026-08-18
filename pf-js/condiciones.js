/**Condiciones:
 * Serie de condiciones para que algo suceda
 * En programacion para el manejo de estas condiciones tenemos
 * ! el bloque if else
 * ?bloque if pregunta por una condicion en caso de que esta condicion sea 
 * verdadera ejecuta un bloque de codigo, en de falso no ejecuta nada 
 * ?else maneja la ejecucion de codigo en caso negativo. 
 * 
 * Lo que se coloca dentro del if, debe ser algo que genere 
 * *  un valor True o False (tipo de dato boolean )
 */

/**Convertir de texto  a numero 
!importante 
Si se trata de convertir algo que no es un numero 
como resultado obtendremos NaN (no numerico).  */

const name = prompt("Ingresa tu nombre", "Rosario");
const age = Number(prompt("Ingresa tu edad", "30"));
const birthYear = Number(prompt("Ingresa tu año de nacimiento", "1996"));
const currentYear = new Date().getFullYear();
const calculatedAge = currentYear - birthYear;

console.log("Hola, soy " + name);
console.log("Mi edad ingresada es " + age + " años");
console.log("Mi año de nacimiento es " + birthYear);
console.log("El año actual es " + currentYear);
console.log("Mi edad calculada es " + calculatedAge + " años");



const birthYear = Number(prompt)("ingresa tu fecha de nacimiento");
let birthYearPlusTen = Number(birthYear)  + 10;
console.log(birthYear);
console.log(birthYearPlusTen);
let age = 2026 - birthYear;
console.log(age);

/**
 * todo: operaciones logicas
 * sirve para hacer operaciobes cuyo resultado es verdadero o falso.
 * Mayor que > 
 * 2 > 1 == verdadero 
 * 1 > 2 == falso 
 * 0 > 0 == falso 
 * 
 * menor que <
 * 2 < 5 == verdadero. 
 * 2 < 2 == falso
 * 
 * Igualdad   ==
 * 2 == 2 == verdadero 
 * 3 == 1 == falso
 * 
 * Mayor o igual que >=
 * 2 >= 2 == verdadero 
 * 2 >= 1 == verdadero 
 * 0 >= 0 == falso
 * 
 * Menor  o igual que <=
 * 4 <= 4 == verdadero 
 * 4 <= 5 == verdadero 
 * 7 <= 5 == falso
 * 
 * Diferente de !=
 * 5 != 4 == True
 * 5 != 5 == False
 * 99 != 100 == True 
 * 
 * Negacion  (not) !
 * !Verdadero  == Falso 
 * !Falso == Verdadero 
 * !(4 <= 4) == Falso 
 * 
 * 
 * ADN && ES un operador que devulve 
 * ?Verdadero solo si ambos lados   de la expresion son verdaderos 
 * ? Si un lado es falso todo el resultado se vuelve falso 
 * Verdadero && verdadero  == verdadero 
 * verdadero && falso == falso 
 * Falso  && verdero == falso 
 * 
 * * age >= 6 && age <= 12 
 * age 7 == verdero 
 * age 15 == falso
 * age 5 == falso
 * 
 * OR ||  ES un operador que devuelve 
 * ? Falso si ambos lados de lA EXPRESION SON FALSOS
 * Si un lado de la expresion es  verdadero  devuelve verdadero
 * Verdadero || falso == verdadero
 * falso || falso == falso 
 * falso || verdadero == verdadero 
 * age > 20 || age < 100
 * age 101 == Verdadero 
 * age 18 == Verdaero 
 * 
 * 
 
 
 * 
 * 
 * 
 * 
 */


/**
 * En los parentesis va la condicion que se va a evaluar 
 * dentro de las  llaves va el codigo que se va a ejecutar 
 * en caso  de que la condicion sea veradero
 * ? else if 
 * Nos permite evaluar mas de una condicion
 * va asociado a un if 
 */

const birthYear = Number(prompt)("ingresa tu fecha de nacimiento");
let age = 2026 - birthYear;
console.log(age);


if (age >= 18)  {
    alert("Bienvenido, eres mayor de edad");
    }else 
        { alert("Aun no puedes pasar, vuelve cuando cumplas los 18 años");
        }else if (age >= 6) {
        alert("Felicidades entrantes a la primaria");
        
    }else if (age >= 1) {
        alert("Felicidades sigues en el kinder");
        }

          }else 
        alert("Estas muy bebé o no haz nacido");{
        }