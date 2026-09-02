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
//nUMERO SECRETO
// FUNCIÓN PARA GENERAR UN NÚMERO ALEATORIO
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// FUNCIÓN PRINCIPAL DEL JUEGO
// No tiene parámetros
// No tiene return
function adivinarNumero() {
    // Generamos un número entero entre 1 y 10
    const numeroSecreto = Math.floor(
        getRandomArbitrary(3, 5)
    );
    // Contador de intentos
    let intentos = 1;
    // El usuario tiene máximo 3 intentos
    while (intentos <= 3) {
        // Pedimos un número al usuario
        const numeroUsuario = Number(
            prompt(`Intento ${intentos} de 3. Adivina un número del 1 al 10:`)
        );
        // Si adivina el número
        if (numeroUsuario === numeroSecreto) {
            alert("¡Correcto! Adivinaste el número secreto.");
            console.log(
                `Ganaste. El número secreto era ${numeroSecreto}`
            );
           // Termina el ciclo
            break;
        } else if (numeroUsuario < numeroSecreto) {
           // Pista: el número secreto es mayor
            alert("Incorrecto. El número secreto es MAYOR.");
        } else {
            // Pista: el número secreto es menor
            alert("Incorrecto. El número secreto es MENOR.");
        }
        // Aumentamos el contador
        intentos++;
    }
    // Si terminó los 3 intentos sin acertar
    if (intentos > 3) {
        alert(
            `Se terminaron tus intentos. El número secreto era ${numeroSecreto}.`
        );
    }
}
// EJECUTAMOS LA FUNCIÓN
adivinarNumero();