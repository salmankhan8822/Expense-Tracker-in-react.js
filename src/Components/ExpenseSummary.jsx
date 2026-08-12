import "./ExpanseSummary.css";

const ExpenseSummary = ( {Expense} ) => {
   
  let totalIncome = Expense.reduce((total, item) => {
    if(item.type === "income") {
      return total + Number(item.Amount);
    }
    return total;
  }, 0);

 let totalExpense = Expense.reduce((total, item) => {
  if(item.type === "expense") {
    return total + Number(item.Amount);
  }

  return total;
 }, 0);

 let currentBalance = totalIncome - totalExpense;

  return (
    <section className="summary-grid">
      <article className="summary-card balance-card">
        <div className="summary-icon">💳</div>

        <div>
          <p>Current Balance</p>
          <h2>Rs. {currentBalance}</h2>
        </div>
      </article>

      <article className="summary-card income-card">
        <div className="summary-icon">↗</div>

        <div>
          <p>Total Income</p>
          <h2>Rs. {totalIncome}</h2>
        </div>
      </article>

      <article className="summary-card expense-card">
        <div className="summary-icon">↘</div>

        <div>
          <p>Total Expense</p>
          <h2>Rs. {totalExpense}</h2>
        </div>
      </article>
    </section>
  );
};

export default ExpenseSummary;