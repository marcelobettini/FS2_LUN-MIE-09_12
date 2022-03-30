/*En este archivo pondremos la referencia a la ruta asociada y, si las hubiera, subrutas (por ejemplo, podríamos recibir todas las peticiones de /users, pero también de /users/otracosa... etc). Luego de recibir la petición diferenciando el verbo HTTP, enviaríamos al controlador apropiado. Si hubiera middlewares, se aplicarían en este archivo, entre la petición y el controlador*/
const { listAll, listOne, addOne, removeOne, editOne } = require("./usersControl")
const router = require("express").Router()

//get all users
router.get("/", listAll);

//get user by id
router.get("/:id", listOne);

//post new user
router.post("/", addOne)

//patch user
router.patch("/:id", editOne)


//delete user by ID
router.delete("/:id", removeOne)


module.exports = router