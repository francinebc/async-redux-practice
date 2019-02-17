import request from 'superagent'

export const getSubreddit = (subreddit) => {
  return request
    .get(`/api/v1/reddit/subreddit/${subreddit}`)
}
