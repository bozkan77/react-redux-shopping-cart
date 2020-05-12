import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CLEAR_CART:
      return { ...state, cart: action.payload };

    case actionTypes.GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return {
        ...state,
        cart: {
          total,
          amount,
        },
      };

    case actionTypes.REMOVE:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };

    case actionTypes.DECREASE:
      return {
        ...state,
        cart:
          action.payload.amount === 1
            ? state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
            : state.cart.map((cartItem) => {
                const { id, amount } = action.payload;
                if (cartItem.id === id) {
                  cartItem = { ...cartItem, amount: amount - 1 };
                }
                return cartItem;
              }),
      };

    case actionTypes.INCREASE:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          const { id, amount } = action.payload;
          if (cartItem.id === id) {
            cartItem = { ...cartItem, amount: amount + 1 };
          }
          return cartItem;
        }),
      };

    default:
      return state;
  }
}
