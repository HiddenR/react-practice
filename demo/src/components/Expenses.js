import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";
import ExpensesFilter from "./ExpensesFilter";
import ProgressBar from "./ProgressBar";

const Expenses = (props) => {
  const filterChangerHandler = (seletectedyear) => {
    console.log("Expenses.js");
    console.log(seletectedyear);
  };

  return (
    <div className="ExpenseItem">
      <ExpensesFilter onChangeFilter={filterChangerHandler} />
      <ExpenseItem
        Date={props.item[0].Date}
        Title={props.item[0].title}
        Cost={props.item[0].cost}
      />
      <ExpenseItem
        Date={props.item[1].Date}
        Title={props.item[0].title}
        Cost={props.item[1].cost}
      />
    </div>
  );
};
export default Expenses;
