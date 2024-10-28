const login = require('./login');
const users = require('./usersData');
const User = require('./user');

beforeEach(() => {
    // Reset users list before each test
  users.length = 0; 
  users.push(new User('testUser', 'Test1234'));
});

test('should return true for correct username and password', () => {
  expect(login('testUser', 'Test1234')).toBe(true);
});

test('should return error message for incorrect password', () => {
  expect(login('testUser', 'WrongPassword')).toBe('Incorrect password');
});

test('should return error message if username is not found', () => {
    expect(login('nonExistentUser', 'SomePassword')).toBe('Username not found');
  });z
