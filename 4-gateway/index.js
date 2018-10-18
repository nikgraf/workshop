const {
  makeRemoteExecutableSchema,
  introspectSchema,
  mergeSchemas
} = require("graphql-tools");
const { ApolloServer } = require("apollo-server");
const { HttpLink } = require("apollo-link-http");
const fetch = require("node-fetch");

const graphqlServices = [
  { uri: "http://localhost:4000" },
  { uri: "http://localhost:4001" }
];

const createNewSchema = async () => {
  // TODO
  return mergeSchemas({});
};

const runServer = async () => {
  const schema = await createNewSchema();
  const server = new ApolloServer({ schema });
  server.listen({ port: 4002 }).then(({ url }) => {
    console.log(`Gateway at ${url}`);
  });
};

runServer();