const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");

const typeDefs = importSchema("./schema/index.graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
