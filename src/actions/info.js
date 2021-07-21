import { types } from "../types/types"


export const infoSelected = (component = '') => ({
  type: types.infoSelected,
  payload: component
})

export const cleanUpInfoSelected = () => ({
  type: types.cleanUpInfoSelected
})