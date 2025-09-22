require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const connectDB = require("./db/connection");
const schema = require("./graphql/schema");

// const typeDefs = `type Query {
//     hello: String
// }`;

// const resolvers = {
//   Query: {
//     hello: () => "Hello form GraphQL 👋",
//   },
// };

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    schema,
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  const PORT = process.env.PORT || 4000;

  await connectDB(process.env.MONGO_URI);

  app.listen(PORT, () => {
    console.log(
      ` server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startServer();
