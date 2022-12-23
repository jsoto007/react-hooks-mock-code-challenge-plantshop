import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { data } ) {
  return (
    <ul className="cards">{data.map((item) => <PlantCard key={item.id} data={item} />)}</ul>
  );
}

export default PlantList;
