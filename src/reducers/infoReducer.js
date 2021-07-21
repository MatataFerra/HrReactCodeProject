import { types } from '../types/types'


const initialState = {
  infoSelected: ''
}

export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.infoSelected:
      return {
        ...state,
        infoSelected: action.payload
      }
    
    case types.cleanUpInfoSelected:
      return {
        ...state,
        infoSelected: ''
      }
    default:
      return state
  }
}