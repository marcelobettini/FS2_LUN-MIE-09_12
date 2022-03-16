//objeto console
let perro = {
    nombre: "Lupin",
    color: "Negro",
    hembra: true,
    edad: 5,
};
console.log("Hola Mundo")
console.table(perro)
console.error("Ha ocurrido un error")
console.warn("Ojo al piojo", { mensaje: "Se pudrió todo" });
console.log("\033[034mQué color es?") //octa escape sequence

for (let i = 0; i < 5; i++) {
    console.count("this is iteration")
}

console.time("fetching")

setTimeout(() => {
    console.log("Hola Manola")
    console.timeEnd("fetching")
}, 3000)