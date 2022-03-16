/* Spread Operator (Operador de Propagación)
   Nos permite copiar rápidamente todo o una parte de un array u objeto existente dentro de otro array u objeto */

const numbers = [1, 2, 3, 4, 5, 6];
const [uno, dos, ...rest] = numbers;
console.log(numbers) //1, 2, 3... 6
console.log("uno:", uno) // 1 de tipo number
console.log("dos:", dos) // 2 de tipo number
console.log("rest:", rest) // 3, 4, 6, 6 de tipo array


const miAuto = {
    marca: "Ford",
    modelo: "Mustang",
    color: "Rojo"
}

const actualizaMiAuto = {
    tipo: "Cupé",
    anio: 2010,
    color: "Verde Loro"
}
const miAutoActualizado = {...miAuto, ...actualizaMiAuto }
console.table(miAutoActualizado)

/* En el siguiente caso, no podemos pasar un array como parámetro,
pero sí los números que lo componen. Lo resolvemos con un spread operator*/

const arrNums = [10, -3, 4]
console.log(Math.max(arrNums)) //retorna NaN
console.log(Math.max(...arrNums)) //retorna 10

/* Podemos concatenar dos arreglos */
const arrNames = ["Aníbal", "Gertrudis"]
const arrCombined = [...arrNums, ...arrNames]

/*también puedo desestructurar un string*/
const saludo = "Hola Mundo"
console.log([...saludo])
console.log(...saludo)