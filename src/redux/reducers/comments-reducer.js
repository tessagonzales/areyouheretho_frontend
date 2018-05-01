import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILED,
         ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILED,
        REMOVED_COMMENT, REMOVED_COMMENT_FAILED } from '../actions/comments-actions'

let initialState = []

export default(state = initialState, action) => {
  switch(action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return [...action.payload]
    case FETCH_COMMENTS_FAILED:
      return state
    case ADD_COMMENT_SUCCESS:
      return [...state, ...action.payload]
    case ADD_COMMENT_FAILED:
      return [action.payload]
    case REMOVED_COMMENT:
      return state.filter(comment => comment.id !== action.payload)
    case REMOVED_COMMENT_FAILED:
      return [action.payload]
    default:
      return state
  }
}
