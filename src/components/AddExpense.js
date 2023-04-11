export const AddExpense = () => {
    return (
        <>
            <h3>
                Add new expenses
            </h3>

            <form>
                <div className="form-control">
                    <input type="text" placeholder="Make & model"/>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Register number"/>
                </div>
                <div className="form-control">
                    <input type="number" placeholder="Litres refueled"/>
                </div>
                <div className="form-control">
                    <input type="number" placeholder="Price of refueling"/>
                </div>
                <div className="form-control">
                    <input type="number" placeholder="Distance driven"/>
                </div>
            </form>
        </>
    )
}