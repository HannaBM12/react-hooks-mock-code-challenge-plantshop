
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

  return (
    <main>
      <NewPlantForm onHandleSubmit={handleFormSubmit}/>
      <Search searchItem={searchItem} setSearchItem={setSearchItem}/>
      <PlantList plants={plants} searchItem={searchItem}/>
    </main>
  );
}

export default PlantPage;