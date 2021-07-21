import { types } from '../types/types'


const initialState = {
  rowSelected: {}
}

export const rowReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.rowSelectedForUser:
      return {
        ...state,
        rowSelected: {...action.payload}
      }
    
    case types.rowUnSelectedForUser:
      return {
        ...state,
        rowSelected: {}
      }
    default:
      return state
  }
}