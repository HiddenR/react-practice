import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  // console.log(props);
  const [title, EnteredTitle] = useState("");
  const [cost, EnteredCost] = useState("");
  const [date, EnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   EnteredTitle: ``,
  //   EnteredCost: ``,
  //   EnteredDate: ``,
  // });
  const titlehandler = (event) => {
    EnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredTitle: event.target.value,
    // });
  };

  const costhandler = (event) => {
    EnteredCost(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredCost: event.target.value,
    // });
  };
  const datehandler = (event) => {
    EnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredDate: event.target.value,
    // });
  };

  const submithandler = (event) => {
    event.preventDefault();
    // console.log(title);
    // console.log(cost);
    // console.log(date);
    const ExpenseData = {
      // ...userInput,
      Title: title,
      Cost: cost,
      Date: new Date(date),
    };
    props.onSaveExpenseData(ExpenseData);
    EnteredTitle("");
    EnteredCost("");
    EnteredDate("");
  };

  return (
    <form onSubmit={submithandler}>
      <div className="ExpenseForm--wrapper">
        <label>Title</label>
        <input
          type="text"
          placeholder="Expense TItle"
          onChange={titlehandler}
          value={title}
        />
        <label>Cost</label>
        <input
          type="number"
          placeholder="Expense Cost"
          onChange={costhandler}
          value={cost}
        />
        <label>Date</label>
        <input type="date" onChange={datehandler} value={date} />
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
export default ExpenseForm;
