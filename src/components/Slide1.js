import './Slide1.css';
import gun from '../img/gun.svg';
import logo from '../img/logo.svg';
import phone from '../img/phone.svg';
import {openModalReason} from "./modal/modals";
import './slide1/gun.css';
import {ModalPhone} from "./modal/ModalPhone";
import {useState} from "react";

function Slide1() {
    const [isOpenModalPhone, setIsOpenModalPhone] = useState(false);

    const openModalPhone = () => {
        setIsOpenModalPhone(!isOpenModalPhone);
    };

    return (
        <div className="slide1">
            <div className="gun">
                <img src={gun} alt=""/>
            </div>
            <div className="content">
                <header>
                    <div className="left_block">
                        <a href="#">
                            <img src={logo} alt=""/>
                        </a>
                        <ul>
                            <li><a href="src/components/Slide1#">О компании</a></li>
                            <li><a href="src/components/Slide1#">Услуги</a></li>
                            <li><a href="src/components/Slide1#">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="right_block">
                        <div className="phone_block">
                            <img src={phone} alt=""/>
                                <a href="tel:+1234567890">+7 123 456-78-99</a>
                        </div>
                        <button className="order_phone" onClick={openModalPhone}>
                            Заказать звонок
                        </button>
                    </div>
                </header>
                <div className="offer">
                    <div className="offer_title">
                        <p><span className="modern">Рукава </span><span className="modern-light">Alpha <span
                            className="modern">TOF 319</span></span></p>
                        <p>от завода</p>
                        <p>производителя</p>
                        <p>с доставкой</p>
                        <p>по всей России</p>
                    </div>
                    <div className="offer_desc">
                        <ul>
                            <li>Гарантия 1 год</li>
                            <li>Доставка по России</li>
                            <li>Оптовые цены</li>
                        </ul>
                    </div>
                    <div className="offer_button_block">
                        <button className="offer_button" onClick={openModalReason}>
                            Получить консультацию
                        </button>
                    </div>
                </div>
            </div>
            {isOpenModalPhone && <ModalPhone handleClose={() => setIsOpenModalPhone(false)}></ModalPhone>}
        </div>
    )
}

export default Slide1;
