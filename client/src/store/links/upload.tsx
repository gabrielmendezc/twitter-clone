import { createUploadLink } from 'apollo-upload-client'

export const uploadLink = createUploadLink({
  uri: 'http://localhost:4000/graphql',
  credentials:
    process.env.NODE_ENV === 'development' ? 'include' : 'same-origin'
})
