import { combineReducers } from "redux"

import todos from "./todosReducer"

export default combineReducers({
  todos,
  // New reducers can be added here
})
