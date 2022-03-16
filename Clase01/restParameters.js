/*La sintaxis de los parámetros rest permite representar un número
indefinido de argumentos como un array

En el estándar ES5 se accedía a esos argumentos así: */
function varArgs(a = "default 1", b = "default 2") {
    console.log("Argumentos explícitos")
    console.log("a:", a)
    console.log("b:", b)
    console.log("Resto de los argumentos:", arguments) //retorna un objeto
}
varArgs(27, "milanga de verdura", "tercero", null, true, 450, "Viendo a Biondi");

//A partir de ES6
//*rest es un nombre convencional
function varArgsB(a = "default 1", b = "default 2", ...rest) {
    console.log("Argumentos explícitos")
    console.log("a:", a)
    console.log("b:", b)
    console.log("Resto de los argumentos:", rest) //retorna un arreglo
}
varArgsB(27, "milanga de verdura", "tercero", null, true, 450, "Viendo a Biondi");

/*ECMAScript 2018. Agrega rest props a los objetos.
Podemos desestructura un objeto y recoger el resto de los propiedades y sus valores*/

let numbers = {
    x: 1,
    y: 2,
    a: 3,
    b: 4,
    c: 5
};

const { x, y, ...z } = numbers
console.log("x:", x) //valor 1, tipo number
console.log("y:", y) //valor 2, tipo number
console.log("z:", z) //valores a: 3, b: 4, c: 5, tipo object