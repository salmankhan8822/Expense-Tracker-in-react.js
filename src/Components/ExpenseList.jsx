import ExpenseItem from "./ExpenseItems";
import "./ExpanseList.css";

const ExpenseList = ({
  date,
  category,
  deleteExpense,
  EditExpense,
  HandleOnAllBtn,
  filteredExpenses,
  HandleOnIncomeBtn,
  HandleOnExpensesBtn,
}) => {
  return (
    <section className="transactions-card">
      <div className="section-heading">
        <div>
          <p className="section-label">Activity</p>
          <h2>Recent Transactions</h2>
        </div>
      </div>

      <div className="transaction-filters">
        <button type="button" className="filter-btn" onClick={HandleOnAllBtn}>
          All
        </button>
        <button
          type="button"
          className="filter-btn"
          onClick={HandleOnIncomeBtn}
        >
          Income
        </button>
        <button
          type="button"
          className="filter-btn"
          onClick={HandleOnExpensesBtn}
        >
          Expenses
        </button>
      </div>

      <div className="transaction-list">
        {filteredExpenses.map((expens) => (
          <ExpenseItem
            key={expens.id}
            id={expens.id}
            expens={expens}
            date={date}
            category={category}
            deleteExpense={deleteExpense}
            EditExpense={EditExpense}
          />
        ))}
      </div>
    </section>
  );
};

export default ExpenseList;
