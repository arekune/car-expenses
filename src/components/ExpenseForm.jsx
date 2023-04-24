import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import gasoline from "../assets/gasoline.svg";
import electric from "../assets/electric.svg";

export const ExpenseForm = () => {

    const [carName, setCarName] = useState("");
    const [fuelQuantity, setFuelQuantity] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const [distanceDriven, setDistanceDriven] = useState("");

    const [isGasDieselTab, setIsGasDieselTab] = useState(true);

    const { addExpense, updateCar } = useContext(GlobalContext);

    const handleTabClick = (e) => {
        const tabName = e.target.getAttribute("name");
        setIsGasDieselTab(tabName === "gas-diesel");
        setFuelQuantity("");
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle adding expenses
        const expenseType = isGasDieselTab ? "gas-diesel" : "electric";

        const newExpense = {
            id: Date.now(),
            carName,
            expenseType,
            fuelQuantity: +fuelQuantity,
            expenseAmount: +expenseAmount,
            distanceDriven: +distanceDriven
        }

        addExpense(newExpense);


        // Handle updating individual cars
        const updatedCar = {
            carName: carName,
            carType: isGasDieselTab ? "Gas/Diesel" : "Electric"
          };

        updateCar(carName, updatedCar);


        // Set form to initial state
        setCarName("");
        setFuelQuantity("");
        setExpenseAmount("");
        setDistanceDriven("");
    };

    const fuelQuantityInput = isGasDieselTab ?
        <div className="form-control">
            <input type="number" 
            value={fuelQuantity}
            onChange={(e) => setFuelQuantity(e.target.value)}
            placeholder="Litres refueled"
            min="1"
            max="250"
            required
            title="Fuel quantity must be between 1 l and 250 l"
            />
        </div>
    :
        <div className="form-control">
            <input type="number" 
            value={fuelQuantity}
            onChange={(e) => setFuelQuantity(e.target.value)}
            placeholder="kWh recharged"
            min="1"
            max="250"
            required
            title="Electricity quantity must be between 1 kWh and 250 kWh"
            />
         </div>;

    return (
        <>
            <h3>
                Add new expenses
            </h3>

            <div className="tab-container">
                <button 
                name="gas-diesel" 
                onClick={handleTabClick} 
                style={{ backgroundColor: isGasDieselTab ? "cyan" : "gray" }}
                >
                    <img 
                    src={gasoline} 
                    className="svg"
                    style={{ height: 25, width: 25 }}
                    alt="Gas/Diesel" 
                    />
                </button>

                <button name="electric" 
                onClick={handleTabClick} 
                style={{ backgroundColor: isGasDieselTab ? "gray" : "cyan" }}
                >
                    <img 
                    src={electric} 
                    className="svg"
                    style={{ height: 25, width: 25 }}
                    alt="Electric" 
                    />
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <input type="text" 
                    value={carName}
                    onChange={(e) => setCarName(e.target.value)}
                    placeholder="Car name (make & model, registration plate, etc.)"
                    minLength="1"
                    maxLength="64"
                    required
                    title="Car name must be between 1 and 64 characters"
                    />
                </div>

                <div className="form-control">
                    {fuelQuantityInput}
                </div>

                <div className="form-control">
                    <input type="number" 
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                    placeholder="Cost (€)"
                    min="0"
                    max="10000"
                    required
                    title="Cost must be between 0 € and 10,000 €"
                    />
                </div>

                <div className="form-control">
                    <input type="number" 
                    value={distanceDriven}
                    onChange={(e) => setDistanceDriven(e.target.value)}
                    placeholder="Distance driven (km)"
                    min="0"
                    max="5000"
                    required
                    title="Distance driven must be between 0 km and 5000 km"
                    />
                </div>

                <button className="btn">
                    Add expense
                </button>
            </form>
        </>
    )
}