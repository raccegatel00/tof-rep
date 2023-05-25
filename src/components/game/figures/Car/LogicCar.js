import Car from "./Car";
import {useEffect, useState} from "react";
import './LogicCar.css';
import {useDispatch, useSelector} from "react-redux";
import {setCarStatus} from "../../../../store/reducers/gameCarStatusReducer";
import {nextLevel, resetValue} from "../../../../store/reducers/gameProgressReducer";

export const STATUS_NONE = 0;
export const STATUS_GO_GAS = 1;
export const STATUS_WAIT_GAS = 2;
export const STATUS_GO_AWAY = 3;
export const STATUS_END = 4;

export default function LogicCar(props) {
    const status = useSelector((state) => state.game_car_status.value);
    const [y, setY] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        setY(0);
        const timer = setTimeout(() => {
            dispatch(setCarStatus(STATUS_GO_GAS));
        }, 2000);
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        if (status == STATUS_GO_GAS) {
            setY(-1500);
            setTimeout(() => {
                dispatch(setCarStatus(STATUS_WAIT_GAS));
            }, 2000);
        }

        if (status == STATUS_GO_AWAY) {
            setY(-4200);
            setTimeout(() => {
                dispatch(setCarStatus(STATUS_END));
                dispatch(nextLevel());
                dispatch(resetValue());
                dispatch(setCarStatus(STATUS_NONE));
            }, 2500);
        }
    }, [status]);

    return (
        <div id='logic_car' style={
            {
                transform: `translateY(${y}px)`,
            }
        }>
            <Car x={4950} y={5000}/>
        </div>
    )
}
