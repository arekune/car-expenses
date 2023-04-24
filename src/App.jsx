import "./App.css";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { CarList } from "./components/CarList";
import { ExpenseListFull } from "./components/ExpenseListFull";

function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/car-list" element={<CarList />} />
          <Route path="/expense-list-full" element={<ExpenseListFull />} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;