export const ExpenseTotal = () => {
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
                        0.00 €
                    </p>
                </div>

                <div>
                    <h4>
                        Average per 100 km
                    </h4>
                    <p id="money-plus" className="money plus">
                        0.00 €
                    </p>
                </div>
            </div>

            <div className="inc-exp-container">
                <div>
                    <h4>
                        Consumption
                    </h4>
                    <p id="money-plus" className="money plus">
                        0.0 L
                    </p>
                </div>

                <div>
                    <h4>
                        Distance driven
                    </h4>
                    <p id="money-plus" className="money plus">
                        0.0 KM
                    </p>
                </div>
            </div>
        </>
    )
}