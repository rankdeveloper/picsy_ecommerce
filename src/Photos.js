import React from 'react';
import './style.css';
import Image from './pages/Image'
import { Context } from './Context';

function Photos() {
  const { allPhotos, toggleFavorite } = React.useContext(Context);
  
  const photos = allPhotos.map((item, i) => {
    return (
        <Image key={i}  item={item} className={getClass(i)} />
    );
  });

  function getClass(i) {
    if (i % 5 === 0) {
      return 'wide';
    } else if (i % 6 === 0) {
      return 'long';
    }
  }
  return (
    <>
      <div className="grid-container">{photos}</div>
    </>
  );
}

export default Photos;
