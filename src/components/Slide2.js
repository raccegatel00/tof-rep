import './Slide2.css';
import ReserveSizeTable from "./slide2/ReserveSizeTable";
import ReserveSize from "./slide2/ReserveSize";
import DescriptionList from "./slide2/DescriptionList";

function Slide2() {
    return (
        <div className="slide2">
            <div className="content">
                <ReserveSize reserve={<div>Запас<br/>прочности</div>} size={"3:1"} />
                <DescriptionList/>
                <ReserveSizeTable/>
            </div>
        </div>
    )
}
export default Slide2;
