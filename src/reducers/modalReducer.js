import { types } from '../types/types'

const initialState = {
  open: false,
  openAdd: false,
  openInfo: false,
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.modalOpen:
      return {
        ...state,
        open: action.payload,
      }

    case types.modalClose:
      return {
        ...state,
        open: action.payload,
      }

    case types.modalAddEmployeeOpen:
      return {
        ...state,
        openAdd: action.payload,
      }

    case types.modalAddEmployeeClose:
      return {
        ...state,
        openAdd: action.payload,
      }

      case types.modalInfoEmployeeOpen:
      return {
        ...state,
        openInfo: action.payload,
      }

    case types.modalInfoEmployeeClose:
      return {
        ...state,
        openInfo: action.payload,
      }
  
    default:
      return state
  }
}