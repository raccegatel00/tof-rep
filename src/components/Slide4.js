import './Slide4.css';
import stanok from '../img/stanok.png';

function Slide4() {
    return (
        <div className="slide4">
            <div className="left_background"></div>
            <div className="content">
                <div className="left_block">
                    <img src={stanok} alt=""/>
                </div>
                <div className="right_block">
                    <p className="title">собственная<br/>сертифицированная</p>
                    <p className="subtitle">лаборатория гарантирует<br/>
                        высокое качество рукавов</p>
                    <table>
                        <thead>
                        <tr className="header">
                            <td><b>Основной функцией испытательной<br/> лаборатории ООО «Технодизель»</b></td>
                            <td></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Является анализ поступающего на предприятие<br/>
                                сырья и материалов, а также контроль качества<br/>
                                полуфабрикатов и готовой продукции,<br/>
                                выпускаемой предприятием
                            </td>
                            <td>
                                Лаборатория оснащена современным<br/>
                                испытательным оборудованием и новейшими<br/>
                                средствами измерений, что позволяет<br/>
                                проводить испытания с высокой точностью
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr className="header">
                                <td><b>В перечень оборудования<br/> лаборатории входят:</b></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Передовые испытательные установки линейки<br/>
                                    Premier компании Альфа Технолоджи как<br/>
                                    Вискозиметр МV и Реометр MDR,<br/>
                                    для определения пластоэластических<br/>
                                    и вулканизационных характеристик<br/>
                                    резиновых смесей
                                </td>
                                <td>
                                    Лаборатория располагает достаточным<br/>
                                    по количеству и квалификации персоналом,<br/>
                                    имеющим опыт и постоянно повышающим<br/>
                                    свою квалификацию на курсах целевого<br/>
                                    назначения
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="right_background"></div>
        </div>
    )
}

export default Slide4;
