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
        
        case "UPDATE_CAR":
            const { carName, updatedCar } = action.payload;
            return {
                ...state,
                cars: {
                    ...state.cars,
                    [carName]: updatedCar
                }
            };
        
        case "DELETE_CAR":
            return {
                ...state,
                cars: state.cars.filter(car => car.carName !== action.payload)
            }
    }
}