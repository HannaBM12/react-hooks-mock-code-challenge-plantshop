
import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchItem, onHandleDelete, onPriceUpdate}) {
  // console.log(plants)

  const searchedPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchItem.toLowerCase()))


  const cards = searchedPlants.map(plant => 
    <PlantCard key= {plant.id} {...plant} onHandleDelete={onHandleDelete} onPriceUpdate={onPriceUpdate} />)

  return (
    <ul className="cards">{cards}</ul>
  );
}

export default PlantList;
