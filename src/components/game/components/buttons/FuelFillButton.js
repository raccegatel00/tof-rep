import FuelFillButtonImage from '../../../../img/game/fuel-fill.svg';
import '../Buttons.css';

export default function FuelFillButton(props) {
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
