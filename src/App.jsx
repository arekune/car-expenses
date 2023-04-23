import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { ExpenseTotal } from "./components/ExpenseTotal";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseForm } from "./components/ExpenseForm";

function App() {

  return (
    <GlobalProvider>
      <Header />

      <div className="container">
        <ExpenseTotal />
        <ExpenseList />
        <ExpenseForm />
      </div>
    </GlobalProvider>
  );
}

export default App;