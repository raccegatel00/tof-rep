import './Option.css';

function Option(props) {
    return (
        <div className="option">
            <p className="number">{props.number}</p>
            <p className="title">{props.title}</p>
            <p className="desc">
                {props.desc}
            </p>
        </div>
    )
}

export default Option;
