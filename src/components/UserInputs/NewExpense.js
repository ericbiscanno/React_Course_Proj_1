import React, { useState } from "react";
import "./styles/NewExpense.css";
import "./NewExpForm";
import NewExpenseForm from "./NewExpForm";

const NewExpense = (props) => {
  const [isEdit, setEdit] = useState(false);
  const saveExpenseDataHandler = (entrdExpenseData) => {
    const expenseData = {
      ...entrdExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    //console.log(expenseData);
  };

  const startEditingHandler = () => {
    setEdit(true);
  };
  const stopEditingHandler = () => {
    setEdit(false);
  };
  return (
    <div className="new-expense">
      {!isEdit && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEdit && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEdit={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
