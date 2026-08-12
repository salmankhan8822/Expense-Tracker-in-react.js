# 💰 React Expense Tracker

A responsive **Expense Tracker built with React.js** that allows users to manage income and expenses, view their current balance, edit or delete transactions, and filter transactions by type.

This project was created to strengthen my **React.js and JavaScript logic-building skills** while practicing state management, props, array methods, form handling, and component-based architecture.

---

## 🚀 Live Demo
https://expanse-tracker-beta-lake.vercel.app/


---


## ✨ Features

- 💰 Add income and expenses
- 📊 View current balance
- 📈 Calculate total income
- 📉 Calculate total expenses
- ✏️ Edit transactions
- 🗑️ Delete transactions
- 🔍 Filter transactions
  - All
  - Income
  - Expenses
- 🏷️ Categorize transactions
- 📅 Add transaction dates
- ⚠️ Form validation
- 💳 Prevent expenses when the balance is insufficient
- 📱 Responsive design
- 🧩 Component-based architecture
- 🎨 Separate CSS files for components

---

## 🛠️ Technologies Used

- **React.js**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Vite**
- **React Hooks**

---

## 📂 Project Structure

```text
src/
│
├── components/
│   │
│   ├── ExpenseApp.jsx
│   ├── ExpenseApp.css
│   │
│   ├── ExpenseForm.jsx
│   ├── ExpenseForm.css
│   │
│   ├── ExpenseSummary.jsx
│   ├── ExpenseSummary.css
│   │
│   ├── ExpenseList.jsx
│   ├── ExpenseList.css
│   │
│   ├── ExpenseItems.jsx
│   └── ExpenseItems.css
│
├── App.jsx
├── main.jsx
└── index.css

-----How this applications works--------- 

User enters transaction
        ↓
Form values are stored in state
        ↓
User clicks Add Transaction
        ↓
Transaction object is created
        ↓
Transaction is added to the Expense array
        ↓
React updates the UI
        ↓
Summary and transaction list update


---------Edit Transsction---------

User clicks Edit
        ↓
Find transaction using .find()
        ↓
Load transaction data into form
        ↓
User changes information
        ↓
Click Update Transaction
        ↓
Update transaction using .map()


---------Delete Transsction---------

User clicks Delete
        ↓
Get transaction ID
        ↓
Use .filter()
        ↓
Remove transaction
        ↓
React updates the UI


------Balance Calculation------

Current Balance = Total Income - Total Expenses

------Transaction filtering------

All
 ↓
Shows all transactions

Income
 ↓
Shows only income transactions

Expenses
 ↓
Shows only expense transactions


---------------

What I Learned

This project helped me improve my understanding of:

. React component architecture
. useState
. Props
. Parent-child communication
. Controlled forms
. Event handling
. Form validation
. Arrays of objects
. .map()
. .filter()
. .find()
. .reduce()
. Conditional logic
. CRUD-style operations
. State updates
. Component-based CSS
. Responsive design
. 🔮 Future Improvements
. Save transactions using localStorage
. Add transaction search
. Add monthly expense reports
. Add charts and graphs
. Add transaction sorting
. Add dark mode
. Add currency selection
. Add persistent data storage
. Improve validation and error messages

---------------

---------📌 Note---------

This project currently stores transactions in React state, so the data will reset when the page is refreshed.
A future version will use localStorage or a backend database to persist transactions.

------------

-----------👨‍💻 About---------

This project is part of my journey to become a stronger JavaScript and React.js developer.

My goal while building these projects is not just to create the UI, but to understand the logic behind each feature and learn how React and JavaScript work together to build real applications.

------------

⭐ If you like this project, feel free to explore the repository and check out my other projects.
