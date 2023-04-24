import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Car from "./Car";

export const CarList = () => {

    const { cars } = useContext(GlobalContext);

    return (
        <>
            <h3>
                Totals & averages by car
            </h3>

            <ul id="list" className="list">
                {Object.keys(cars || {}).length === 0 ? (
                    <li>No cars found</li>
                ) : (
                    Object.keys(cars || {}).map(carName => (
                        <Car 
                        key={carName}
                        carName={carName}
                        />
                    ))
                )}
            </ul>
        </>
    )
}