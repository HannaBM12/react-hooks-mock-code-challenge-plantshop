import React, { useState } from "react";

function PlantCard({id, image="https://via.placeholder.com/400", name, price, onHandleDelete, onPriceUpdate}) {
  
const[inStock, setInStock] = useState(true)
const [newPrice, setNewPrice] = useState("")

  const handleClick =() => {
      setInStock(inStock => !inStock)
  }

  function handleDelete(){
    onHandleDelete(id)
    fetch(`http://localhost:6001/plants/${id}`, {
     method: 'DELETE'
    })
    .then(res => res.json())
    .then(console.log)
  }

  function handleUpdate(e){
    e.preventDefault()
    const updatedPrice = {
      price: newPrice
    }
   fetch(`http://localhost:6001/plants/${id}`, {
     method: 'PATCH',
     headers: {
       'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPrice)
   })
   .then(res => res.json())
   .then(onPriceUpdate)
   setNewPrice('')
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
      <span>  </span>
    <button onClick={handleDelete}>Delete</button> <span>  </span>   
    <form onSubmit={handleUpdate}>
        <input type="number" name="name" placeholder="new price"value={newPrice} onChange={(e)=>setNewPrice(parseFloat(e.target.value))}/>
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
