require("dotenv").config()
const { findUserByID } = require("./functions")
const port = process.env.port || 8000
let users = require("./data/data")
const express = require("express")
const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get("/", (req, res) => {
    const content = `
    <h1>Server con Express</h1>
    <pre>primera prueba de servidor con Node y el framework Express</pre>
    `
    res.send(content)
})

//get all users
server.get("/users", (req, res, next) => {
    users.length ? res.status(200).json(users) : next()
});

//get user by id
server.get("/users/:id", (req, res, next) => {
    if (isNaN(Number(req.params.id))) {
        return res.status(400).json({ message: "ID must be a positive integer" })
    }
    let userFound = findUserByID(+req.params.id, users)
    if (userFound !== undefined) {
        res.status(200).json(userFound)
    } else {
        next()
    }

});

//post new user
server.post("/users", (req, res) => {
    const { name, username, email } = req.body
    if (!name || !username || !email && (name === "" || username === "" || email === "")) {
        res.status(400).json({ message: "All fields required" })
    }
    users.push(req.body)
    res.status(200).json(req.body)

})

//delete user by ID
server.delete("/users/:id", (req, res, next) => {
    if (isNaN(Number(req.params.id))) {
        return res.status(400).json({ message: "ID must be a positive integer" })
    }
    let userFound = findUserByID(+req.params.id, users)
    if (userFound !== undefined) {
        users = users.filter((user) => user.id !== parseInt(req.params.id))
        res.status(200).json(userFound)
    } else {
        next()
    }
})

//catch all route (404)
server.use((req, res) => {
    res.status(404).json({ message: "Resource not found" })
});


server.listen(port, (err) => {
    err ? console.log(`Error: ${err}`) : console.log(`App corre en http://localhost:${port}`)
})