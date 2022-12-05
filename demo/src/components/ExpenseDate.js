import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.Date.toLocaleString("en-US", { month: "long" });
  const day = props.Date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.Date.getFullYear();

  return (
    <div className="ExpenseItem_Date">
      <div className="ExpenseItem_Date_month">{month}</div>
      <div className="ExpenseItem_Date_day">{day}</div>
      <div className="ExpenseItem_Date_year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
