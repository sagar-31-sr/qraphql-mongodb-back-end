const userService = require("./service");
const { DateTimeResolver } = require("graphql-scalars");

const userResolvers = {
  DateTime: DateTimeResolver,
  Query: {
    getUsers: (_, args) => userService.getUsers(args),
    getUserById: (_, { id }) => userService.getUserById(id),
  },
  Mutation: {
    createUser: (_, { input }) => userService.createUser(input),
    updateUser: (_, { id, input }) => userService.updateUser(id, input),
    deleteUser: (_, { id }) => userService.deleteUser(id),
  },

  User: {
    id: (parent) =>
      parent.id ? parent.id : parent._id ? parent._id.toString() : null,
  },
};

module.exports = userResolvers;
