import React, { useState } from "react";

function NewPlantForm( { onAddItem } ) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((newItem) => onAddItem(newItem))
  }

  function handleChange(e) {
    const key = e.target.id
    setFormData({
      ...formData, 
      [key]: e.target.value
    })
    
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={formData.name} 
          onChange={handleChange}
          placeholder="Plant name" 
        />
        <input 
          type="text" 
          name="image"
          id="image"
          value={formData.image} 
          onChange={handleChange}
          placeholder="Image URL" 
        />
        <input 
          type="number" 
          name="price" 
          id="price"
          value={formData.price}
          onChange={handleChange}
          step="0.01" 
          placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
