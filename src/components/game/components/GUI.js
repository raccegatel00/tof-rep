import styled from "styled-components";
import FuelFillButton from "./buttons/FuelFillButton";
import ProgressBar from "./ProgressBar/ProgressBar";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {STATUS_GO_AWAY, STATUS_WAIT_GAS} from "../figures/Car/LogicCar";
import {increment, setFull} from "../../../store/reducers/gameProgressReducer";
import {setCarStatus} from "../../../store/reducers/gameCarStatusReducer";



const GUIBlock = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    justify-content:flex-end;
    z-index: 1000;
    align-items: center;
    flex-direction: column;
`;

const BottomButtons = styled.div`
    height:200px;
    width:100%;
`;



export default function GUI(props) {
    const currentProgress = useSelector((state) => state.game_progress.value);
    const status = useSelector((state) => state.game_car_status.value)
    const dispatch = useDispatch();
    const [koef, setKoef] = useState(20);

    const handleFill = () => {
        if (status === STATUS_WAIT_GAS) {
            let val = currentProgress + koef;
            if (val >= 100) {
                dispatch(setFull(100));
                dispatch(setCarStatus(STATUS_GO_AWAY));
                setKoef(0.6 * koef);
            } else {
                dispatch(increment(koef));
            }
        }
    }


    return (
        <GUIBlock>
            <ProgressBar progress={currentProgress}/>
            <BottomButtons>
                <FuelFillButton handle={handleFill}/>
            </BottomButtons>
        </GUIBlock>
    )
}
