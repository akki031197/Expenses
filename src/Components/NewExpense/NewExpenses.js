import React from "react";
import ExpenseFrom from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpenseHandler(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpenses;
