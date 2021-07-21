
import Swal from "sweetalert2"
import { fetchToEndpointWithToken } from "../helpers/functions/fetchToEndpoint"
import { types } from "../types/types"

export const typeOfSearch = (type) => ({
  type: types.typeOfSearch,
  payload: type
})


export const wordToSearch = word => ({
  type: types.searchString,
  payload: word,
})

export const fetchToGetFinalResult = ( ) => {
  return async (dispatch, getState) => {
    const { typeToSearch,  toSearch, results } = getState().search
    const { uri } = getState().enviroment
    const baseUrl = `${uri.uri}/employees/search`
    const reqParams = `${typeToSearch}/${toSearch}`

    if(!typeToSearch) {
      return Swal.fire('Error', 'Debe incluir el tipo de búsqueda', 'error')
    }

    if(!toSearch) {
      return Swal.fire('Cuidado', 'Se previno de hacer una búsqueda con el campo vacío', 'info')
    }

    if(results) {
      dispatch( cleanUpResults() )
    }

    try {
      const resp = await fetchToEndpointWithToken(baseUrl, reqParams);
      const body = await resp.json()
      if(body.ok) {
  
        dispatch(finalResult( [...body.Empleados] ))
      } else {
        Swal.fire('Error', body.Message, 'error')
      }


    } catch (error) {
      console.log(error);
      Swal.fire('Error', 'Se produjo un error', 'error')
    }
  }
}

export const finalResult = results => ({
  type: types.finalResult,
  payload: results
})

export const cleanUpResults = () => ({
  type: types.cleanUpResults
})

export const cleanUpTypeOfSearch = () => ({
  type: types.cleanUpTypeOfSearch
})

export const userHasBeenModifiedTheResults = (boolModified) => ({
  type: types.resultsHaveBeenModified,
  payload: boolModified
})

export const reducerFetchToGetEmployeeResults = ( uri, endpoint ) => {
  return async ( dispatch ) => {

    try {
      const resp = await fetchToEndpointWithToken(uri, endpoint)
      const data = await resp.json()

      if(data.ok) {
        dispatch( fetchEmployeeResults(data.Employee) ) 
      } else {
        Swal.fire('¡Algo pasó!', data.Message, 'error')
      }

      
    } catch (error) {
      console.log(error);
      Swal.fire('Error', 'Ha ocurrido un error en el servidor', 'error')
    }

    
  }
}

const fetchEmployeeResults = (employee) => ({
  type: types.resultsOfFetch,
  payload: employee
})

export const cleanUpFetchEmployeeResults = () => ({
  type: types.cleanUpResultsOfFetch,
})