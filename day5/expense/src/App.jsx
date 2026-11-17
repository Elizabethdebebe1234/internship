import { useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Card from "./components/Card";
import expense from "./data/expense";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");

    return savedExpenses
      ? JSON.parse(savedExpenses)
      : expense;
  });

  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  function handleAddExpense(newExpense) {
    setExpenses((prevExpenses) =>{
      const updatedExpenses = [...expenses,newExpense];

      setExpenses(updatedExpenses);
      setFilteredExpenses(updatedExpenses)

    localStorage.setItem(
      "expenses", 
      JSON.stringify(updatedExpenses)
    );
    return updatedExpenses;
  });
    
  }

 
  return (
    <>
      <Header onSubmitExpense={handleAddExpense} />
      <div className="expense-container">
      <Filter
        expenses={expenses}
        onFilter={setFilteredExpenses}
      />
 
      <Card expenses={filteredExpenses} />
      </div>
    </>
  );
}

export default App;
