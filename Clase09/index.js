require("dotenv").config();
require("./data/config");
const PORT = process.env.PORT || 3000;
const express = require("express");
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true })); //lectura de formularios
server.use(express.static("public"));

server.get("/", (req, res) => {
  const content = `
    <h1>Server con Express</h1>
    <pre>primera prueba de servidor con Node y el framework Express</pre>
    `;
  res.send(content);
});

//Router for /users endpoint
server.use("/users", require("./users/usersRoute"));
//Router for /posts endpoint
server.use("/posts", require("./posts/postsRoute"));
//catch all route (404)
server.use((req, res, next) => {
  let error = new Error();
  error.status = 404;
  error.message = "Resource not found";
  next(error);
});

//Error handler
server.use((error, req, res, next) => {
  if (!error.status) error.status = 500;
  res
    .status(error.status)
    .json({ status: error.status, message: error.message });
});

server.listen(PORT, (err) => {
  err
    ? console.log(`Error: ${err}`)
    : console.log(`App corre en http://localhost:${PORT}`);
});
