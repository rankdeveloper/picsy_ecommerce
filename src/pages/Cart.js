import React from 'react';
import { Context } from '../Context';

function Cart() {
  const { cartItems, setCartItems, deleteFromCart } = React.useContext(Context);
  const [isOrdering, setIsOrdering] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  console.log('Cart items');
  console.log(cartItems);

  function calculateTotal() {
    var total = 0;
    cartItems.map((item) => (total += parseFloat(item.price)));
    return total;
  }

  function orderPlaced() {
    setIsOrdering(true);
    setTimeout(() => {
      setIsOrdering(false);
      setCartItems([]);
    }, 3000);

    console.log('Order placed');
  }

  const disableOrder = cartItems.length === 0;
  const elements = cartItems.map((item) => {
    return (
      <tr>
        <td className="center">
          <i
            className={`ri-delete-bin-fill`}
            onClick={() => deleteFromCart(item.id)}
          ></i>
          <img src={item.url} />
        </td>
        <td>{item.price}</td>
      </tr>
    );
  });

  console.log(hovered);
  return (
    <div class="cart-items">
      <h2>Check Out</h2>
      {cartItems.length > 0 && (
        <table>
          <tr>
            <th>Items</th>
            <th>Price</th>
          </tr>

          {elements}
        </table>
      )}

      {cartItems.length > 0 && (
        <div class="total_button">
          <h3>Total Price : ${calculateTotal()}</h3>
          <button
            disabled={disableOrder}
            onClick={orderPlaced}
            className="place-order"
          >
            {isOrdering ? 'Ordering...' : 'Place Order'}
          </button>
        </div>
      )}

      {disableOrder && <p>You have no items in your cart</p>}
    </div>
  );
}

export default Cart;
