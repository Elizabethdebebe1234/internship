
import { useState } from "react";

function Header({ onSubmitExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !amount || !date) {
      alert("Please fill in all fields.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      name: title,
      amount: Number(amount),
      date: new Date(`${date}T00:00:00`),
    };

    onSubmitExpense(newExpense);

    // Clear inputs after adding
    setTitle("");
    setAmount("");
    setDate("");

    alert("Expense added successfully!");
  }

  function handleCancel() {
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <div className="title-amount">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="date">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button type="submit" className="add-expence">
            Add Expense
          </button>

          <button
            type="button"
            className="cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Header;
