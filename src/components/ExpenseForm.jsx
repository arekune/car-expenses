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

    const { cars, addExpense, updateCar } = useContext(GlobalContext);

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
        let updatedCar;

        const carIndex = cars.findIndex(car => car.carName === carName);
        if (carIndex === -1) {
            // Car not found, add new car
            updatedCar = {
                carName: carName,
                carType: isGasDieselTab ? "Gas/Diesel" : "Electric"
            };
        } else {
            // Car found, update existing car
            updatedCar = {
              carName: carName,
              carType: isGasDieselTab ? "Gas/Diesel" : "Electric"
            };
        };

        updateCar(carName, updatedCar);

        // Set form to initial state
        setCarName("");
        setFuelQuantity("");
        setExpenseAmount("");
        setDistanceDriven("");
    }

    const fuelQuantityInput = isGasDieselTab ?
        <div className="form-control">
            <input type="number" 
            value={fuelQuantity}
            onChange={(e) => setFuelQuantity(e.target.value)}
            placeholder="Litres refueled"
            />
        </div>
    :
        <div className="form-control">
            <input type="number" 
            value={fuelQuantity}
            onChange={(e) => setFuelQuantity(e.target.value)}
            placeholder="kWh recharged"
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
                    />
                </div>

                <div className="form-control">
                    {fuelQuantityInput}
                </div>

                <div className="form-control">
                    <input type="number" 
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                    placeholder="Cost"
                    />
                </div>

                <div className="form-control">
                    <input type="number" 
                    value={distanceDriven}
                    onChange={(e) => setDistanceDriven(e.target.value)}
                    placeholder="Distance driven"
                    />
                </div>

                <button className="btn">
                    Add expense
                </button>
            </form>
        </>
    )
}