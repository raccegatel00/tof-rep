import './ReserveSize.css';

function ReserveSize(props) {
    return (
        <div className="reserve_size">
            <div className="title">
                {props.reserve}
            </div>
            <div className="size">{props.size}</div>
        </div>
    )
}

export default ReserveSize;
