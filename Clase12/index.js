require("dotenv").config();
require("./MongoDB/config");
const express = require("express")
const PORT = 3030
const api = express()
api.use(express.json()) //leo formato json
api.use(express.urlencoded({ extended: true })) //leo formularios 

api.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`API running on http://localhost:${PORT}`)
})

//USERS ROUTING
api.use("/users", require("./users/userRoute"))