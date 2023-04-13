import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Expense from "./Expense";

export const ExpenseList = () => {

    const { expenses } = useContext(GlobalContext);

    return (
        <>
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