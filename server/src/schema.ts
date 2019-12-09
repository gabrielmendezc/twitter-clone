import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    users: [User!]
    user(username: String!): User
    me: User
  }

  type Mutation {
    register(data: RegisterInput): AuthResponse
    login(data: LoginInput): AuthResponse!
    deleteMe: User # return a user ??
    updateMe(data: UpdateMeInput): User!
  }

  type User {
    id: Int!
    username: String!
    email: String!
    role: String!
    password: String!
    confirmed: Boolean!
    active: Boolean!
    joinedAt: String!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  input UpdateMeInput {
    newUsername: String
    newEmail: String
  }

  type AuthResponse {
    token: String!
    user: User!
  }
`

export default typeDefs
