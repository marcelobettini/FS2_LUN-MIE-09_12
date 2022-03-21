const express = require("express")
const server = express()
const port = process.env.port || 8000
const usersRouter = require("./users/usersRoute")


server.get("/", (req, res) => {
    const content = `
    <h1>Server con Express</h1>
    <pre>primera prueba de servidor con Node y el framework Express</pre>
    `
    res.send(content)
})

server.use("/users", usersRouter)

//catch all route (404)
server.get("*", (req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" })
})

server.listen(port, (err) => {
    err ? console.log(`Error: ${err}`) : console.log(`App corre en http://localhost:${port}`)
})