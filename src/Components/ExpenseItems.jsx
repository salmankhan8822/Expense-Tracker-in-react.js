import "./ExpanseItems.css";


const ExpenseItem = ( {expens, deleteExpense, id, EditExpense} ) => {
  return (
    <article className="transaction-item">
      <div className={`transaction-icon`}>
      </div>

      <div className="transaction-details">
        <h3>{expens.TransactionTitle}</h3>

        <div className="transaction-meta">
          <span>{expens.category}</span>
          <span className="meta-dot">•</span>
          <span>{expens.date}</span>
        </div>
      </div>

      <div className="transaction-actions">
        <strong className={`transaction-amount`}> </strong>

        <div className="action-buttons">
          <button type="button" className="action-btn edit-btn" onClick={() => EditExpense(id)}>✏️</button>

          <button type="button" className="action-btn delete-btn" onClick={() => deleteExpense(id)}>🗑️</button>
        </div>
      </div>
    </article>
  );
};

export default ExpenseItem;