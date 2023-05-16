import './ReserveSizeTable.css';

function ReserveSizeTable() {
    return (
        <table className="reserve_size_table">
            <thead>
            <tr>
                <td className="title_col">Наименование</td>
                <td>Внутренний<br/>
                    диаметр,<br/>
                    мм
                </td>
                <td>Толщина<br/>
                    стенок,
                    мм
                </td>
                <td>Наружный<br/>
                    диаметр,<br/>
                    мм
                </td>
                <td>Давление<br/>
                    рабочее<br/>
                    (макс), бар
                </td>
                <td>
                    Радиус<br/>
                    изгиба,<br/>
                    мм
                </td>
                <td>
                    Масса<br/>
                    прибл.,<br/>
                    кг/м
                </td>
                <td>
                    Длина<br/>
                    бухты<br/>
                    (мах), м
                </td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="title_col">ALPHA TOF 319 LT DN16 20bar</td>
                <td>16</td>
                <td>5,0</td>
                <td>26</td>
                <td>20</td>
                <td>80</td>
                <td>0,5</td>
                <td>50</td>
            </tr>
            <tr>
                <td className="title_col">ALPHA TOF 319 LT DN19 20bar</td>
                <td>19</td>
                <td>6,0</td>
                <td>26</td>
                <td>30</td>
                <td>90</td>
                <td>0,5</td>
                <td>70</td>
            </tr>
            <tr>
                <td className="title_col">ALPHA TOF 319 LT DN25 20bar</td>
                <td>19</td>
                <td>6,0</td>
                <td>26</td>
                <td>40</td>
                <td>100</td>
                <td>0,5</td>
                <td>90</td>
            </tr>
            </tbody>
        </table>
    )
}

export default ReserveSizeTable;
