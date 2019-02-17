import {RECEIVE_DOG} from '../actions'

function dog (state = [], action) {
  switch (action.type) {
    case RECEIVE_DOG:
      return action.dog

    default:
      return state
  }
}

export default dog
