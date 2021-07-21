import { types } from "../types/types"

export const modalIsOpen = () => ({
  type: types.modalOpen,
  payload: true,
})

export const modalIsClose = () => ({
  type: types.modalClose,
  payload: false,
})

export const modalAddEmployeeIsOpen = () => ({
  type: types.modalAddEmployeeOpen,
  payload: true,
})

export const modalAddEmployeeClose = () => ({
  type: types.modalAddEmployeeClose,
  payload: false,
})

export const modalInfoEmployeeIsOpen = () => ({
  type: types.modalInfoEmployeeOpen,
  payload: true,
})

export const modalInfoEmployeeIsClose = () => ({
  type: types.modalInfoEmployeeClose,
  payload: false,
})