import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import total from "../assets/total.svg";
import gasoline from "../assets/gasoline.svg";
import electric from "../assets/electric.svg";

export const ExpenseTotal = () => {

    const { expenses } = useContext(GlobalContext);

    const [activeTab, setActiveTab] = useState("All cars");

    const gasExpenses = expenses.filter(expense => expense.expenseType === "gas-diesel");
    const electricExpenses = expenses.filter(expense => expense.expenseType === "electric");

    // Totals for all cars
    const price = expenses.map(expense => expense.expenseAmount);
    const priceTotal = price.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    const distance = expenses.map(expense => expense.distanceDriven);
    const distanceTotal = distance.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    // Totals for gas/diesel cars only
    const gasPrice = gasExpenses.map(expense => expense.expenseAmount);
    const gasPriceTotal = gasPrice.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    const gasDistance = gasExpenses.map(expense => expense.distanceDriven);
    const gasDistanceTotal = gasDistance.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    const gasConsumption = gasExpenses.map(expense => expense.fuelQuantity);
    const gasConsumptionTotal = gasConsumption.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    // Totals for electric cars only
    const electricPrice = electricExpenses.map(expense => expense.expenseAmount);
    const electricPriceTotal = electricPrice.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    const electricDistance = electricExpenses.map(expense => expense.distanceDriven);
    const electricDistanceTotal = electricDistance.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    const electricConsumption = electricExpenses.map(expense => expense.fuelQuantity);
    const electricConsumptionTotal = electricConsumption.reduce((accumulator, item) => (accumulator += item), 0).toFixed(1);

    // Function to calculate all averages
    const average = (dividend, divisor) => {
        if (dividend === "0.0" || divisor === "0.0") {
            return "0.0";
        }

        return (dividend / divisor * 100).toFixed(1);
    }

    // Handler function for activating tab
    const handleTabClick = (e) => {
        const tabName = e.target.getAttribute("name");
        setActiveTab(tabName);
      };
    
    // Render elements according to active tab
    let expenseTotalAvg;
    let distanceDriven;
    let consumption;

    if (activeTab === "gas-diesel") {

        expenseTotalAvg =
            <div className="double-container">
                <div>
                    <h4>
                        Refueling expenses
                    </h4>
                    <p id="money-plus" className="money plus">
                        {gasPriceTotal} €
                    </p>
                </div>

                <div>
                    <h4>
                        Average per 100 km
                    </h4>
                    <p id="money-plus" className="money plus">
                        {average(gasPriceTotal, gasDistanceTotal)} €
                    </p>
                </div>
            </div>
        
        distanceDriven =
            <div className="single-container">
                <div>
                    <h4>
                        Distance driven
                    </h4>
                    <p id="money-plus" className="money plus">
                        {gasDistanceTotal} KM
                    </p>
                </div>
            </div>

        consumption =
            <div className="double-container">
                <div>
                    <h4>
                        Consumption
                    </h4>
                    <p id="money-plus" className="money plus">
                        {gasConsumptionTotal} L
                    </p>
                    </div>

                <div>
                    <h4>
                        Average per 100 km
                    </h4>
                    <p id="money-plus" className="money plus">
                        {average(gasConsumptionTotal, gasDistanceTotal)} L
                    </p>
                </div>
            </div>;

    } else if (activeTab === "electric") {

        expenseTotalAvg =
            <div className="double-container">
                <div>
                    <h4>
                        Recharging expenses
                    </h4>
                    <p id="money-plus" className="money plus">
                        {electricPriceTotal} €
                    </p>
                </div>

                <div>
                    <h4>
                        Average per 100 km
                    </h4>
                    <p id="money-plus" className="money plus">
                        {average(electricPriceTotal, electricDistanceTotal)} €
                    </p>
                </div>
            </div>

        distanceDriven =
            <div className="single-container">
                <div>
                    <h4>
                        Distance driven
                    </h4>
                    <p id="money-plus" className="money plus">
                        {electricDistanceTotal} KM
                    </p>
                </div>
            </div>

        consumption =
            <div className="double-container">
                <div>
                    <h4>
                        Consumption
                    </h4>
                    <p id="money-plus" className="money plus">
                        {electricConsumptionTotal} kWh
                    </p>
                </div>

                <div>
                    <h4>
                        Average per 100 km
                    </h4>
                    <p id="money-plus" className="money plus">
                        {average(electricConsumptionTotal, electricDistanceTotal)} kWh
                    </p>
                </div>
            </div>;

    } else {
        expenseTotalAvg =
        <div className="double-container">
            <div>
                <h4>
                    Refueling & recharging expenses
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

        distanceDriven =
            <div className="single-container">
                <div>
                    <h4>
                        Distance driven
                    </h4>
                    <p id="money-plus" className="money plus">
                        {distanceTotal} KM
                    </p>
                </div>
            </div>

        consumption = "";
    }

    return (
        <>
            <h3>
                Totals
            </h3>

            <div className="tab-container">
                <button 
                name="All cars" 
                onClick={handleTabClick} 
                style={{ backgroundColor: activeTab === "All cars" ? "cyan" : "gray" }}
                >
                    <img 
                    src={total}
                    className="svg"
                    style={{ height: 25, width: 25 }}
                    alt="All cars" 
                    />
                </button>

                <button 
                name="gas-diesel" 
                onClick={handleTabClick} 
                style={{ backgroundColor: activeTab === "gas-diesel" ? "cyan" : "gray" }}
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
                style={{ backgroundColor: activeTab === "electric" ? "cyan" : "gray" }}
                >
                    <img 
                    src={electric} 
                    className="svg"
                    style={{ height: 25, width: 25 }}
                    alt="Electric" 
                    />
                </button>
            </div>

            <>
                {expenseTotalAvg}
            </>

            <>
                {distanceDriven}
            </>

            {consumption ?
                <>
                    {consumption}
                </>
             : 
                null
            }
        </>
    )
}