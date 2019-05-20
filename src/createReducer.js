import { combineReducers } from 'redux'

import exampleReducer from './screens/Example/reducer'

const rootReducer = combineReducers({ example: exampleReducer })

export default rootReducer
