import { FETCH_BARS_SUCCESS, FETCH_BARS_FAILED,
         TOGGLE_SUCCESS, TOGGLE_FAIL } from '../actions/bars-actions'

let initialState = []

export default(state = initialState, action) => {
  switch(action.type) {
    case FETCH_BARS_SUCCESS:
      return [...action.payload]
    case FETCH_BARS_FAILED:
      return state
    case TOGGLE_SUCCESS:
      // Replace the existing version of this bar...
      let changedBar = action.payload[0]
      let otherBars = state.filter(bar => bar.id !== changedBar.id)

      return [ ...otherBars, changedBar ]
    case TOGGLE_FAIL:
      return state
    default:
      return state
  }
}
