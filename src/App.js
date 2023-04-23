import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { ExpenseTotal } from "./components/ExpenseTotal";
import { ExpenseList } from "./components/ExpenseList";
import { AddExpense } from "./components/AddExpense";
import { ElecExpenseList } from "./components/ElecExpenseList";
import { AddElecExpense } from "./components/AddElecExpense";
import { ElecExpenseTotal } from "./components/ElecExpenseTotal";

function App() {

  return (
    <GlobalProvider>
      <Header />

      <div className="container">
        <ExpenseTotal />
        <ExpenseList />
        <AddExpense />
        <ElecExpenseTotal />
        <ElecExpenseList />
        <AddElecExpense />
      </div>
    </GlobalProvider>
  );
}

export default App;