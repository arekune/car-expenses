import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Expense from "./Expense";

export const ExpenseList = () => {

    const navigate = useNavigate();
    const { expenses } = useContext(GlobalContext);
    const latestExpenses = expenses.slice(0, 3);

    return (
        <>
            <h3>
                Latest expenses
            </h3>

            <ul id="list" className="list">
                {latestExpenses.map(expense => (
                    <Expense 
                    key={expense.id}
                    expense={expense}
                    />
                ))}
            </ul>

            <Link to={"/expense-list-full"} onClick={() => navigate("/expense-list-full")}>
                See full expense history
            </Link>
        </>
    )
}