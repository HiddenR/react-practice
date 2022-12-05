import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.Title);
  const btn = () => {
    setTitle("Title Updated");
    console.log("hello btn");
  };
  return (
    <div>
      <div className="ExpenseItem_Wrapper">
        <ExpenseDate Date={props.Date} />
        <div className="ExpenseItem_Title-wrapper">
          <h3> {title}</h3>
          <div className="ExpenseItem_Cost">${props.Cost}</div>
        </div>
        <button onClick={btn} className="btn">
          Update
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
