import React from 'react';
import CartItem from './CartItem';
const CartContainer = ({ cart = [] }) => {
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
            toplam <span>0.00 TL</span>
          </h4>
        </div>
        <button className='btn clear-btn'>sepeti sil</button>
      </footer>
    </section>
  );
};

export default CartContainer;
