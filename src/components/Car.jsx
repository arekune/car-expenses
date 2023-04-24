import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Car({ car }) {

    const { expenses, deleteCar } = useContext(GlobalContext);

    const carExpenses = expenses.filter(expense => expense.carName === car.carName);
    const expenseAmounts = carExpenses.map(expense => expense.expenseAmount);
    const expenseTotal = expenseAmounts.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    const consumption = carExpenses.map(expense => expense.fuelQuantity);
    const consumptionTotal = consumption.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    const distances = carExpenses.map(expense => expense.distanceDriven);
    const distanceTotal = distances.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    let fuelType;
    if (car.carType === "Gas/Diesel") {
        fuelType = "L"
    } else {
        fuelType = "kWh"
    };

    return (
        <div>
            <li>
                <h3>{car.carName}</h3>
                <p>Type: {car.carType}</p>
                <p>Expenses: {expenseTotal}</p>
                <p>Consumption: {consumptionTotal}</p>
                <p>Distance driven: {distanceTotal}</p>
                <p>Average expenses per 100 km: {expenseTotal / (distanceTotal / 100)} €</p>
                <p>Average consumption per 100 km: {consumptionTotal / (distanceTotal / 100)} {fuelType}</p>

                <button className="delete-btn" onClick={() => deleteCar(car.carName)}>
                    x
                </button>
            </li>
    </div>
    )
}

export default Car;