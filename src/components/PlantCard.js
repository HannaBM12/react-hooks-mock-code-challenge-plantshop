import React, { useState } from "react";

function PlantCard({image="https://via.placeholder.com/400", name, price}) {
  
const[inStock, setInStock] = useState(true)

  const handleClick =() => {
      setInStock(inStock => !inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
