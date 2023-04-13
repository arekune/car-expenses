import { useState } from "react";

export const AddExpense = () => {

    const [make, setMake] = useState("");
    const [register, setRegister] = useState("");
    const [litres, setLitres] = useState("");
    const [price, setPrice] = useState("");
    const [distance, setDistance] = useState("");

    return (
        <>
            <h3>
                Add new expenses
            </h3>

            <form>
                <div className="form-control">
                    <input type="text" 
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    placeholder="Make & model"
                    />
                </div>

                <div className="form-control">
                    <input type="text" 
                    value={register}
                    onChange={(e) => setRegister(e.target.value)}
                    placeholder="Registration plate"
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
                    Add transaction
                </button>
            </form>
        </>
    )
}