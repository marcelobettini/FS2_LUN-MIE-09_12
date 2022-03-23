const findUserByID = (id, arr) => {
    return arr.find((user) => user.id === id)
}
module.exports = { findUserByID }