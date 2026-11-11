
import { useState, useEffect } from "react";
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
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      newExpense,
    ]);
  }

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div>
      <Header onSubmitExpense={handleAddExpense} />

      <Filter
        expenses={expenses}
        onFilter={setFilteredExpenses}
      />

      <Card expenses={filteredExpenses} />
    </div>
  );
}

export default App;
