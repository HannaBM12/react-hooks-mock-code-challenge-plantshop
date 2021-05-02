import React, { useState } from "react";

function PlantCard({image, name, price}) {
  const[isSoldOut, setIsSoldOut] = useState(true)

  function handleClick(){
    console.log('Clicked')
    setIsSoldOut((isSoldOut)=> !isSoldOut)
  }
  // console.log(image)
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isSoldOut ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
