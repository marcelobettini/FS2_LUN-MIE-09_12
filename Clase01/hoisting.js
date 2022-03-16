//HOISTING (eleva las declaraciones de funciones y variables)

/* esto se ejecuta aunque la función sea declarada más tarde despedir("Sergio") */

saludar("Segio")
despedir("Fulano de tal") //esto no va a correr (ver más abajo)



//numeroA no dará error porque var es elevado por el hoisting
numeroA = "esto se asigna antes de la declaración de la variable"
    //numeroB  dará error porque let NO es elevado por el hoisting
numeroB = "aquí habrá un error"
    /*esto también dará error porque hoisting NO eleva variables declaradas con const*/
console.log(constante)

//esta función es "elevada" por JS
function saludar(name) {
    console.log(`Hola ${name}`)
}

/*Esto va a generar un error, porque las funciones flecha no son elevadas por el hoisting de JS, a diferencia de las creadas con la palabra reservada function*/
const despedir = (name) => {
    console.log(`Adiós ${name}`)
}

var numeroA
let numeroB
const constante = "soy una constante... ah re"