function Card({ expenses }) {
  return (
    <div className="Card">
      {expenses.length === 0 ? (
        <p>No expenses found for this year.</p>
      ) : (
        expenses.map((expense) => {
          return (
            <div className="expense-card" key={expense.id}>
              <h3>{expense.name}</h3>

              <p>${expense.amount}</p>

              <p>
                {expense.date.toLocaleDateString()}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Card;