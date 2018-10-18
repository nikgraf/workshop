const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");

const typeDefs = importSchema("./schema/index.graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // TODO retrieve the user from the header
    return { user };
  },
  tracing: true
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
