import './Slide3.css';
import OptionList from "./slide3/OptionList";
import Title from "./slide3/Title";

function Slide3() {
    return (
        <div className="slide3">
            <div className="left_background"></div>
            <div className="content">
                <Title best={"Лучше"} analog={<div>аналогов <br/>и конкурентов</div>}/>
                <OptionList/>
            </div>
            <div className="right_background"></div>
        </div>
    )
}

export default Slide3;
