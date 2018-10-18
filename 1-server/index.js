const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");

const typeDefs = importSchema("./schema/index.graphql");

// NOTE use this to retrieve the user by token
const { getUserByToken } = require("./db/users");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});