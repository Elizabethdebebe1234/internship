
import { useState, useEffect } from "react";

function Filter({expenses,onFilter}){
    const[selectedYear, setSelectedYear] = useState("All");

    useEffect(()=> {
        const filteredExpenses= expenses.filter((item)=>{
        const year = new Date(item.date).getFullYear();
        return selectedYear==="All"|| year===Number(selectedYear);

    });
    onFilter(filteredExpenses);
  }, [expenses, selectedYear, onFilter]);

    function handleYearChange(e) {
    setSelectedYear( e.target.value);
    
    } 

    return(
      
       <div className="filter-button">
        <p className="filter-text">Filter</p>
         
         <select className="filter-select"
                 value= {selectedYear}
                 onChange = {handleYearChange}
         >
            <option value="All">All</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2026">2026</option>
         </select>
       </div>

       
    );
}

export default Filter;