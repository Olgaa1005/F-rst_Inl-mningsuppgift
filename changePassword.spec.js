const changePassword = require('./changePassword');
const users = require('./usersData');
const User = require('./user');

beforeEach(() => {
  users.length = 0; // Reset users list before each test
  users.push(new User('testUser', 'Test1234'));
});

test('should change password when old password is correct', () => {
  expect(changePassword('testUser', 'Test1234', 'NewPassword123')).toBe(true);
});

test('should return error for incorrect old password', () => {
  expect(changePassword('testUser', 'WrongPassword', 'NewPassword123')).toBe('Old password is incorrect');
});

test('should return error if user is not found', () => {
    expect(changePassword('nonExistentUser', 'OldPassword123', 'NewPassword123')).toBe('User not found');
  });
  
  test('should return error if new password is the same as old password', () => {
    expect(changePassword('testUser', 'Test1234', 'Test1234')).toBe('New password must be different from old password');
  });

  test('should return error if new password does not meet security requirements', () => {
    expect(changePassword('testUser', 'Test1234', 'weakpass')).toBe('New password must meet security requirements');
  });
  