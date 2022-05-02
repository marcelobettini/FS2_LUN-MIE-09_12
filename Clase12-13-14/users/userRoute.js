const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require("./userCtrl");

const router = require("express").Router();

router.post("/", createUser)
router.get("/", getAllUsers)
router.get("/:id", getUserById)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
module.exports = router