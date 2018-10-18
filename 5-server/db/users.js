const uuid = require("uuid/v4");
const Datastore = require("nedb-promise");

const sessionsDb = new Datastore({
  filename: "/tmp/5-sessions.json",
  autoload: true
});

const usersDb = new Datastore({
  filename: "/tmp/5-users.json",
  autoload: true
});

async function initDb() {
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

  await usersDb.remove({}, { multi: true }); // removes all documents
  await usersDb.insert(users);
}
initDb();

const login = async (email, password) => {
  const user = await usersDb.findOne({ email, password });
  if (user) {
    const token = uuid();
    const session = { _id: token, userId: user._id };
    await sessionsDb.insert(session);
    return { token };
  }
};

module.exports = {
  login,
};
