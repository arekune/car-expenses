function Expense({ expense }) {
    return (
        <div>
            <li>
                {expense.make}
                <span>{expense.price} €</span>
                <button className="delete-btn">
                    x
                </button>
            </li>
    </div>
    )
}

export default Expense;