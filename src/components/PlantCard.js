import React, { useState } from "react";

function PlantCard( { data } ) {
  const [isStock, setIsStock] = useState(true)

  function handleIsStockClick() {
    setIsStock((isStock) => !isStock)
  }
  return (
    <li className="card">
      <img src={data.image} alt={data.name} />
      <h4>{data.name}</h4>
      <p>Price: {data.price}</p>
      {isStock ? (
        <button onClick={handleIsStockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleIsStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
