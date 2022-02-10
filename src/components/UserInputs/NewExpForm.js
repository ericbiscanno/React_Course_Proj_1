import React, { useState } from "react";
import "./styles/NewExpForm.css";

const NewExpenseForm = (props) => {
  const [entrdTitle, setEntrdTitle] = useState("");
  const [entrdAmount, setEntrdAmount] = useState("");
  const [entrdDate, setEntrdDate] = useState("");

  const titleChangeHandler = (event) => {
    setEntrdTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEntrdAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEntrdDate(event.target.value);
  };

  //Another way to do multiple state items
  //   const [userInput, setUserInput] = useState({
  //     entrdTitle: "",
  //     entrdAmount: "",
  //     entrdDate: "",
  //   });

  //   const titleChangeHandler = (event) => {
  //     // whenever you u update state and depend on prev state
  //     // must pass in a function as the arg to the state function
  //     // rather than just using ...userInput
  //     setUserInput((prevState) => {
  //       return { ...prevState, entrdTitle: event.target.value };
  //     });
  //   };
  //   const amountChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, entrdTitle: event.target.value };
  //     });
  //   };
  //   const dateChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, entrdTitle: event.target.value };
  //     });
  //   };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: entrdTitle,
      amount: +entrdAmount,
      date: new Date(entrdDate),
    };
    props.onSaveExpenseData(formData);
    setEntrdAmount("");
    setEntrdDate("");
    setEntrdTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entrdTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entrdAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2010-01-01"
            max="2030-12-31"
            value={entrdDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancelEdit}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
