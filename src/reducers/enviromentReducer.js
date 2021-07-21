import { types } from '../types/types'

const initialState = {
  development: true
}


export const enviromentReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.envDevelopment:
      return {
        ...state,
        development: true,
        uri: action.payload
      }
      
    
    case types.envProduction:
      return {
        ...state,
        development: false,
        uri: action.payload
      }
    
    default:
      return state
  }

}