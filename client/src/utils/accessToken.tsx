let accessToken = ''

export const setAccessToken = (newAccessTokenValue: string) => {
  accessToken = newAccessTokenValue
}

export const getAccessToken = () => accessToken
