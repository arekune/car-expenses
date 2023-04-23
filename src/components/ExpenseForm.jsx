import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ExpenseForm = () => {

    const [name, setName] = useState("");
    const [litres, setLitres] = useState("");
    const [price, setPrice] = useState("");
    const [distance, setDistance] = useState("");

    const { addExpense } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newExpense = {
            id: Date.now(),
            name,
            litres: +litres,
            price: +price,
            distance: +distance
        }

        addExpense(newExpense);
        setName("");
        setLitres("");
        setPrice("");
        setDistance("");
    }

    return (
        <>
            <h3>
                Add new expenses
            </h3>

            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <input type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Car name (make & model, registration plate, etc.)"
                    />
                </div>

                <div className="form-control">
                    <input type="number" 
                    value={litres}
                    onChange={(e) => setLitres(e.target.value)}
                    placeholder="Litres refueled"
                    />
                </div>

                <div className="form-control">
                    <input type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price of refueling"
                    />
                </div>

                <div className="form-control">
                    <input type="number" 
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    placeholder="Distance driven"
                    />
                </div>

                <button className="btn">
                    Add refueling expense
                </button>
            </form>
        </>
    )
}