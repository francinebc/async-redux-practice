import {getSubreddit} from '../apis/reddit'
import {getDog} from '../apis/dog'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_DOG = 'RECEIVE_DOG'
export const REQUEST_DOG = 'REQUEST_DOG'
export const SORT_POSTS = 'SORT_POSTS'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return getSubreddit(subreddit)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function getDogPicture () {
  return (dispatch) => {
    dispatch(requestDog())
    return getDog()
      .then(res => {
        dispatch(receiveDog(res.body.message))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const requestDog = () => {
  return {
    type: REQUEST_DOG
  }
}

export const receiveDog = (dog) => {
  return {
    type: RECEIVE_DOG,
    dog
  }
}

export const sortSubreddit = (sortFn) => {
  return {
    type: SORT_POSTS,
    sortFn
  }
}