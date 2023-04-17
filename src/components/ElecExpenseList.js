import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ElecExpense from "./ElecExpense";

export const ElecExpenseList = () => {

    const { elecexpenses } = useContext(GlobalContext);

    return (
        <>
            <h3>
                Electric Charging History
            </h3>

            <ul id="list" className="list">
                {elecexpenses.map(elecexpense => (
                    <ElecExpense 
                    key={elecexpense.id}
                    expense={elecexpense}
                    />
                ))}
            </ul>
        </>
    )
}