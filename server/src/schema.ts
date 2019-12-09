import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    users: [User!]
    user(username: String!): User
    me: User
    uploads: [File]
  }

  type Mutation {
    register(data: RegisterInput): AuthResponse
    login(data: LoginInput): AuthResponse
    deleteMe: User # return the deleted user ??
    updateMe(data: UpdateMeInput): User!
    uploadFile(file: Upload!): File # Upload type added by apollo
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
    profilePicture: String!
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
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
