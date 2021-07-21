import { types } from "../types/types"

export const enviroment = (env, uriDev, uriProd) => {
  
  if(env === 'dev') {
    return {
      type: types.envDevelopment,
      payload: {
        uri: uriDev
      }
    }
  } else if (env === 'prod') {
    return {
      type: types.envProduction,
      payload: {
        uri: uriProd
      }
    }
  }
  
}
