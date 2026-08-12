import "./ExpanseForm.css";

const ExpenseForm = ( {
  handleOnAddExpense,
  Amount,
  setAmount,
  category,
  setCategory,
  type,
  setType,
  TransactionTitle,
  setTransactionTitle,
  date,
  setDate,
  editId,
} ) => {
  return (
    <section className="form-card">
      <div className="section-heading">
        <div>
          <p className="section-label">New Transaction</p>
          <h2>Add Income or Expense</h2>
        </div>
      </div>

      <form className="expense-form">
        <div className="form-group">
          <label htmlFor="title">Transaction title</label>
          <input id="title" type="text" placeholder="Example: Grocery shopping" value={TransactionTitle}
           onChange={(e) => setTransactionTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>

          <div className="amount-input">
            <span>Rs.</span>
            <input id="amount" type="number" placeholder="Enter amount" value={Amount} onChange={(e) => setAmount(e.target.value)}/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category</label>

            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select category</option>
              <option value="food">Food</option>
              <option value="salary">Salary</option>
              <option value="travel">Travel</option>
              <option value="shopping">Shopping</option>
              <option value="bills">Bills</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="type">Transaction type</label>

            <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Select type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="date">Transaction date</label>

          <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>

        <button type="button" className="add-transaction-btn" onClick={handleOnAddExpense}>{editId !== null ? "Update Transaction" : "Add Transsaction"}</button>
      </form>
    </section>
  );
};

export default ExpenseForm;