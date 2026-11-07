import { useState, useEffect } from "react";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Header from "./components/Header";
import expenceData from "./data/expence";

function App() {
  const [selectedYear, setSelectedYear] = useState("All");

  
  const [expence, setExpence] = useState(() => {
    const savedExpences = localStorage.getItem("expences");

    if (savedExpences) {
      return JSON.parse(savedExpences).map((item) => ({
        ...item,
        date: new Date(item.date),
      }));
    }

    return expenceData;
  });

  
  useEffect(() => {
    localStorage.setItem("expences", JSON.stringify(expence));
  }, [expence]);

  function handleSubmit(newExpense) {
    setExpence((previousExpenses) => [
      ...previousExpenses,
      newExpense,
    ]);
  }

  
  const filteredExpences = expence.filter((item) => {
    const year = new Date(item.date).getFullYear();

    return selectedYear === "All" || year === Number(selectedYear);
  });

  return (
    <>
      <Header onSubmitExpense={handleSubmit} />

      <Filter
        selectedYear={selectedYear}
        onChangeYear={setSelectedYear}
      />

      <Card expences={filteredExpences}/>
    </>
  );
}

export default App;
