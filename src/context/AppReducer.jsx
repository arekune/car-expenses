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
            const carIndex = state.cars.findIndex(car => car.carName === carName);
            if (carIndex === -1) {
                // Car not found, add new car
                return {
                ...state,
                cars: [...state.cars, updatedCar]
                };
            } else {
                // Car found, update existing car
                const updatedCars = [...state.cars];
                updatedCars[carIndex] = updatedCar;
                return {
                ...state,
                cars: updatedCars
                };
            }
        
        case "DELETE_CAR":
            return {
                ...state,
                cars: state.cars.filter(car => car.carName !== action.payload),
                expenses: state.expenses.filter(expense => expense.carName !== action.payload)
            };
    }
}