import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    users: [User!]
    user(username: String!): User
    me: User
  }

  type Mutation {
    register(data: RegisterInput): String!
  }

  type User {
    id: Int!
    username: String!
    email: String!
    role: String!
    password: String!
    confirmed: Boolean!
    active: Boolean!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
  }
`

export default typeDefs
