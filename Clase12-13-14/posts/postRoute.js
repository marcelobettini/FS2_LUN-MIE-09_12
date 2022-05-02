const { createPost, searchTitleByText } = require("./postCtrl")

const router = require("express").Router()

router.post("/", createPost)
//todo búsqueda por query string /:query ?titulo=algún texto
router.get("/:query", searchTitleByText)
module.exports = router