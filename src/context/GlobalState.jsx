import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state

const initState = {
    expenses: [],
    elecexpenses: []
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

    function addElecExpense(expense) {
        dispatch({
            type: "ADD_ELEC_EXPENSE",
            payload: expense
        });
    }

    function deleteExpense(id) {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: id
        });
    }

    function deleteElecExpense(id) {
        dispatch({
            type: "DELETE_ELEC_EXPENSE",
            payload: id
        });
    }

    return (
        <GlobalContext.Provider 
        value={{
                expenses: state.expenses,
                elecexpenses: state.elecexpenses,
                addExpense,
                addElecExpense,
                deleteExpense,
                deleteElecExpense
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}