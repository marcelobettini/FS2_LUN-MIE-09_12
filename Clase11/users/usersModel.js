/* Aquí va el modelo de datos... consultas a bases de datos*/
const pool = require("../data/config")

const getAllUsers = () => {
    const query = "SELECT * FROM users"
    try {
        return pool.query(query)
    } catch (error) {
        error.message = error.code
        return error
    }
}

const getUserById = (id) => {
    const query = `SELECT * FROM users WHERE id = ${id} LIMIT 1`
    try {
        return pool.query(query)
    } catch (error) {
        error.message = error.code
        return error
    }
}

const registerUser = (user) => {
    const query = `INSERT INTO users SET ?`
    try {
        return pool.query(query, user)
    } catch (error) {
        error.message = error.code
        return error
    }
}

const loginUser = (error) => {
    const query = `SELECT * FROM users WHERE email = '${error}'`
    try {
        return pool.query(query)
    } catch (error) {
        error.message = error.code
        return error
    }
}

const editUserById = (id, user) => {
    const query = `UPDATE users SET ? WHERE id = ${id}`;
    try {
        return pool.query(query, user)
    } catch (error) {
        error.message = error.code
        return error
    }

};

const deleteUserById = (id) => {
    const query = `DELETE FROM users WHERE id = ${id}`
    try {
        return pool.query(query)
    } catch (error) {
        error.message = error.code
        return error
    }
}
module.exports = { getAllUsers, getUserById, registerUser, loginUser, deleteUserById, editUserById }