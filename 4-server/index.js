const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");

const typeDefs = importSchema("./schema/index.graphql");
const { getUserByToken } = require("./db/users");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization
      ? req.headers.authorization.replace("Bearer ", "")
      : undefined;
    const user = getUserByToken(token);
    return { user };
  },
  tracing: true
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
