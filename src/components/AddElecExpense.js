import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddElecExpense = () => {

    const [name, setName] = useState("");
    const [kilowattHour, setKilowattHour] = useState("");
    const [price, setPrice] = useState("");
    const [distance, setDistance] = useState("");

    const { addElecExpense } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newElecExpense = {
            id: Math.floor(Math.random() * 1000000000),
            name,
            kilowattHour: +kilowattHour,
            price: +price,
            distance: +distance
        }

        addElecExpense(newElecExpense);
        setName("");
        setKilowattHour("");
        setPrice("");
        setDistance("");
    }

    return (
        <>
            <h3>
                Add new electric expenses
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
                    value={kilowattHour}
                    onChange={(e) => setKilowattHour(e.target.value)}
                    placeholder="Number of kilowatt-hours charged"
                    />
                </div>

                <div className="form-control">
                    <input type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price of charging"
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
                    Add charging electric expense
                </button>
            </form>
        </>
    )
}