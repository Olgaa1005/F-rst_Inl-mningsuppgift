const createUser = require('./createUser');
const users = require('./usersData');

beforeEach(() => {
  users.length = 0;
});

test('should create a new user when username is unique and password is valid', () => {
  expect(createUser('newUser', 'Password123')).toEqual({ username: 'newUser', password: 'Password123' });
});

test('should return error for duplicate username', () => {
  createUser('testUser', 'Password123');
  expect(createUser('testUser', 'AnotherPassword123')).toBe('Username already exists');
});

test('should return error for weak password', () => {
expect(createUser('newUser', 'weakpass')).toBe('Password must be at least 8 characters long, contain one number and one uppercase letter');
});
