import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, searchByName, onHandleRemove}) {

  
  
  const filteredPlants = plantList.filter(plant =>{
      if(plant.name.toLowerCase().includes(searchByName.toLowerCase())){
        return plant
      }
  })

  const plantDetails = filteredPlants.map(plant => {
    return (
      <PlantCard id= {plant.id} key={plant.id} name= {plant.name} image={plant.image} 
        price={plant.price} onHandleRemove={onHandleRemove}/> 
    )
 })

  return (
    <ul className="cards"> {plantDetails} </ul>
  );
}

export default PlantList;
