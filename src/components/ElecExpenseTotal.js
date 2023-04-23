import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ElecExpenseTotal = () => {

    const { elecexpenses } = useContext(GlobalContext);

    const price = elecexpenses.map(elecexpense => elecexpense.price);
    const priceTotal = price.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    const distance = elecexpenses.map(elecexpense => elecexpense.distance);
    const distanceTotal = distance.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    const consumption = elecexpenses.map(elecexpense => elecexpense.kilowattHour);
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
                        Charging expenses
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
                        {consumptionTotal} kWh
                    </p>
                </div>

                <div>
                    <h4>
                        Average per 100 km
                    </h4>
                    <p id="money-plus" className="money plus">
                        {average(consumptionTotal, distanceTotal)} kWh
                    </p>
                </div>
            </div>
        </>
    )
}