import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Car from "./Car";

export const CarList = () => {

    const navigate = useNavigate();
    const { cars } = useContext(GlobalContext);

    return (
        <>
            <div className="arrow" onClick={() => navigate("/")}/>

            <h3>
                Totals & averages by car
            </h3>

            <ul className="car-list">
                {cars?.length === 0 ? (
                    <div>
                        No cars found
                    </div>
                ) : (
                    cars?.map(car => (
                        <Car 
                        key={cars.carName}
                        car={car}
                        />
                    ))
                )}
            </ul>
        </>
    )
}