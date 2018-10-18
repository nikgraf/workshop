const {
  makeRemoteExecutableSchema,
  introspectSchema,
  mergeSchemas
} = require("graphql-tools");
const { setContext } = require("apollo-link-context");
const { ApolloServer } = require("apollo-server");
const { HttpLink } = require("apollo-link-http");
const fetch = require("node-fetch");
const { getUserByToken } = require("./sessions");

const graphqlServices = [
  { uri: "http://localhost:4000" },
  { uri: "http://localhost:4001" }
];

const createNewSchema = async () => {
  const pendingSchemas = graphqlServices.map(async service => {
    const httpLink = new HttpLink({
      uri: service.uri,
      fetch
    });
    // TODO create a link passing the user via the http header

    const remoteSchema = await introspectSchema(link);
    return makeRemoteExecutableSchema({
      schema: remoteSchema,
      link
    });
  });

  const resolvedSchemas = await Promise.all(pendingSchemas);
  return mergeSchemas({
    schemas: resolvedSchemas
  });
};

const runServer = async () => {
  const schema = await createNewSchema();
  const server = new ApolloServer({
    schema,
    context: async ({ req }) => {
      // TODO get user based on token
      return { user };
    }
  });
  server.listen({ port: 4002 }).then(({ url }) => {
    console.log(`Gateway at ${url}`);
  });
};

runServer();
