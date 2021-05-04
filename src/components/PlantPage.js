import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plants, setPlants] = useState([])
  const[isLoaded, setIsLoaded]= useState(false)
  const[searchByName, setSearchByName] = useState("")

  useEffect(()=>{
      fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => {
        setPlants(data)
        setIsLoaded(true)
      })

    }, []);

  if(!isLoaded)return <h3>Loading ... </h3>

  function handleNewPlant(plantObj){
      setPlants([...plants, plantObj])
  }

  function handleRemovePlant(plantObj){
     const updatedPlant = plants.filter(plant => plant.id !== plantObj)
     setPlants(updatedPlant)
  }

  return (
    <main>
      <NewPlantForm onHandleSubmitForm={handleNewPlant}/>
      <Search searchByName={searchByName} setSearchByName= {setSearchByName}/>
      <PlantList plantList = {plants} searchByName={searchByName} onHandleRemove={handleRemovePlant}/>
    </main>
  );
}

export default PlantPage;
