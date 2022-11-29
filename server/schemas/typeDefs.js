const { gql } = require ('apollo-server-express');

const typeDefs = gql`
  input saveBookInput {
    authors: String
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(user: String!, email: String!, password: String!): Auth
    saveBook(addBook: saveBookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;