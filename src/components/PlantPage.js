import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [searchInput, setSearchInput] = useState([])
  const [data, setData] = useState([])

useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then((resp) => resp.json())
    .then((item) => setData(item))
}, [])

  return (
    <main>
      <NewPlantForm />
      <Search 
        searchInput={searchInput} 
        setSearchInput={setSearchInput} 
      />
      <PlantList 
        data={data} 
        searchInput={searchInput}
      />
    </main>
  );
}

export default PlantPage;
