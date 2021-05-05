
import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchItem}) {
  // console.log(plants)

  const searchedPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchItem.toLowerCase()))


  const cards = searchedPlants.map(plant => 
    <PlantCard key= {plant.id} {...plant}/>)

  return (
    <ul className="cards">{cards}</ul>
  );
}

export default PlantList;
