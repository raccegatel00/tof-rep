import './Title.css';

function Title(props) {
    return (
        <div className="best_analog_title">
            <span className="best">{props.best}</span>
            <span className="analog">{props.analog}</span>
        </div>
    )
}

export default Title;
