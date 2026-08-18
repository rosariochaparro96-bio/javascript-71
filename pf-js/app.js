/**
 * Prompt:
 * 1.Hay que asiganar su uso a una variable para luego poder usar el valor que ingreso el usuario
 * 1.2 Usar el valor inmediato
 * !importante 
 * 1. no se recomienda su uso en aplicaciones en produccion.
 * 2. bloquea el codigo, esto quiere decir que el codigo que este debajo de donde escribimos el uso de prompt no se va a ejecutar, hasta que 
 * el usuario ingrese algo.
 * 3. No se puiede personalizar. 
 * 4. Todo lo que ingresa  mediante prompt siempre es un String
 * ?\n es un caracter que nos inserta un salto de linea. 
 */
const edad = prompt("ingresa tu edad", 30);
console.log(edad);

const name = prompt("ingresa tu nombre", "Rosario");
console.log("Hola soy " + name + " \ny tengo " + edad + " años");

const movie = prompt("ingresa tu pelicula favorita", "Perfume");
console.log("Hola mi es " + name + " \ny mi  " + movie + " Perfume");

const favoriteProtagonist = prompt("ingresa tu personaje favorito", "Jean-Baptiste");
console.log("Hola mi es " + name + " \ny mi  " + favoriteProtagonist + " matilda");

const reason = prompt(
    "¿Por qué es tu personaje favorito?",
    "Porque tiene un sentido del olfato extraordinario"
);

console.log(
    "Mi película favorita es " + movie +
    "\nEn " + movie + " sale el personaje " + favoriteProtagonist +
    "\ny es mi favorito porque " + reason + "."
);
    
 