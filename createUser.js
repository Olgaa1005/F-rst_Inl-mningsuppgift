const Users = require("./usersData")
const User = require("./user") //Adjust the path if necessary

function createUser(username, password) {
    const userExists = Users.find(u => u.username === username)
    if (userExists) {
        return `Username already exists`
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
    if (!passwordRegex.test(password)) {
        return `Password must be at least 8 characters long, contain one number and one uppercase letter`
    }
    const newUser = new User(username, password)
    Users.push(newUser)
    return newUser
}

module.exports = createUser 