/**
 * Loops
 *  * Son estructuras de control
 * que nos permiten repetir n cantiddaes de veces en un bloque de codigo {}
 * 
 * ?tenemos 3 grandes loops
 * ?While 
 * ?Do While
 * ?For 
 * 
 * 
 * ?Do While
 * ! el bucle do while, siempre se ejecuta por lo menos una vez.
 * al ejecutar primero y luego evaluar 
 * te permite tener una ejecucion garantizada
 * 
 * !necesitan un contador extremo
 * !no debemos olvidar actualizar dicho contador
 * se ejecuta solo una vez el do while 

 */




//1. Contador 
let counter = 200;
//2. Iniciamos el bucle
do {console.log("Hola");
    console.log(counter);
//operador de suma y asignacion
counter += 1;
}
while(counter <= 100);


conter = 1;
do {
    if (counter % 2 === 0)
         {
            console.log(`El número ${counter} es par`);
        } else {
            console.log(`El número ${counter} es impar`);
        } 
        counter++;
    } while (counter < 200);

/**ejercicios */
 

// EJERCICIO 1 - CAJERO
let opcion;
do {
    opcion = prompt(
        "CAJERO AUTOMÁTICO\n" +
        "1. Consultar saldo\n" +
        "2. Retirar dinero\n" +
        "3. Salir\n\n" +
        "Selecciona una opción:"
    );
    switch (opcion) {
        case "1":
            alert("Tu saldo es de $5,000.");
            console.log("El usuario consultó su saldo.");
            break;
        case "2":
            alert("Retiro realizado.");
            console.log("El usuario seleccionó retirar dinero.");
            break;
        case "3":
            alert("Gracias por utilizar el cajero.");
            console.log("El usuario salió del cajero.");
            break;
        default:
            alert("Opción no válida.");
            break;
    }
} while (opcion !== "3");


// EJERCICIO 2 - PALABRA SECRETA
let palabraSecreta = "javascript";
let respuesta;
let intentos = 0;
do {
    respuesta = prompt(
        "Adivina la palabra secreta:"
    );
    // Cada vez que responde sumamos un intento
    intentos++;
    if (respuesta !== palabraSecreta) {
        alert("Palabra incorrecta. Intenta nuevamente.");

    }
} while (respuesta !== palabraSecreta);
// Cuando sale del ciclo significa que acertó
alert(
    `¡Correcto! La palabra era ${palabraSecreta}.
    Te tomó ${intentos} intentos.`
);
console.log(`Número de intentos: ${intentos}`);





// EJERCICIO 3 - FIBONACCI
let anterior = 0;
let actual = 1;
let siguiente;
let respuestaFibonacci;
do {
    // Mostrar el número actual
    console.log(anterior);
    alert(`Número Fibonacci: ${anterior}`);
    // Preguntar si quiere continuar
    respuestaFibonacci = prompt(
        "¿Deseas generar el siguiente número? (s/n)"
    );
    // Calcular el siguiente número
    siguiente = anterior + actual;
    // Actualizar los valores
    anterior = actual;
    actual = siguiente;
} while (respuestaFibonacci === "s");
alert("Serie Fibonacci finalizada.");
console.log("Fin de la serie Fibonacci.");