import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state

const initState = {
    expenses: [
        {
            id: 1,
            make: "Mitsubishi Pajero",
            register: "CAM-30",
            litres: 50,
            price: 95,
            distance: 500
        },
        {
            id: 2,
            make: "Mitsubishi Pajero",
            register: "CAM-30",
            litres: 50,
            price: 50,
            distance: 500
        }
    ]
}

// Create context

export const GlobalContext = createContext(initState);

// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initState);

    return (
        <GlobalContext.Provider 
        value={ {expenses: state.expenses}}
        >
            {children}
        </GlobalContext.Provider>
    )
}