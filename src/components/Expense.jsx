import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Expense({ expense }) {

    const { deleteExpense } = useContext(GlobalContext);

    return (
        <>
            <li>
                {expense.carName}
                <span>{expense.expenseAmount} €</span>
                <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>
                    x
                </button>
            </li>
    </>
    )
}

export default Expense;