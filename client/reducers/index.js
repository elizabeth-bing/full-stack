import { combineReducers } from 'redux'

import widgetsReducer from './widgets'

const reducer = combineReducers({
  wombats: widgetsReducer,
})

export default reducer
