const uuid = require('uuid/v4');

const users = [
  {
    id: "0o5Fri5Ia34BTFurJmkOf9T6S1e",
    email: "tim@example.com",
    password: "123", // NOTE never store a password in plain text
    role: 'user'
  },
  {
    id: "1BjewRuYm38Xlnikwr150MEvObC",
    email: "anna@example.com",
    password: "123", // NOTE never store a password in plain text
    role: 'admin'
  },
];

const sessions = [];

const login = (email, password) => {
  const user = users.find(user => user.email === email && user.password === password)
  if (user) {
    const token = uuid()
    const session = { token, userId: user.id }
    sessions.push(session)
    return { token }
  }
};

const getUserByToken = (token) => {
  const session = sessions.find(session => session.token === token)
  return users.find(user => session && user.id === session.userId)
}

module.exports = {
  login,
  getUserByToken
};
