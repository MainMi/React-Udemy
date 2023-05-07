import { useState } from "react";
import ExpensiveItems from "./components/ExpensiveItem/ExpensiveItems";
import NewExpensiveItem from "./components/newExpensive/NewExpensiveItem";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: '32324234',
      title: 'Test count',
      amount: 100,
      date: new Date(2022, 7, 14),
    }
  ];
  let localStorageExpenses = JSON.parse(localStorage.getItem('expenses'));
  if (localStorageExpenses?.length > 0) {
    localStorageExpenses = localStorageExpenses.map((value) => {
      return { ...value, date: new Date(value.date) };
    })
  }
  console.table(localStorageExpenses);
  
  const [ expenses, setExpenses ] = useState(
    localStorageExpenses
      ? localStorageExpenses
      : DUMMY_EXPENSES
  );

  const addExpensiveHandler = expense => {
    setExpenses((prevExpense) => {
      const newExpenses = [expense, ...prevExpense];
      localStorage.setItem('expenses', JSON.stringify(newExpenses))
      return [...newExpenses];
    })
  }
  const deleteExpensiveHandler = index => {
    setExpenses((prevExpense) => {
      prevExpense.splice(index, 1);
      localStorage.setItem('expenses', JSON.stringify(prevExpense))
      return [...prevExpense];
    })
  }
  return (
    <div>
      <NewExpensiveItem onAddExpensiveData={addExpensiveHandler} />
      <ExpensiveItems expenses={ expenses } onAddExpense={addExpensiveHandler} onDeleteExpensiveIndex={deleteExpensiveHandler}/>
    </div>
  );
}

export default App;
