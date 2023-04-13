export default (state, action) => {
    switch(action.type) {
        default:
            return state;
        
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [action.payload ,...state.expenses]
            };
        
        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            };
    }
}