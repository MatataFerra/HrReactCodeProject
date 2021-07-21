

export const fetchToEndpoint = (baseUrl, endpoint, data, method = 'GET') => {

  const url = `${baseUrl}/${endpoint}`

  try {
    if(method === 'GET') {
      return fetch(url)
    } else {
      return fetch(url, {
        method,
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify( data )
      })
    }

  } catch (error) {
    console.log(error);
    throw new Error('Ha ocurrido un error a la hora de hacer la petición')
  }

}


export const fetchToEndpointWithToken = (baseUrl, endpoint, data, method = 'GET') => {

  const url = `${baseUrl}/${endpoint}`
  const token = localStorage.getItem('token') || ''

  try {
    if(method === 'GET') {
      return fetch(url, {
        method,
        headers: {
          'x-token': token
        }
      })
      
    } else {
      return fetch(url, {
        method: method,
        headers: {
          'x-token': token
        },
        body: JSON.stringify( data )
      })
    }

  } catch (error) {
    console.log(error);
    throw new Error('Ha ocurrido un error a la hora de hacer la petición')
  }

}