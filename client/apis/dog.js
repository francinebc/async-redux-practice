import request from 'superagent'

export const getDog = () => {
  return request
    .get('https://dog.ceo/api/breeds/image/random')
}
