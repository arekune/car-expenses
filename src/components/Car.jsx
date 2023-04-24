import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Car({ carName }) {

    const { deleteCar } = useContext(GlobalContext);

    return (
        <div>
            <li>
                <h3>{carName}</h3>
                <p>Type: {carName.carType}</p>
                <p>Expenses: {carName.expenses}</p>
                <p>Consumption: {carName.consumption}</p>
                <p>Distance driven: {carName.distanceDriven}</p>
                <p>Average expenses per 100 km: {carName.expenses / (carName.distanceDriven / 100)}</p>
                <p>Average consumption per 100 km: {carName.consumption / (carName.distanceDriven / 100)}</p>
                <button className="delete-btn" onClick={() => deleteCar(carName)}>
                    x
                </button>
            </li>
    </div>
    )
}

export default Car;