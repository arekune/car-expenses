import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ExpenseTotal = () => {

    const { expenses } = useContext(GlobalContext);

    const price = expenses.map(expense => expense.price);
    const priceTotal = price.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    const distance = expenses.map(expense => expense.distance);
    const distanceTotal = distance.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    const consumption = expenses.map(expense => expense.litres);
    const consumptionTotal = consumption.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    const average = (dividend, divisor) => {
        if (dividend === "0.0" || divisor === "0.0") {
            return "0.0";
        }

        return (dividend / divisor * 100).toFixed(1);
    }

    return (
        <>
            <h3>
                Totals
            </h3>

            <div className="inc-exp-container">
                <div>
                    <h4>
                        Refueling expenses
                    </h4>
                    <p id="money-plus" className="money plus">
                        {priceTotal} €
                    </p>
                </div>

                <div>
                    <h4>
                        Average per 100 km
                    </h4>
                    <p id="money-plus" className="money plus">
                        {average(priceTotal, distanceTotal)} €
                    </p>
                </div>
            </div>

            <div className="inc-single-container">
                <div>
                    <h4>
                        Distance driven
                    </h4>
                    <p id="money-plus" className="money plus">
                        {distanceTotal} KM
                    </p>
                </div>
            </div>

            <div className="inc-exp-container">
                <div>
                    <h4>
                        Consumption
                    </h4>
                    <p id="money-plus" className="money plus">
                        {consumptionTotal} L
                    </p>
                </div>

                <div>
                    <h4>
                        Average per 100 km
                    </h4>
                    <p id="money-plus" className="money plus">
                        {average(consumptionTotal, distanceTotal)} L
                    </p>
                </div>
            </div>
        </>
    )
}