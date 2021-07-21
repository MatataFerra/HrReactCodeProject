
import Swal from "sweetalert2"
import { fetchToEndpoint, fetchToEndpointWithToken } from "../helpers/functions/fetchToEndpoint"
import { types } from "../types/types"
import { cleanUpResults } from './search'

export const startLogin = ( email, password ) => {
  return async (dispatch, getState) => {

    const { uri }  = getState().enviroment
   
    const baseUrl = uri.uri
    const endpoint = 'login'

    const resp = await fetchToEndpoint(baseUrl, endpoint, {email, password}, 'POST');
    const { ok, token, name, uid, Message, errors } = await resp.json()
    
    if( ok ) {
      localStorage.setItem('token', token)

      dispatch( login({
        username: name,
        uid: uid,
      }) )
    } else {
      console.log(errors);
      const error_msg = errors
              ? Object.values( errors )[0].msg
              : Message
      Swal.fire({
        title: 'Error', 
        text: error_msg, 
        icon: 'error',
        heightAuto: false,
      })
    }

  }
}

const login = user => ({
  type: types.LoggedIn,
  payload: user
})

// Check the token to change the state

export const checkTokenAndIsAuth = () => {
  return async (dispatch, getState) => {

    const { uri } = getState().enviroment
 
    const baseUrl = uri.uri
    const endpoint = 'token'

    const resp = await fetchToEndpointWithToken(baseUrl, endpoint, { });

    const { ok, token, name, uid, errors } = await resp.json()
    
    if( ok ) {
      localStorage.setItem('token', token)
      
      dispatch( login({
        username: name,
        uid: uid,
      }) )

    } else {
      console.log(errors);
      dispatch( finishCheckTokenAndIsAuth() )

    }

  }
}

const finishCheckTokenAndIsAuth = () => ({
  type: types.AuthChecking
})

export const startRegister = (email, password, username) => {
  
  return async ( dispatch, getState ) => {
    const { uri } = getState().enviroment
    const baseUrl = uri.uri
    const endpoint = 'singup'

    const resp = await fetchToEndpoint(baseUrl, endpoint, { email, password, username }, 'POST');
    const { ok, token, name, uid, Message, errors } = await resp.json()

    if( ok ) {
      localStorage.setItem('token', token);

      Swal.fire({
        title: 'Congrats!',
        text: 'Usuario creado con éxito',
        icon: 'success',
        timer: 1000
      })

      dispatch( login({
        uid: uid,
        username: name
      }))

    } else {
      console.log(errors);
      const error_msg = errors
              ? Object.values( errors )[0].msg
              : Message
      Swal.fire({
        title: 'Error', 
        text: error_msg, 
        icon: 'error',
        heightAuto: false,
      })
    }

  }
}

export const startLogout = () => {
  return ( dispatch ) => {
    Swal.fire('Deslogueado', 'Gracias por tu visita', 'info')
    localStorage.clear()
    dispatch( cleanUpResults() )
    dispatch( logout() )
  }
}

const logout = () => ({
  type: types.Loggedout
})