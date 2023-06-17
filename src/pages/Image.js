import React from 'react';
import { Context } from '../Context';
function Image({ item, className }) {
  const [hovered, setHovered] = React.useState(false);
  const { toggleFavorite, add_to_cart, cartItems, deleteFromCart } =
    React.useContext(Context);

  function heartIcon() {
    if (item.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(item.id)}
        />
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(item.id)}
        />
      );
    }
  }

  function isInCart() {
    const exists = cartItems.some((product) => product.id == item.id);
    return exists;
  }
  // const cartIcon = hovered &&
  // <i className="ri-add-circle-fill cart" onClick={() => add_to_cart(item)}/>
  function cartIcon() {
    if (isInCart()) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => deleteFromCart(item.id)}
        />
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => add_to_cart(item)}
        />
      );
    }
  }

  return (
    <div
      className={`grid-item ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={item.url} />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}
export default Image;
