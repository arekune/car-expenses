import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { ExpenseTotal } from './components/ExpenseTotal';
import { ExpenseList } from './components/ExpenseList';
import { AddExpense } from './components/AddExpense';

function App() {

  return (
    <>
      <Header />

      <div className="container">
        <ExpenseTotal />
        <ExpenseList />
        <AddExpense />
      </div>
    </>
  );
}

export default App;