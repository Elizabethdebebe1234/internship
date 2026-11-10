import expence from "../data/expence";
import { useState } from "react";

function Filter({selectedYear, onChangeYear}){


    return(
      <div className = "same-box">
       <div className="filter-button">
        <p className="filter-text">Filter</p>
         
         <select className="filter-select"
                 value= {selectedYear}
                 onChange = {(e) => onChangeYear(e.target.value)}
         >
            <option value="All">All</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2026">2026</option>
         </select>
       </div>

       </div>
    );
}

export default Filter;