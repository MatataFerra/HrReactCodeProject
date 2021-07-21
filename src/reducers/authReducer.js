import { types } from '../types/types'

const initialState = {
  checkAuth: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.LoggedIn:
      return {
        ...state,
        ...action.payload,
        checkAuth: true
      }

      case types.Loggedout:
        return {
          checkAuth: true
        }
      
      case types.AuthChecking:
        return {
          ...state,
          checkAuth: true
        }

    default:
      return state
  }
}