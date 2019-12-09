import { register } from './User/Mutation.Register'
import { login } from './User/Mutation.Login'
import { deleteMe } from './Me/Mutation.Delete'
import { updateMe } from './Me/Mutation.Update'
import { changeProfilePicture } from './File/Mutation.Upload'

export const Mutation = {
  register,
  login,
  deleteMe,
  updateMe,
  changeProfilePicture
}
