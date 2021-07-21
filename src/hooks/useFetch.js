
import { useCallback,  useState } from 'react'
import { fetchToEndpointWithToken } from '../helpers/functions/fetchToEndpoint'

export const useFetch = () => {
  const [employeeInfo, setEmployeeInfo] = useState({
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    data: null,
    error: null
  })

  const fetchEmployeeInfo = useCallback( async ({url, endopoint, method, body}) => {
    try {
      setEmployeeInfo({
        isLoading: true,
        isSuccess: false,
        isFailed: false,
        data:null,
        error: null
      })
      const result = await fetchToEndpointWithToken(url, endopoint, body, method)
      setEmployeeInfo({
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        data: result,
        error: null
      })

      return result

    } catch (error) {
      setEmployeeInfo({
        isLoading: false,
        isSuccess: false,
        isFailed: true,
        data: null,
        error: error
      })
    }
  }, [])

  return [ employeeInfo, fetchEmployeeInfo ]
}