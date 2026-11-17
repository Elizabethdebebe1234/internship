import { useState } from "react";

function Filter({ expenses, onFilter }) {
    const [selectedYear, setSelectedYear] = useState("All");

    function handleYearChange(e) {
        const year = e.target.value;
          
        setSelectedYear(year);

        const filteredExpenses = expenses.filter((item) => {
            const expenseYear = new Date(item.date).getFullYear();          

            return year === "All" ||
                expenseYear === Number(year);
        });

        onFilter(filteredExpenses);
    }

    return (
        <div className="filter-button">
            <p className="filter-text">Filter by year</p>

            <select
                className="filter-select"
                value={selectedYear}
                onChange={handleYearChange}
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
