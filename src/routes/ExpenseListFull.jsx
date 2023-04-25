import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Expense from "../components/Expense";

export const ExpenseListFull = () => {

    const navigate = useNavigate();
    const { expenses } = useContext(GlobalContext);

    return (
        <>
            <div className="arrow" onClick={() => navigate("/")}/>
            
            <h3>
                Refueling & recharging history
            </h3>

            <ul id="list" className="list">
                {expenses?.length === 0 ? (
                    <li>
                        No expenses added
                    </li>
                ) : (
                    expenses?.map(expense => (
                        <Expense 
                        key={expense.id}
                        expense={expense}
                        />
                    ))
                )}
            </ul>
        </>
    )
}