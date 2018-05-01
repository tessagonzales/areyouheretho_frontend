import { FETCH_OWNERS_SUCCESS, FETCH_OWNERS_FAILED } from '../actions/owners-actions'

let initialState = []

export default(state = initialState, action) => {
  switch(action.type) {
    case FETCH_OWNERS_SUCCESS:
      return [...action.payload]
    case FETCH_OWNERS_FAILED:
      return state
    default:
      return state
  }
}
