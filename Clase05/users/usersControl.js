/* Aquí va la lógica que maneja el comportamiento de nuestra API cada vez que se recibe una request a través de las rutas*/
const { getAllUsers, getUserById, addNewUser, deleteUserById, editUserById } = require("./usersModel")
const notNumber = require("../utils/notNumber")

//get all users
const listAll = async(req, res, next) => {
    const dbResponse = await getAllUsers()
    dbResponse.hasOwnProperty("error") ? res.status(500).json(dbResponse) : res.status(200).json(dbResponse)
}

/*-------------------*/
//get user by id
const listOne = async function(req, res, next) {
        if (notNumber(req.params.id, res)) return;
        const dbResponse = await getUserById(Number(req.params.id))
        if (dbResponse.hasOwnProperty("error")) return res.status(500).json(dbResponse);
        dbResponse.length ? res.status(200).json(dbResponse) : next()
    }
    //patch existing user
const editOne = async(req, res, next) => {
        if (notNumber(req.params.id, res)) return;
        const dbResponse = await editUserById(+req.params.id, req.body)
        if (dbResponse.hasOwnProperty("error")) return res.status(500).json(dbResponse);
        dbResponse.affectedRows ? res.status(200).json(req.body) : next()
    }
    /*------------------*/
    //post new user
const addOne = async(req, res, next) => {
    const { name, username, email } = req.body

    if (!name || !username || !email && (name === "" || username === "" || email === "")) {
        let error = new Error("All fields required")
        error.status = 400
        next(error)
    }
    const dbResponse = await addNewUser(req.body)
    dbResponse.hasOwnProperty("error") ? res.status(500).json(dbResponse) : res.status(201).json(req.body)
}

//delete user by ID
const removeOne = async(req, res, next) => {
    if (notNumber(req.params.id, res)) return;
    const dbResponse = await deleteUserById(+req.params.id)
    console.log(dbResponse)
    if (dbResponse.hasOwnProperty("error")) return res.status(500).json(dbResponse);
    dbResponse.affectedRows ? res.status(204).end() : next()
}

module.exports = { listAll, listOne, addOne, removeOne, editOne }