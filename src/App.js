import './App.css';
import Header from './components/Header'
import ShowExpense from './components/ShowExpense'
import CalculateExpense from './components/CalculateExpense'
import CurrentBalance from './components/CurrentBalance';
import React, { useState } from 'react'

function App() {
  const [currentBal, setCurrentBal] = useState(0);
  const [expenseInput, setExpenseInput] = useState(0)
  const changeInputExpense = (event) =>{
    setExpenseInput(event.target.value)
  }
  const handelClickExpense = (event) => {
    let newBal = Number(currentBal) + Number(expenseInput);
    setCurrentBal(newBal);
  }
  return (
    <>
      <Header handelClickExpense={handelClickExpense} currentBal={currentBal}/>
      <CurrentBalance handelClickExpense={handelClickExpense} currentBal={currentBal} />
      <ShowExpense handelClickExpense={handelClickExpense} currentBal={currentBal}/>
      <CalculateExpense handelClickExpense={handelClickExpense} currentBal={currentBal} changeInputExpense={changeInputExpense} />
    </>
  );
}

export default App;
