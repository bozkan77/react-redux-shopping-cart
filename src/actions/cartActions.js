import * as actionTypes from './actionTypes';

export function clearCart() {
  return {
    type: actionTypes.CLEAR_CART,
    payload: [],
  };
}

export function removeItem(id) {
  return {
    type: actionTypes.REMOVE,
    payload: id,
  };
}

export function getTotal(price, amount) {
  return {
    type: actionTypes.GET_TOTALS,
    payload: { price, amount },
  };
}

export function decreaseItem(id, amount) {
  return {
    type: actionTypes.DECREASE,
    payload: { id, amount },
  };
}
export function increaseItem(id, amount) {
  return {
    type: actionTypes.INCREASE,
    payload: { id, amount },
  };
}
