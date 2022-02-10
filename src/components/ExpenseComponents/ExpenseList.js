import ExpenseItem from "./ExpenseItem";
import "./styles/ExpensesList.css";

const ExpenseList = (props) => {
 
  const expensesArray = props.expenses;
  if (expensesArray.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses for selected year</h2>
  }
  return (
    <ul className="expenses-list">
      {expensesArray.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;

// another, longer way to check the filtered.length and display it.
// the way in the jsx is more industry standard. if the 1st condition is true it returns
// the part after the double ampersand.
// personally prefer turnaries since I am used to using them in C#
// {filteredExpenses.length === 0 ? (
//     <p>No Expenses Found</p>
//   ) : (
//     filteredExpenses.map((expense) => (
//       <ExpenseItem key={expense.id} expense={expense} />
//     ))
//   )}
// OR OR OR OR OR
//     {props.expenses.length === 0 && <p>No Expenses Found For This Year</p>}
// {props.expenses.length > 0 &&
//     props.expenses.map((expense) => (
//     <ExpenseItem key={expense.id} expense={expense} />
//   ))}
