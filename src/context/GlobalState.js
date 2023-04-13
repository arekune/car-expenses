import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state

const initState = {
    expenses: []
}

// Create context

export const GlobalContext = createContext(initState);

// Provider component

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initState);

    // Actions

    function addExpense(expense) {
        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        });
    }

    function deleteExpense(id) {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: id
        });
    }

    return (
        <GlobalContext.Provider 
        value={{
                expenses: state.expenses,
                addExpense,
                deleteExpense
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}