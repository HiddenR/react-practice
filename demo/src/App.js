import "./App.css";
import New from "./components/New";
import ExpenseDisplay from "./components/ExpenseDisplay";
import ExpenseForm from "./components/ExpenseForm";
const App = () => {
  // const SaveExpenseDataHandler = (EnteredExpenseData) => {
  //   const expenseData = {
  //     ...EnteredExpenseData,
  //     id: Math.random().toString(),
  //   };
  //   console.log(expenseData);
  // };

  return (
    <div className="App">
      <New />
      <ExpenseDisplay />
    </div>
  );
};

export default App;
