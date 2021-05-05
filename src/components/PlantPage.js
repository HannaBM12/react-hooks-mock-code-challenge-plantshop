
import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchItem, setSearchItem] = useState('')
  

  useEffect(()=> {
        fetch('http://localhost:6001/plants')
        .then(res => res.json())
        .then(setPlants)
        }, [])

  function handleFormSubmit(newPlant){
    setPlants([...plants, newPlant])
  }

  function handleDeletePlant(plantObjId){
      const updatedPlants = plants.filter(plant => 
        plant.id !== plantObjId)
      setPlants(updatedPlants)
  }

  function handleUpdatedPrice(updatedPlant){
    const updatedPricePlant = plants.map(plant =>
      plant.id === updatedPlant.id ? updatedPlant : plant)
    setPlants(updatedPricePlant)
  }


  return (
    <main>
      <NewPlantForm onHandleSubmit={handleFormSubmit}/>
      <Search searchItem={searchItem} setSearchItem={setSearchItem}/>
      <PlantList plants={plants} searchItem={searchItem} onHandleDelete={handleDeletePlant} onPriceUpdate={handleUpdatedPrice}/>
    </main>
  );
}

export default PlantPage;