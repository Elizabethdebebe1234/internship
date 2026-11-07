import { useState, useEffect } from "react";
import Cards from "./components/Cards"
import equipments from "./data/equipments"

function App () {


  const [value,setValue] = useState ("");
  const [price,setPrice] = useState ("");
  const [newEquipments,setNewEquipments] = useState ([])
  const [selectedyear, setSelectedyear ] = useState("All")
  
  const allEquipments= [
    ...equipments,
    ...newEquipments
  ];

  const filteredEquipments = allEquipments.filter((equipment) => 
    selectedyear === "All" ||
    equipment.year === Number(selectedyear));
  
     function handleSave () {
      if (!value.trim() || !price.trim()){
        return;
      }

      const newEquipment = {
        id: Date.now(),
        name: value,
        price : Number (price),
        year: 2019,
      };

      const updatedEquipments = [
        ...newEquipments,
        newEquipment,
      ];

      setNewEquipments(updatedEquipments);

      localStorage.setItem(
        "equipments",
        JSON.stringify(updatedEquipments)
      );

      setValue("");
      setPrice("");

    }

    useEffect(() => {
      const savedEquipments = JSON.parse(
        localStorage.getItem("equipments") || "[]"
      );
      setNewEquipments(savedEquipments);
      
    },[]);


  return (

    <div>
    <h1 className = "welcome-title"> welcome</h1>
    <h2>Save your equipments </h2>

    <label htmlFor="name"> Equipment Name: </label>
    <input 
  
          type="text" 
          value = {value}
          onChange = {(e) => setValue(e.target.value)}
          />
         
      <label htmlFor="price"> Equipment Price: </label>
          <input 
          type="number" 
          value = {price}
          onChange = {(e) => setPrice(e.target.value)}
        
          />
      
      <select
  value={selectedyear}
  onChange ={(e) => setSelectedyear(e.target.value)} 
  >
  <option value="All"> All Years </option>
  <option value="2002"> 2002</option>
  <option value="2003"> 2003</option>
  <option value="2004"> 2004</option>
  <option value="2005"> 2005</option>
  <option value="2019"> 2019</option>
  
</select>


   <button onClick = {handleSave}>
  save
</button>





    {filteredEquipments.map((equipment) => (
  <Cards
    key={equipment.id}
    equipment={equipment}
  />
))}

    </div>

  )
}


export default App;