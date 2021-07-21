import { types } from "../types/types"


export const rowSelected = (row) => ({
  type: types.rowSelectedForUser,
  payload: row
})

export const rowUnSelected = () => ({
  type: types.rowUnSelectedForUser
})