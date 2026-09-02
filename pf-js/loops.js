/**
 * Loops
 * 
 * Son estructuras de control
 * que nos permiten repetir n cantiddaes de veces en un bloque de codigo {}
 * 
 * ?tenemos 3 grandes loops
 * ?While 
 * ?Do While
 * ?For 
 * 
 * 
 * While 
 * Es un loop que se ejecuta mientras una condicion sea verdadera
 * en cuanto esta condicion se vuelva falsa para 
 * !importante 
 * !necesita un contador externo o una forma de parar
 * !no olviden actualizar el contador
 * !Puedes Generar un bucle infinito
 * 

 */

//1. Contador 
let counter = 0;

//2. Iniciamos el bucle
while(counter <= 100){
    console.log(counter);
    counter = counter + 1;
}





counter = 1;
//** Operador modulo
// regresa el residuop de una division 
// ejemplo
// 5% 2= 1
// 6% 2= 0
// */


counter = 1;
while (counter < 200) {
    if (counter % 2 === 0) {
        console.log(`El número ${counter} es par`);
    } else {
        console.log(`El número ${counter} es impar`);
    }
    // Incrementa counter en 1 en cada vuelta
    counter++;
}



let numero = Number(prompt("Ingresa un número positivo:"));

while (numero <= 0) {
    numero = Number(prompt("Número inválido. Ingresa un número positivo:"));
}
console.log(`Número aceptado: ${numero}`);
alert(`Número aceptado: ${numero}`);


let suma = 0;

let numero = Number(prompt("Ingresa un número. Escribe 0 para terminar:"));

while (numero !== 0) {

    suma = suma + numero;

    numero = Number(
        prompt("Ingresa otro número. Escribe 0 para terminar:")
    );
}

console.log(`La suma total es: ${suma}`);
alert(`La suma total es: ${suma}`);

