const { gql } = require("apollo-server-express");

const userTypeDefs = gql`
  scalar DateTime

  type Address {
    street: String
    city: String
    state: String
    country: String
    zip: String
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: String
    phone: String
    address: Address
    bio: String
    department: String
    position: String
    dateOfBirth: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  type UsersResult {
    items: [User!]!
    totalCount: Int!
  }

  input AddressInput {
    street: String
    city: String
    state: String
    country: String
    zip: String
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    role: String
    phone: String
    address: AddressInput
    bio: String
    department: String
    position: String
    dateOfBirth: DateTime
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    email: String
    role: String
    phone: String
    address: AddressInput
    bio: String
    department: String
    position: String
    dateOfBirth: DateTime
  }

  type Query {
    getUsers(page: Int, limit: Int, filter: String): UsersResult!
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): Boolean
  }
`;

module.exports = userTypeDefs;
