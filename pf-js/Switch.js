/**
 * Switch
 * Es una estructura de control condicional
 * Pero a diferencia del if no se basa en valores de verdad o de falsos 
 * si no que se basa en opciones 
 * ?nos permite tener multiples opciones 
 * ?y con base en las opciones seleccionada ejecutar un bloque de codigo
 * ? tiene una respueta por default, por si la opcion ingresada no esta en la lista
 * 
 * 
 * ?se divide en caso 
 * ?cada caso lleva su bloque de codigo y debe  llevar al finalizar
 * ? la palabra break.
 * 
 * 
 * 
 * nota:
 * todo: Expresiones: Es todo aquello que genera un valor. 
 * ejemplos; una suma, variable, funcion, texto, un numero, o todo aquel numero que genera una expresion.
 * 
 * todo: declaracion (statement): no genera un valor y por lo general son estructuras de control o bucles
 * ejemplos: el if, el switch, el for, el while
 * 
 * ``
 */

let month= "noviembre";
switch (month){
case "enero"
alert("El mes de Enero es el primer mes de año");
break;
case "Febrero";
alert (`el mes ${month} es el segundo mes del año´);
//``El mes `` + month + es el segundo mes del año``
break; 
case "Marzo":
    alert (`el mes ${month} es el tercer mes del año´);
    break; 
   case "Marzo":
      case "Abril":
console.log("Abril y Marzo");
   break; 
   default: 
    alert ("el mes seleccionado no aplica");
    break; 
  
}



// Pedimos al usuario que escriba un país
let country = prompt(
    "Escribe uno de estos países: México, Canadá, USA, China o Kenia"
);

// Evaluamos el país ingresado
switch (country) {
    case "México":
        alert("La capital de México es Ciudad de México.");
        break;
    case "Canadá":
        alert("La capital de Canadá es Ottawa.");
        break;
    case "USA":
        alert("La capital de USA es Washington D. C.");
        break;
    case "China":
        alert("La capital de China es Pekín.");
        break;
    case "Kenia":
        alert("La capital de Kenia es Nairobi.");
        break;
    default:
        alert("El país seleccionado no está en nuestra lista.");
        break;

         default:
        console.log("El país seleccionado no está en la lista.");
                break;
                let country = prompt("Escribe un país");

console.log("País seleccionado:", country);

switch (country) {
    case "México":
        console.log("La capital de México es Ciudad de México.");
        break;
}