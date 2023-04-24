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

            <Link to={"/expense-list-full"} onClick={() => navigate("/expense-list-full")}
            style={{
                display: 'inline-block',
                padding: '0.5em 0.75em',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.5em',
                border: 'solid',
                cursor: 'pointer',
                fontFamily: "Gill Sans MT",
                fontSize: '1.11em',
                }}
            >
                See full expense history
            </Link>
        </>
    )
}