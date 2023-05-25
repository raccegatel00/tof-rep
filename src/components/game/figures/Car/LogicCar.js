import Car from "./Car";
import {useEffect, useState} from "react";
import './LogicCar.css';

export const STATUS_NONE = 0;
export const STATUS_GO_GAS = 1;
export const STATUS_WAIT_GAS = 2;
export const STATUS_GO_AWAY = 3;

export default function LogicCar(props) {
    const [status, setStatus] = useState(STATUS_NONE);
    const [y, setY] = useState(1000);

    useEffect(() => {
        if (props.status in [STATUS_NONE, STATUS_GO_AWAY, STATUS_WAIT_GAS, STATUS_GO_GAS]) {
            setStatus(props.status);
        }
    }, [props])

    useEffect(() => {
        if (STATUS_GO_GAS) {
            setY(3500);
        }

        if (STATUS_GO_AWAY) {
            setY(5000);
        }
    }, [status])

    const handle = () => {
    }

    return (
        <div id='logic_car' onClick={handle}>
            <Car x={4950} y={y}/>
        </div>
    )
}
