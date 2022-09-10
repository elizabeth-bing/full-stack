import { combineReducers } from 'redux'

import widgetsReducer from './widgets'

const reducer = combineReducers({
  widgets: widgetsReducer,
})

export default reducer
