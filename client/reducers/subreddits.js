import {RECEIVE_POSTS, SORT_POSTS} from '../actions'

function subreddits (state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts

    case SORT_POSTS:
      return [...action.sortFn(state)]

    default:
      return state
  }
}

export default subreddits
