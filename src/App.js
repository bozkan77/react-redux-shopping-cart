import React, { cloneElement } from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

// redux stuff
import { Provider } from 'react-redux';
// reducer
import configureStore from './reducers/configureStore';

//store
const store = configureStore();

function App() {
  // cart setup
  console.log(store);

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
