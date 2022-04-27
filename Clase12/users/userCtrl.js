const { findByIdAndUpdate } = require("./userModel")
const User = require("./userModel")

//POST NEW USER
const createUser = (req, res) => {
    const newUser = new User({ ...req.body })
    newUser.save((error, result) => {
        if (error) {
            res.status(400).json(error)
        } else {
            res.status(200).json(result)
        }
    })
}

//GET ALL USERS
const getAllUsers = (req, res) => {
    User.find()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(404).json(err)
        })
}

//GET SPECIFIC USER (BY ID)
const getUserById = (req, res) => {

    User.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((error) => {
            res.status(404).json(error)
        })
}

//UPDATE USER
const updateUser = async (req, res) => {
    try {
        const result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json(error)
    }
}

//DELETE USER

const deleteUser = async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id)
        res.status(202).json(result)
    } catch (error) {
        res.status(404).json(error)
    }
}
module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser }