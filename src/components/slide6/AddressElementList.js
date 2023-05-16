import phone from "../../img/phone.svg";
import mail from "../../img/map/mail.svg";
import point from "../../img/map/point.svg";
import whats from "../../img/map/whats.svg";
import vk from "../../img/map/vk.svg";
import telegram from "../../img/map/telegram.svg";
import calendar from "../../img/map/calendar.svg";
import './AddressElementList.css';
import AddressElement from "./AddressElement";

export default function AddressElementList() {
    return (
        <div className="address_elements">
            <AddressElement title={'Телефон'}>
                <img src={phone} alt=""/>
                <p>
                    <b>+7 347 269-40-71</b>
                </p>
            </AddressElement>
            <AddressElement title={'Почта'}>
                <img src={mail} alt=""/>
                <p>
                    info@technodizel.ru
                </p>
            </AddressElement>
            <AddressElement title={'Адрес'}>
                <img src={point} alt=""/>
                <p>
                    4500777, Россия, Республика<br/>
                    Башкортостан, c. Буздяк,<br/>
                    ул. Садовая, д. 23, кв. 3
                </p>
            </AddressElement>
            <AddressElement title={'Социальные сети'}>
                <img src={whats} alt=""/>
                <img src={vk} alt=""/>
                <img src={telegram} alt=""/>
            </AddressElement>
            <AddressElement title={'График работы'}>
                <img src={calendar} alt=""/>
                <p>
                    09:00-18:00
                </p>
            </AddressElement>
        </div>
    )
}
