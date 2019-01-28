import React from 'react';

function ItemMovie(props) {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <p>{props.item.title}</p>
    </div>
  );
}

export default ItemMovie;
