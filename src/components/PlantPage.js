import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {


  const [plants, setPlants] = useState([])
  const[search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => 
      setPlants(data)
    )
  },[])

  function addNewPlant(newPlant){
    setPlants([newPlant, ...plants])
  }

  let filteredSearch = plants.filter((plant)=> 
    plant.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredSearch} />
    </main>
  );
}

export default PlantPage;
