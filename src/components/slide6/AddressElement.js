import './AddressElement.css';

export default function AddressElement(props) {
    return (
        <div className="address_element">
            <p className="el_title">
                {props.title}
            </p>
            <div className="content_el">
                {props.children}
            </div>
        </div>
    )
}
