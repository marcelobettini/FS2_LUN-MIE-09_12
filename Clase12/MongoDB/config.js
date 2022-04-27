//Configurar y conectar con nuestro cluster que contiene las bases de datos, colecciones y documentos
const mongoose = require("mongoose")
const db_uri = process.env.db_uri
const options = {
    maxPoolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(db_uri, options, (err) => {
    err ? console.log("Atlas no pudo conectar", err) : console.log("MongoDB Atlas conectado")
})
