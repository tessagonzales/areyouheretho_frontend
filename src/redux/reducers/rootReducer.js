import bars from './bars-reducer'
import patrons from './patrons-reducer'
import comments from './comments-reducer'
import owners from './owners-reducer'
import { combineReducers } from 'redux'

export default combineReducers({
  bars, patrons, comments, owners
})
