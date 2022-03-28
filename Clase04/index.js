require("dotenv").config()
require("./data/config")
const port = process.env.port || 3000
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

//Router for /users endpoint
server.use("/users", require("./users/usersRoute"))


//catch all route (404)
server.use((req, res) => {
    res.status(404).json({ message: "Resource not found" })
});


server.listen(port, (err) => {
    err ? console.log(`Error: ${err}`) : console.log(`App corre en http://localhost:${port}`)
})