import React from 'react';
import Data from './Data.json';
const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = React.useState(Data);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    fetch(Data)
      .then((res) => res.json())
      .then((data) => allPhotos(data));
  });

  console.log(allPhotos);

  function toggleFavorite(id) {
    const arr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(arr);
  }
  function add_to_cart(newItem) {
    setCartItems((prevItem) => [...prevItem, newItem]);
  }
  console.log(cartItems);

  function deleteFromCart(id) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  }

  return (
    <Context.Provider
      value={{ allPhotos, toggleFavorite, add_to_cart, cartItems , deleteFromCart , setCartItems}}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
