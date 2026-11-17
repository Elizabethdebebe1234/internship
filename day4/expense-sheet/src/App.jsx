import { useState, useEffect } from "react";

import Header from "./components/Header";
import Filter from "./components/Filter";
import Card from "./components/Card";

import initialExpenses from "./data/expense";

function App() {
  const [selectedYear, setSelectedYear] = useState("All");

  // Load expenses from LocalStorage or initial data
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");

    if (savedExpenses) {
      return JSON.parse(savedExpenses).map((item) => ({
        ...item,
        date: new Date(item.date),
      }));
    }

    return initialExpenses;
  });

  // Save expenses whenever they change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add a new expense
  function handleSubmit(newExpense) {
    setExpenses((previousExpenses) => [
      ...previousExpenses,
      newExpense,
    ]);
  }

  // Filter expenses by year
  const filteredExpenses = expenses.filter((item) => {
    const year = item.date.getFullYear();

    return (
      selectedYear === "All" ||
      year === Number(selectedYear)
    );
  });

  return (
    <>
      <Header onSubmitExpense={handleSubmit} />

      <Filter
        selectedYear={selectedYear}
        onChangeYear={setSelectedYear}
      />

      <Card expenses={filteredExpenses} />
    </>
  );
}

export default App;