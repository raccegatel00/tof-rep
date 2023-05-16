import './MainRuleBlock.css';
import logo_wh from "../../img/logo_wh.svg";
import phone from "../../img/phone.svg";

export default function MainRuleBlock() {
    return (
        <div className="footer_main_block">
            <div className="footer_logo_block">
                <img src={logo_wh} alt=""/>
                <p>Продажа<br/>
                    и производство<br/>
                    рукавов Alpha TOF</p>
            </div>
            <div className="footer_info_block">
                <div className="footer_nav_block">
                    <ul>
                        <li><a href="#">О компании</a></li>
                        <li><a href="#">Услуги</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>

                    <div>
                        <a className="phone_block" href="tel:+1234567890"><img src={phone} alt=""/>+7 123 456-78-99</a>
                    </div>
                </div>
                <div className="requisites_block">
                    <span className="title">Реквизиты</span>
                    <div className="requisites">
                        <p>
                            ИНН 0273070335<br/>
                            КПП 027301001<br/>
                            ПАО «АК БАРС»БАНК
                        </p>
                        <p>
                            БИК 049205805<br/>
                            Р/сч № 40702810400170002522<br/>
                            К/сч № 30101810000000000805
                        </p>
                        <p>
                            в РКЦ НБ РБ<br/>
                            ОКПО 88094888<br/>
                            ОГРН 1080273004525
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
