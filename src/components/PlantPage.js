import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [data, setData] = useState([])

useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then((resp) => resp.json())
    .then((item) => setData(item))
}, [])
console.log(data)
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList data={data} />
    </main>
  );
}

export default PlantPage;
