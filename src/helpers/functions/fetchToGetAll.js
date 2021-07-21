import Swal from "sweetalert2";
import { fetchToEndpointWithToken } from "./fetchToEndpoint";

export const fetchToGetAllEmployees = (baseUrl, endpoint, setEmployees) => {

  fetchToEndpointWithToken(baseUrl, endpoint)
    .then(resp => resp.json() )
    .then(data => {
      if( data ) {
        return setEmployees( data.Empleados )
      } else {
        return Swal.fire('Error', 'No se encontraron resultados', 'error')
        
      }
    })
    .catch(error => {
      console.log(error);
      Swal.fire('Error', 'Ha ocurrido un problema contacte con el administrador', 'error')
    })
}