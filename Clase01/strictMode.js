/* Modo Estricto
No se pueden usar variables no declaradas. Fuera de una función tiene ámbito global. Dentro de una función, tiene ámbito local. Es decir, puede usarse modo estricto sólo dentro de una función y tendrá efecto allí únicamente. */
//"use strict"



function info() {
    "use strict"
    persona = "Lucrecia"; //declaración implícita
    nacimiento = 1901;
    console.log(persona, "nació en el año", nacimiento)
}


persona2 = "Juan"
nacimiento2 = 1902
console.log(persona2, "nació en el año", nacimiento2)


info()
    /* Cuando llamemos a la función info, tendremos un error porque dentro de la función está activado el modo estricto.  Pero en el ámbito global, al no estar declarado el modo estricto, puedo asignar valores a persona2 y nacimiento2 aunque no estén declaradas*/