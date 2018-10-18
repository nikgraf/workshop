const Datastore = require("nedb-promise");

const sessionsDb = new Datastore({
  filename: "/tmp/5-sessions.json",
  autoload: true
});

const usersDb = new Datastore({
  filename: "/tmp/5-users.json",
  autoload: true
});

const getUserByToken = async token => {
  const session = await sessionsDb.findOne({ _id: token })
  if (!session) return undefined
  return usersDb.findOne({ _id: session.userId });
};

module.exports = {
  getUserByToken
};
