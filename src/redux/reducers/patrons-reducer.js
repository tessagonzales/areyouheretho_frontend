import { FETCH_PATRONS_SUCCESS, FETCH_PATRONS_FAILED,
         ADD_PERSON_SUCCESS, ADD_PERSON_FAILED,
         REMOVED_PATRON, REMOVED_PATRON_FAILED } from '../actions/patrons-actions'

let initialState = []

export default(state = initialState, action) => {
  switch(action.type) {
    case FETCH_PATRONS_SUCCESS:
      return [...action.payload]
    case FETCH_PATRONS_FAILED:
      return state
    case ADD_PERSON_SUCCESS:
      return [...state, ...action.payload]
    case ADD_PERSON_FAILED:
      return [action.payload]
    case REMOVED_PATRON:
      return state.filter(patron => patron.id !== action.payload)
    case REMOVED_PATRON_FAILED:
      return [action.payload]
    default:
      return state
  }
}
