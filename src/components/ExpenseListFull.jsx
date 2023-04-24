import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Expense from "./Expense";

export const ExpenseListFull = () => {

    const navigate = useNavigate();
    const { expenses } = useContext(GlobalContext);

    return (
        <>
            <div className="arrow" onClick={() => navigate("/")}/>
            <h3>
                Refueling history
            </h3>

            <ul id="list" className="list">
                {expenses.map(expense => (
                    <Expense 
                    key={expense.id}
                    expense={expense}
                    />
                ))}
            </ul>
        </>
    )
}