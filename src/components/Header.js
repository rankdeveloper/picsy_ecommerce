import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
function Header() {
  const { cartItems } = React.useContext(Context);

  function cartIcon() {
    if (cartItems.length > 0) {
      return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>;
    } else {
      return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>;
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <h2>[picsy]</h2>
      </Link>
      <div className="cart-icon-header">
        <Link to="/cart">{cartIcon()}</Link>
      </div>
    </div>
  );
}

export default Header;
