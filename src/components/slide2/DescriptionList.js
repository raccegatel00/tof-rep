import './DescriptionList.css';
import Description from "./Description";

function DescriptionList() {
    return (
        <div className="description">
            <Description
                className="first_dec"
                title={"Наружный слой"}
                desc={<div>
                    Черный, гладкий,<br/>
                    электропроводящий,<br/>
                    атмосферостойкий,<br/>
                    маслобензостойкий<br/>
                </div>}/>
            <Description
                className="second_dec"
                title={"Армирование"}
                desc={<div>
                    Нитяное усиление,<br/>
                    2 медные проволоки
                </div>}/>
            <Description
                className="third_dec"
                title={"Внутренний слой"}
                desc={<div>
                    NBR, черный, гладкий,<br/>
                    электропроводящий,<br/>
                    маслобензостойкий
                </div>}/>
        </div>
    )
}

export default DescriptionList;
