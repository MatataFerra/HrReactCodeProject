import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { searchReducer } from './searchReducer'
import { rowReducer } from './rowReducer'
import { modalReducer } from './modalReducer'
import { enviromentReducer } from './enviromentReducer'
import { infoReducer } from './infoReducer'


export const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  row: rowReducer,
  modal: modalReducer,
  enviroment: enviromentReducer,
  info: infoReducer,
})