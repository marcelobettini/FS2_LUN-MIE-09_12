const express = require("express");
const users = require("../data/data")


// Get all users
const router = express.Router()
router.get("/", (req, res) => {
    res.status(200).json(users)
})

// Get user by id
//recordemos que lo que viene en req.params es un string y el tipo del id en el objeto data es de tipo number, por eso, con igualdad estricta === no lo encuentra.
router.get("/:id", (req, res) => {
    const userById = users.filter((user) => user.id === Number(req.params.id))
    res.status(200).json(userById)
})

module.exports = router