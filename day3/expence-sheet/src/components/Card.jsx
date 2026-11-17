import React from "react";

function Card({ expences }) {

  
  return (
    <div className="Card">
      {expences.map((expence) => {
        
        const dateObj = new Date(expence.date);
        const month = dateObj.toLocaleString("en-US", { month: "long" });
        const day = dateObj.toLocaleString("en-US", { day: "2-digit" });
        const year = dateObj.getFullYear();

        return (
          <div className="expense-item" key={expence.id}>
           
            <div className="expense-date">
              <div className="expense-date__month">{month}</div>
              <div className="expense-date__year">{year}</div>
              <div className="expense-date__day">{day}</div>
            </div>

            
            <div className="expense-item__description">
              <h2>{expence.name}</h2>
            </div>

            
            <div className="expense-item__price">${Number(expence.amount).toFixed(2)}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
