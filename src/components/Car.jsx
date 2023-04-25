import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { average } from "../utils/Utils";

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
                <p>Expenses: {expenseTotal} €</p>
                <p>Consumption: {consumptionTotal} {fuelType}</p>
                <p>Distance driven: {distanceTotal} km</p>
                <p>Average expenses per 100 km: {average(expenseTotal, distanceTotal)} €</p>
                <p>Average consumption per 100 km: {average(consumptionTotal, distanceTotal)} {fuelType}</p>

                <button className="delete-btn" onClick={() => deleteCar(car.carName)}>
                    x
                </button>
            </li>
    </div>
    )
}

export default Car;