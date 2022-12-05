import Expenses from "./Expenses";

function ExpenseItem() {
  const expenses = [
    {
      Date: new Date(2021, 2, 27),
      title: "Car",
      cost: 205,
    },
    {
      Date: new Date(2022, 5, 27),
      title: "Car ",
      cost: 1000,
    },
  ];
  return (
    <div className="wrapper">
      <Expenses item={expenses} />
    </div>
  );
}

export default ExpenseItem;
