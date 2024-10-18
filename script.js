const login = require('./login');
const createUser = require('./createUser');
const changePassword = require('./changePassword');
const users = require('./usersData');
const prompt = require('prompt-sync')(); // Install with npm: npm install prompt-sync

function mainMenu() {
  let choice;
  do {
    console.log("\n1. Create New User\n2. Login\n3. Change Password\n4. Exit");
    choice = prompt('Enter your choice: ');

    switch (choice) {
      case '1':
        const newUsername = prompt('Enter new username: ');
        const newPassword = prompt('Enter new password: ');
        console.log(createUser(newUsername, newPassword));
        break;
      case '2':
        const username = prompt('Enter username: ');
        const password = prompt('Enter password: ');
        console.log(login(username, password));
        break;
      case '3':
        const user = prompt('Enter username: ');
        const oldPassword = prompt('Enter old password: ');
        const newPasswordChange = prompt('Enter new password: ');
        console.log(changePassword(user, oldPassword, newPassword));
        break;
      case '4':
        console.log('Exiting...');
        break;
      default:
        console.log('Invalid choice, try again.');
    }
  } while (choice !== '4');
}

mainMenu();
