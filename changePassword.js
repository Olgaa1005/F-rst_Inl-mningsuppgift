const users = require(`./usersData`)

function changePassword(username, oldPassword, newPassword) {
    const user = users.find(u => u.username === username)
    if (!user) {
        return `User not found`
            }
    if (user.password !== oldPassword) {
        return `Old password is incorrect`
    }
    if (oldPassword === newPassword) {
        return `New password must be different from old password`
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
    if (!passwordRegex.test(newPassword)) {
        return `New password must meet security requirements`
}

user.password = newPassword
return true
}


module.exports = changePassword