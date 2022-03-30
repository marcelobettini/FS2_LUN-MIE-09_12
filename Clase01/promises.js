//Promises (Promesas, asincronismo en JS)

const data = require("./helpers/data")

//en el mundo idea, voy a buscar los datos y el programa "se queda esperando" el resultado
// const getData = () => {
//     return data
// }

// console.log(getData())

//pero en JS eso no existe, porque el procedimiento de búsqueda de datos, al ser asincrónico, va a demorar x tiempo en devolver el resultado, entonces, cuando muestre el resultado, seguramente aún no lo tendré disponible y eso dará como resultado undefined o un arreglo vacío, si es que así inicialicé el arreglo que recibirá los datos

// const getData = () => {
//     setTimeout(() => {
//         return data
//     }, 2000)
// }
// console.log(getData())

/*Promise va a retornar el resultado de la operación, puede ser resolve o reject, pero sólo cuando haya terminado el ciclo. El estado de una promesa
pasa por etapas: pending... y luego puede ser fulfilled, rejected... Nunca me retornará undefined */

const getData = () => {
    return new Promise((resolve, reject) => {
        const err = true
        setTimeout(() => {
            if (err) {
                reject("Salió todo mal 😫")
            } else {
                resolve(data)
            }
        }, 3000)
    })
}


getData()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

console.log("Esto está después de la ejecución de getData, pero se verá antes... cool")
console.log("Esto está después de la ejecución de getData, pero se verá antes... cool")
console.log("Esto está después de la ejecución de getData, pero se verá antes... cool")
console.log("Esto está después de la ejecución de getData, pero se verá antes... cool")
console.log("Esto está después de la ejecución de getData, pero se verá antes... cool")