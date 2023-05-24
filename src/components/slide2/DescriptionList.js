import './DescriptionList.css';
import Description from "./Description";

function DescriptionList() {
    return (
        <div className="description">
            <Description
                className="first_dec"
                title={"Наружный слой"}
                desc={<span>
                    Черный, гладкий,<br/>
                    электропроводящий,<br/>
                    атмосферостойкий,<br/>
                    маслобензостойкий<br/>
                </span>}/>
            <Description
                className="second_dec"
                title={"Армирование"}
                desc={<span>
                    Нитяное усиление,<br/>
                    2 медные проволоки
                </span>}/>
            <Description
                className="third_dec"
                title={"Внутренний слой"}
                desc={<span>
                    NBR, черный, гладкий,<br/>
                    электропроводящий,<br/>
                    маслобензостойкий
                </span>}/>
        </div>
    )
}

export default DescriptionList;
