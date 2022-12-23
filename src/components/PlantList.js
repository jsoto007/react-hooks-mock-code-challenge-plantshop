import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { data, searchInput } ) {

  const updatedDisplayData = data.filter((item) => item.name.includes(searchInput) )
  return (
    <ul className="cards">{updatedDisplayData.map((item) => <PlantCard key={item.id} data={item} />)}</ul>
  );
}

export default PlantList;
