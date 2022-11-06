import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpense/NewExpenses";

function App() {
  const [expenseData, setExpenseData] = useState([]);

  const addExpenseHandler = (expense) => {
    console.log("In App,js");
    //setExpenseData([expense, ...expenseData]);
    setExpenseData((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div className="App">
      <NewExpenses onAddExpenseHandler={addExpenseHandler} />
      <Expenses items={expenseData} />
    </div>
  );
}

export default App;
