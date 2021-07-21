import { types } from '../types/types'

const initialState = {
  typeToSearch: '',
  toSearch: '',
  results: '',
  isModified: false,
  fetch: {},
  fetchLoading: true
}

export const searchReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.typeOfSearch:
      return {
        ...state,
        typeToSearch: action.payload,
      }
    
    case types.searchString:
      return {
        ...state,
        toSearch: action.payload
      }
    
      case types.finalResult:
        return {
          ...state,
          results: [...action.payload]
        }
      
      case types.cleanUpResults:
        return {
          ...state,
          results: []
        }
      
      case types.cleanUpTypeOfSearch:
        return {
          ...state,
          typeToSearch: ''
        }
      
      case types.resultsHaveBeenModified:
        return {
          ...state,
          isModified: action.payload
        }

      case types.resultsOfFetch:
        return {
          ...state,
          fetch: {...action.payload},
          fetchLoading: false,
        }
      case types.cleanUpResultsOfFetch:
        return {
          ...state,
          fetch: {},
          fetchLoading: true
        }
      
    default:
      return state
  }

}