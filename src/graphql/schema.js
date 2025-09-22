const { makeExecutableSchema } = require("@graphql-tools/schema");
const userTypeDefs = require("../models/user/typeDefs");
const userResolvers = require("../models/user/resolvers");

const schema = makeExecutableSchema({
  typeDefs: [userTypeDefs],
  resolvers: [userResolvers],
});

module.exports = schema;
