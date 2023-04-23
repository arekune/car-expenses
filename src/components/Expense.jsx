import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Expense({ expense }) {

    const { deleteExpense } = useContext(GlobalContext);

    return (
        <div>
            <li>
                {expense.name}
                <span>{expense.price} €</span>
                <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>
                    x
                </button>
            </li>
    </div>
    )
}

export default Expense;