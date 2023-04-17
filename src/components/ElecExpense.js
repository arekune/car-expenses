import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ElecExpense({ elecexpense }) {

    const { deleteExpense } = useContext(GlobalContext);

    return (
        <div>
            <li>
                {elecexpense.name}
                <span>{elecexpense.price} €</span>
                <button className="delete-btn" onClick={() => deleteExpense(elecexpense.id)}>
                    x
                </button>
            </li>
    </div>
    )
}

export default ElecExpense;