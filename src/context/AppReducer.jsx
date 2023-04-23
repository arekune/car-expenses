export default (state, action) => {
    switch(action.type) {
        default:
            return state;
        
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            };
        
        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            };

        case "ADD_ELEC_EXPENSE":
            return {
                ...state,
                elecexpenses: [action.payload, ...state.elecexpenses]
            };
        case "DELETE_ELEC_EXPENSE":
            return {
                ...state,
                elecexpenses: state.elecexpenses.filter(elecexpense => elecexpense.id !== action.payload)
            };
    }
}