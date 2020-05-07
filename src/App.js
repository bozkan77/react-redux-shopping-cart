import React, { cloneElement } from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// redux stuff
import { Provider } from 'react-redux';
// reducer
import reducer from './reducer';
// store
import { createStore } from 'redux';

// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 15,
};

//store
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
