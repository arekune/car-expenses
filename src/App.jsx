import "./App.css";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { HomePage } from "./routes/HomePage";
import { CarList } from "./routes/CarList";
import { ExpenseListFull } from "./routes/ExpenseListFull";

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