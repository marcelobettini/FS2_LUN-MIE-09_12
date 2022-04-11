import express from "express"; //ES6 IMPORT
import jwt from "jsonwebtoken"
const port = 3030;
const server = express();
server.get("/", (req, res) => {
    res.send(`<h1>Intro a JSON WEB TOKEN</h1>`)
})

server.post("/login", (req, res) => {
    const user = {
        id: 1,
        name: "Peter Stanislavsky",
        email: "soypedrito@hotmail.com"
    }

    /*cuando el usuario se loguea (autenticación), creamos el token para darle permisos (autorización)
    con la autenticación, podemos hacer algunas operaciones, por ej: ver las publicaciones
    con la autorización (token) podemos hacer otras operaciones que requieren permiso, ej: crear una publicación */
    jwt.sign({ user }, "miclavesupersegura", { expiresIn: '30m' }, (err, token) => {
        err ? console.log(err) : res.json({ token })
    })
})

server.post("/posts", verifyToken, (req, res) => {
    res.json({ message: "Post created", author: req.author })
})

//creamos un middleware para verificar que la request trae un token.
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(" ").pop()
        jwt.verify(token, "miclavesupersegura", (err, authData) => {
            if (err) return res.sendStatus(401);
            console.log(authData)
            req.author = authData.user.name
            next()
        })
    } else res.sendStatus(403)
}

server.listen(port, (err) => {
    err ? console.log(`Server launch error: ${err}`) : console.log(`Server running on http://localhost:3030`)
});