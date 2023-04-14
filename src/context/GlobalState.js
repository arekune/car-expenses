import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state

const initState = {
    expenses: []
}

// Create context

export const GlobalContext = createContext(initState);

// Provider component to wrap the component tree

export const GlobalProvider = ({ children }) => {

    // The useReducer hook takes in a reducer function and the initial state object
    // The reducer function is responsible for handling state updates based on actions dispatched to it
    const [state, dispatch] = useReducer(AppReducer, initState);

    // Functions to update the state object, dispatched to AppReducer

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