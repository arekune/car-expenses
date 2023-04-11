export const ExpenseList = () => {
    return (
        <>
            <h3>
                Refueling history
            </h3>

            <ul id="list" className="list">
                <li className="minus">
                    <span>-400 €</span>
                    <button className="delete-btn">
                        x
                    </button>
                </li>
            </ul>
        </>
    )
}