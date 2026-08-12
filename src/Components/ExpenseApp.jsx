import ExpenseSummary from "./ExpenseSummary";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import "./ExpanseApp.css";

const ExpenseApp = () => {
  let [TransactionTitle, setTransactionTitle] = useState("");
  let [Amount, setAmount] = useState("");
  let [category, setCategory] = useState("");
  let [type, setType] = useState("");
  let [date, setDate] = useState("");
  let [Expense, setExpense] = useState([]);
  let [editId, setEditId] = useState(null);
  let [filter, setfilter] = useState("all");

  let HandleOnAllBtn = () => {
    setfilter("all");
  };

  let handleOnIncomeBtn = () => {
    setfilter("income");
  };

  let HandleOnExpensesBtn = () => {
    setfilter("expense");
  };

  let filteredExpenses = Expense;

  if (filter === "income") {
    filteredExpenses = Expense.filter((expense) => expense.type === "income");
  } else if (filter === "expense") {
    filteredExpenses = Expense.filter((expense) => expense.type === "expense");
  }

  const totalIncome = Expense.reduce((total, item) => {
    if (item.type === "income") {
      return total + Number(item.Amount);
    }

    return total;
  }, 0);

  const totalExpense = Expense.reduce((total, item) => {
    if (item.type === "expense") {
      return total + Number(item.Amount);
    }

    return total;
  }, 0);

  const currentBalance = totalIncome - totalExpense;

  let handleOnAddExpense = () => {
    if (
      TransactionTitle === "" ||
      Amount === "" ||
      category === "" ||
      type === "" ||
      date === "" ||
      Expense === ""
    ) {
      alert("Please fill of this form first...");
      return;
    }

    if (type === "expense" && Number(Amount) > currentBalance) {
      alert("Insufficient balance...");
      return;
    }

    if (editId !== null) {
      let updateExpenses = Expense.map((expens) =>
        expens.id === editId
          ? {
              ...expens,
              TransactionTitle,
              Amount,
              category,
              type,
              date,
            }
          : expens,
      );

      setExpense(updateExpenses);
      setEditId(null);
    } else {
      let AddNewExpense = {
        id: Date.now(),
        TransactionTitle,
        Amount,
        category,
        type,
        date,
      };

      setExpense([...Expense, AddNewExpense]);
    }
    setTransactionTitle("");
    setAmount("");
    setCategory("");
    setType("");
    setDate("");
  };

  let deleteExpense = (id) => {
    let updateExpenses = Expense.filter((expens) => expens.id !== id);
    setExpense(updateExpenses);
  };

  let EditExpense = (id) => {
    let updateExpenses = Expense.find((expense) => expense.id === id);
    if (updateExpenses) {
      setTransactionTitle(updateExpenses.TransactionTitle);
      setAmount(updateExpenses.Amount);
      setCategory(updateExpenses.category);
      setType(updateExpenses.type);
      setDate(updateExpenses.date);

      setEditId(id);
    }
  };

  return (
    <main className="expense-page">
      <section className="expense-container">
        <header className="expense-header">
          <div>
            <p className="header-label">Personal Finance</p>
            <h1>Expense Tracker</h1>
            <p className="header-description">
              Manage your income and expenses in one place.
            </p>
          </div>

          <div className="header-icon">💰</div>
        </header>

        <ExpenseSummary Expense={Expense} />

        <div className="expense-content">
          <ExpenseForm
            handleOnAddExpense={handleOnAddExpense}
            TransactionTitle={TransactionTitle}
            setTransactionTitle={setTransactionTitle}
            Amount={Amount}
            setAmount={setAmount}
            category={category}
            setCategory={setCategory}
            type={type}
            setType={setType}
            date={date}
            setDate={setDate}
            editId={editId}
          />
          <ExpenseList
            Expense={Expense}
            setExpense={setExpense}
            date={date}
            category={category}
            deleteExpense={deleteExpense}
            EditExpense={EditExpense}
            editId={editId}
            HandleOnAllBtn={HandleOnAllBtn}
            HandleOnIncomeBtn={handleOnIncomeBtn}
            HandleOnExpensesBtn={HandleOnExpensesBtn}
            filteredExpenses={filteredExpenses}
          />
        </div>
      </section>
    </main>
  );
};

export default ExpenseApp;
