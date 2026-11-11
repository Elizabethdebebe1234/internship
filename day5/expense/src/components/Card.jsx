import React from "react";
import expense from "./data/expense"

function Card({ expenses }) {

  
  return (
    <div className="Card">
      {expenses.map((expense) => {
        
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
