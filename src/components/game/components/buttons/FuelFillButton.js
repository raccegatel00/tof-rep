import FuelFillButtonImage from '../../../../img/game/fuel-fill.svg';
import '../Buttons.css';
import {useDispatch, useSelector} from "react-redux";
import {STATUS_WAIT_GAS} from "../../figures/Car/LogicCar";
import {increment} from "../../../../store/reducers/gameProgressReducer";

export default function FuelFillButton(props) {
    const dispatch = useDispatch()

    const handle = (event) => {
        if(props.handle) {
            props.handle(event)
        }
    }

    return (
        <button className='gui_button' onClick={handle} style={
            {
                backgroundImage: `url(${FuelFillButtonImage})`
            }
        }></button>
    )
}
