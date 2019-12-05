import { users } from './User/Query.GetAll'
import { user } from './User/Query.GetOne'
import { me } from './Me/Query.Me'

export const Query = {
  hello: (): string => 'Hello Apollo! 🚀',
  users,
  user,
  me
}
