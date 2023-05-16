import './OptionList.css';
import Option from "./Option";

function OptionList() {
    return (
        <div className="options">
            <Option
                title={"Исполнение"}
                number={"01"}
                desc={<div>Выполнены из<br/>
                    электропроводимой<br/>
                    маслобензостойкой<br/>
                    резины</div>}/>
            <div className="line"></div>
            <Option
                title={"Технология"}
                number={"02"}
                desc={<div>Рукава армированы нитяным<br/>
                    усилением и имеют антистатическую<br/>
                    медную стренгу по всей длине<br/>
                    в промежуточном слое</div>}/>
            <div className="line"></div>
            <Option
                title={"Температурный диапазон"}
                number={"03"}
                desc={<div>Работоспособны<br/>
                    в температурном<br/>
                    диапазоне от -40 до +100ºС</div>}/>
        </div>
    )
}

export default OptionList;
