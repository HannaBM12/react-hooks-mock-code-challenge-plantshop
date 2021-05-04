import React, { useState } from "react";

function PlantCard({image, name, price, id, onHandleRemove}) {
  
  const[isSoldOut, setIsSoldOut] = useState(true)

  function handleClick(){
    console.log('Clicked')
    setIsSoldOut((isSoldOut)=> !isSoldOut)
  }

  function handleRemove(){
    onHandleRemove(id)
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => console.log(data))

  }

  function handleEdit(){
    console.log('Edited')
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
      )} <span></span>
      <button className="primary" onClick={handleEdit}>Edit Price</button>
      <button className="secondary" onClick={handleRemove}>Remove Plant</button>
    </li>
  );
}

export default PlantCard;
