import React, { useEffect } from 'react';
// redux
import { connect } from 'react-redux';
import CartItem from './CartItem';

import * as cartAction from '../actions/cartActions';
import * as actionTypes from '../actions/cartActions';

const CartContainer = ({ cart = [], total, dispatch, getAmount }) => {
  useEffect(() => {
    getAmount();
  }, [getAmount]);
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>Sepetiniz</h2>
          <h4 className='empty-cart'>sepetiniz boş</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>sepetiniz</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            toplam <span>{total} TL</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => dispatch(cartAction.clearCart())}
        >
          sepeti sil
        </button>
      </footer>
    </section>
  );
};
const mapStateToProps = (state) => {
  const { cart } = state.cartReducer;
  console.log(cart);
  return {
    cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAmount: (amount) => dispatch(actionTypes.getTotal(amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
