import React, { useState } from "react";
import "./styles/ExpenseContainer.css";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const ExpenseContainer = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const onYearSelectHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  //ExpensesFilter is called a controlled component because its actions are all defined in the parent
  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter onYearSelect={onYearSelectHandler} year={filterYear} />
      </div>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};

export default ExpenseContainer;
