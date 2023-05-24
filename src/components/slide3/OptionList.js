import './OptionList.css';
import Option from "./Option";

function OptionList() {
    return (
        <div className="options">
            <Option
                title={"Исполнение"}
                number={"01"}
                desc={<span>Выполнены из<br/>
                    электропроводимой<br/>
                    маслобензостойкой<br/>
                    резины</span>}/>
            <div className="line"></div>
            <Option
                title={"Технология"}
                number={"02"}
                desc={<span>Рукава армированы нитяным<br/>
                    усилением и имеют антистатическую<br/>
                    медную стренгу по всей длине<br/>
                    в промежуточном слое</span>}/>
            <div className="line"></div>
            <Option
                title={"Температурный диапазон"}
                number={"03"}
                desc={<span>Работоспособны<br/>
                    в температурном<br/>
                    диапазоне от -40 до +100ºС</span>}/>
        </div>
    )
}

export default OptionList;
