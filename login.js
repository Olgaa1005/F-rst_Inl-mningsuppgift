const users = require("./usersData")

function login(username, password) {
    const user = users.find(u => u.username === username)
    if (!user) {
        return `Username not found` 
    }

    if (user.password !== password) {
        return `Incorrect password`
    }
    return true
}

module.exports = login