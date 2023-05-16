import './Description.css';

function Description(props) {
    return (
        <div className={props.className}>
            <span className="title"><b>{props.title}</b></span>
            <p>
                {props.desc}
            </p>
        </div>
    )
}

export default Description;
