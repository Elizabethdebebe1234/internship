import React from "react";
import {useState} from "react";
import expense from "../data/expense"

function Card({
  expenses,
  allExpenses,
  setExpenses,
  setFilteredExpenses,
  search
})  {

  const [deletedExpenses, setDeletedExpenses] = useState([]);

  const searchedExpenses = expenses.filter((expense) =>
  expense.name.toLowerCase().includes(search.toLowerCase())
);       


  function handleDelete(id) {
  const deleted = allExpenses.find((item) => item.id === id) ;

  if (!deleted) return;

  setDeletedExpenses((prev) => [...prev, deleted]);

  const updatedExpenses = allExpenses.filter(
    (item) => item.id !== id
  );

  setExpenses(updatedExpenses);
  setFilteredExpenses(updatedExpenses);

  localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
}


function handleUndo() {
  if (deletedExpenses.length === 0) return;

  const lastDeleted = deletedExpenses[deletedExpenses.length - 1];

  const updatedExpenses = [...allExpenses, lastDeleted];

  setExpenses(updatedExpenses);
  setFilteredExpenses(updatedExpenses);

  localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

  setDeletedExpenses((prev) => prev.slice(0, -1));
}
  
  return (
    <div className="Card">

      <button
  onClick={handleUndo}
  disabled={deletedExpenses.length === 0}
>
  Undo
</button>
      {searchedExpenses.map((expense) => {
        
        const dateObj = new Date(expense.date);
        const month = dateObj.toLocaleString("en-US", { month: "long" });
        const day = dateObj.toLocaleString("en-US", { day: "2-digit" });
        const year = dateObj.getFullYear();

       

        return (
          <div className="expense-item" key={expense.id}>
           
            <div className="expense-date">
              <div className="expense-date__month">{month}</div>
              <div className="expense-date__year">{year}</div>
              <div className="expense-date__day">{day}</div>
            </div>


 <button className= "delete-button" onClick={() => handleDelete(expense.id)}>
  Delete
</button>
            
            <div className="expense-item__description">
              <h2>{expense.name}</h2>
            </div>

            
            <div className="expense-item__price">${Number(expense.amount).toFixed(2)}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
