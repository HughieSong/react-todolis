import { CHANGE_INPUT_VALUE, ADD_ITEM, DETELE_ITEM } from './actionType';

export const getInputChangeAction= (value)=>({
  type:CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = () => ({
  type: ADD_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DETELE_ITEM,
  index
})