/* Aquí va la lógica que maneja el comportamiento de nuestra API cada vez que se recibe una request a través de las rutas*/
const { getAllUsers, getUserById, addNewUser, deleteUserById } = require("./usersModel")

//get all users
const listAll = async(req, res, next) => {
    const dbResponse = await getAllUsers()
    dbResponse.hasOwnProperty("error") ? res.status(500).json(dbResponse) : res.status(200).json(dbResponse)
}

//get user by id
const listOne = async(req, res, next) => {
    if (isNaN(Number(req.params.id))) {
        return res.status(400).json({ message: "ID must be a positive integer" })
    }
    const dbResponse = await getUserById(Number(req.params.id)) //Sin parsing funciona ok contra la base de datos, no así cuando estaba en un arreglo con el id tipo number
    if (dbResponse.hasOwnProperty("error")) return res.status(500).json(dbResponse);
    dbResponse.length ? res.status(200).json(dbResponse) : next()
}

//post new user
const addOne = async(req, res) => {
    const { name, username, email } = req.body

    if (!name || !username || !email && (name === "" || username === "" || email === "")) {
        res.status(400).json({ message: "All fields required" })
    }
    const dbResponse = await addNewUser(req.body)
    dbResponse.hasOwnProperty("error") ? res.status(500).json(dbResponse) : res.status(201).json(req.body)
}

//delete user by ID
const removeOne = async(req, res, next) => {
    if (isNaN(Number(req.params.id))) {
        return res.status(400).json({ message: "ID must be a positive integer" })
    }
    const dbResponse = await deleteUserById(+req.params.id)
    console.log(dbResponse)
    if (dbResponse.hasOwnProperty("error")) return res.status(500).json(dbResponse);
    dbResponse.affectedRows ? res.status(204).end() : next()
}

module.exports = { listAll, listOne, addOne, removeOne }